-- ============================================
-- VELOX — Supabase Database Schema
-- Run this in: Supabase Dashboard > SQL Editor
-- ============================================

-- Enable RLS
alter database postgres set "app.jwt_secret" to 'your-jwt-secret';

-- PROFILES (extends auth.users)
create table if not exists public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  email text,
  full_name text,
  avatar_url text,
  plan text default 'free' check (plan in ('free','starter','pro','agency')),
  is_admin boolean default false,
  created_at timestamptz default now()
);
alter table public.profiles enable row level security;
create policy "Users can view own profile" on profiles for select using (auth.uid() = id);
create policy "Admins can view all profiles" on profiles for select using (
  exists (select 1 from profiles where id = auth.uid() and is_admin = true)
);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, email, full_name, avatar_url)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data->>'full_name',
    new.raw_user_meta_data->>'avatar_url'
  );
  return new;
end;
$$;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- SECTIONS (cards)
create table if not exists public.sections (
  id serial primary key,
  name text not null,
  description text,
  tags text,
  price text default 'Free',
  is_free boolean default true,
  anim_class text,
  badge text,
  meta text default 'HTML · CSS · JS',
  status text default 'active' check (status in ('active','inactive','draft')),
  sort_order int default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
alter table public.sections enable row level security;
create policy "Anyone can view active sections" on sections for select using (status = 'active');
create policy "Admins can manage sections" on sections for all using (
  exists (select 1 from profiles where id = auth.uid() and is_admin = true)
);

-- PROMPTS
create table if not exists public.prompts (
  id serial primary key,
  title text not null,
  description text,
  tool text check (tool in ('claude','v0','cursor','gpt')),
  category text check (category in ('hero','saas','agency','portfolio','startup')),
  complexity int default 2 check (complexity between 1 and 3),
  prompt_text text,
  status text default 'active' check (status in ('active','inactive')),
  created_at timestamptz default now()
);
alter table public.prompts enable row level security;
create policy "Anyone can view active prompts" on prompts for select using (status = 'active');
create policy "Admins can manage prompts" on prompts for all using (
  exists (select 1 from profiles where id = auth.uid() and is_admin = true)
);

-- ORDERS
create table if not exists public.orders (
  id text primary key default 'VLX-' || upper(substr(md5(random()::text), 1, 6)),
  customer_id uuid references auth.users(id),
  customer_email text,
  plan text not null check (plan in ('starter','pro','agency')),
  amount numeric(10,2),
  status text default 'pending' check (status in ('pending','paid','refunded','failed')),
  stripe_session_id text,
  is_demo boolean default false,
  created_at timestamptz default now()
);
alter table public.orders enable row level security;
create policy "Users can view own orders" on orders for select using (customer_id = auth.uid());
create policy "Admins can manage orders" on orders for all using (
  exists (select 1 from profiles where id = auth.uid() and is_admin = true)
);

-- BLOG POSTS
create table if not exists public.blog_posts (
  id serial primary key,
  title text not null,
  excerpt text,
  content text,
  category text,
  read_time text,
  emoji text default '🎨',
  gradient text default 'linear-gradient(135deg,#0a0820,#1a0a40)',
  status text default 'draft' check (status in ('published','draft')),
  published_at timestamptz,
  created_at timestamptz default now()
);
alter table public.blog_posts enable row level security;
create policy "Anyone can view published posts" on blog_posts for select using (status = 'published');
create policy "Admins can manage posts" on blog_posts for all using (
  exists (select 1 from profiles where id = auth.uid() and is_admin = true)
);

-- SITE SETTINGS
create table if not exists public.site_settings (
  key text primary key,
  value text,
  updated_at timestamptz default now()
);
alter table public.site_settings enable row level security;
create policy "Anyone can read settings" on site_settings for select using (true);
create policy "Admins can update settings" on site_settings for all using (
  exists (select 1 from profiles where id = auth.uid() and is_admin = true)
);

-- Insert default settings
insert into public.site_settings (key, value) values
  ('site_name', 'VELOX'),
  ('demo_mode', 'true'),
  ('stripe_starter', ''),
  ('stripe_pro', ''),
  ('stripe_agency', '')
on conflict (key) do nothing;

-- ============================================
-- AFTER RUNNING:
-- 1. Go to Authentication > Providers > Google → enable + add credentials
-- 2. Add your domain to Authentication > URL Configuration > Site URL
-- 3. Set your first user as admin:
--    UPDATE profiles SET is_admin = true WHERE email = 'your@email.com';
-- ============================================
