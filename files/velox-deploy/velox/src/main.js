import { CARDS } from './data/cards.js';
import { PLANS } from './data/pricing.js';
import { PROMPTS } from './data/prompts.js';
import { FAQS, BLOGS } from './data/content.js';

// ── FREE CODE SNIPPETS ──
const FREE_CODE = {
  1:`<!-- Nebula Hero — Full Source -->
<div class="nebula-hero">
  <div class="orb"></div>
  <div class="orb orb2"></div>
  <div class="scan-line"></div>
  <div class="content">
    <span class="badge">✦ Your Tagline Here</span>
    <h1>Your <span class="hollow">Headline</span><br><span class="lime">Goes Here</span></h1>
    <p>Your subtext describing what you build.</p>
    <div class="btns">
      <a class="btn-pri" href="#">Get Started →</a>
      <a class="btn-sec" href="#">Learn More</a>
    </div>
  </div>
</div>
<style>
:root{--accent:#C8FF57;--purple:#7B2FFF;}
.nebula-hero{min-height:100vh;background:linear-gradient(160deg,#06060f,#130820);
  display:flex;align-items:center;justify-content:center;
  position:relative;overflow:hidden;text-align:center;font-family:sans-serif;}
.orb{position:absolute;width:400px;height:400px;border-radius:50%;
  background:radial-gradient(circle,rgba(123,47,255,.5),transparent 70%);
  top:-100px;right:-80px;filter:blur(60px);
  animation:float 10s ease-in-out infinite;}
.orb2{width:250px;height:250px;background:radial-gradient(circle,rgba(200,100,255,.3),transparent 70%);
  bottom:40px;left:20px;animation-duration:13s;animation-direction:reverse;}
.scan-line{position:absolute;bottom:0;left:0;right:0;height:1px;
  background:linear-gradient(90deg,transparent,var(--purple),transparent);
  animation:scan 3s linear infinite;}
.content{position:relative;z-index:1;max-width:700px;padding:40px 20px;}
.badge{display:inline-block;background:rgba(200,255,87,.09);border:1px solid rgba(200,255,87,.2);
  color:var(--accent);padding:5px 14px;border-radius:100px;font-size:11px;
  font-weight:700;letter-spacing:.1em;text-transform:uppercase;margin-bottom:28px;}
h1{font-size:clamp(52px,9vw,110px);font-weight:800;letter-spacing:-.05em;
  line-height:.9;color:#fff;margin-bottom:20px;}
.hollow{color:transparent;-webkit-text-stroke:1.5px rgba(255,255,255,.6);}
.lime{color:var(--accent);}
p{color:rgba(255,255,255,.45);font-size:17px;font-weight:300;
  max-width:480px;margin:0 auto 36px;line-height:1.75;}
.btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;}
.btn-pri{background:var(--accent);color:#000;padding:12px 28px;
  border-radius:100px;font-weight:700;font-size:14px;text-decoration:none;}
.btn-sec{border:1px solid rgba(255,255,255,.15);color:#fff;padding:12px 28px;
  border-radius:100px;font-weight:500;font-size:14px;text-decoration:none;}
@keyframes float{0%,100%{transform:translate(0,0);}50%{transform:translate(20px,-30px);}}
@keyframes scan{0%{transform:translateY(0);opacity:0;}50%{opacity:1;}100%{transform:translateY(-100vh);opacity:0;}}
</style>`,

  2:`<!-- Grid SaaS Hero — Full Source -->
<div class="grid-hero">
  <div class="grid-bg"></div>
  <div class="content">
    <h1>The platform<br><span class="lime">teams love</span></h1>
    <p>Ship faster with components that actually look premium.</p>
    <a class="btn" href="#">Start Free →</a>
  </div>
</div>
<style>
:root{--accent:#C8FF57;}
.grid-hero{min-height:100vh;background:#020e05;display:flex;
  align-items:center;justify-content:center;
  position:relative;overflow:hidden;text-align:center;font-family:sans-serif;}
.grid-bg{position:absolute;inset:0;
  background-image:linear-gradient(rgba(200,255,87,.055) 1px,transparent 1px),
    linear-gradient(90deg,rgba(200,255,87,.055) 1px,transparent 1px);
  background-size:26px 26px;
  animation:move 8s linear infinite;}
.content{position:relative;z-index:1;padding:40px 20px;}
h1{font-size:clamp(52px,9vw,108px);font-weight:800;
  letter-spacing:-.05em;line-height:.9;color:#fff;margin-bottom:20px;}
.lime{color:var(--accent);text-shadow:0 0 40px rgba(200,255,87,.3);}
p{color:rgba(255,255,255,.4);font-size:17px;font-weight:300;
  max-width:420px;margin:0 auto 34px;line-height:1.75;}
.btn{background:var(--accent);color:#000;padding:13px 32px;
  border-radius:100px;font-weight:700;font-size:14px;text-decoration:none;}
@keyframes move{from{transform:translateY(0);}to{transform:translateY(26px);}}
</style>`,

  3:`<!-- Matrix Rain Hero — Full Source -->
<div class="matrix-hero">
  <div id="rain"></div>
  <div class="content">
    <h1>YOUR<br><span class="pink">NAME</span></h1>
    <p>Designer & Developer</p>
    <a class="btn" href="#">View Work →</a>
  </div>
</div>
<script>
const rain = document.getElementById('rain');
for(let i=0;i<20;i++){
  const l=document.createElement('div');
  const h=40+Math.random()*100;
  l.style.cssText=\`
    position:absolute;width:1px;height:\${h}px;
    left:\${Math.random()*100}%;
    background:linear-gradient(transparent,rgba(255,108,242,.5),transparent);
    animation:fall \${2+Math.random()*3}s linear \${-Math.random()*5}s infinite;
  \`;
  rain.appendChild(l);
}
</script>
<style>
.matrix-hero{min-height:100vh;background:#06020c;display:flex;
  align-items:center;justify-content:center;
  position:relative;overflow:hidden;text-align:center;font-family:sans-serif;}
#rain{position:absolute;inset:0;}
.content{position:relative;z-index:1;padding:40px 20px;}
h1{font-size:clamp(52px,10vw,120px);font-weight:800;
  letter-spacing:-.05em;line-height:.88;color:#fff;margin-bottom:16px;}
.pink{color:#FF6CF2;text-shadow:0 0 30px rgba(255,108,242,.4);}
p{color:rgba(255,255,255,.35);font-size:16px;font-weight:300;margin-bottom:30px;}
.btn{border:1px solid rgba(255,108,242,.3);color:#FF6CF2;padding:11px 26px;
  border-radius:100px;font-weight:600;font-size:13px;text-decoration:none;}
@keyframes fall{0%{transform:translateY(-120%);opacity:0;}
  30%{opacity:1;}100%{transform:translateY(110vh);opacity:0;}}
</style>`,

  4:`<!-- Orbit Rings Hero — Full Source -->
<div class="orbit-hero">
  <div class="ring"></div><div class="ring r2"></div>
  <div class="ring r3"></div><div class="ring r4"></div>
  <div class="content">
    <h1>ORBIT<br><span class="hollow">HERO</span></h1>
    <p>For tech products that mean business.</p>
    <a class="btn" href="#">Launch →</a>
  </div>
</div>
<style>
.orbit-hero{min-height:100vh;background:#040410;display:flex;
  align-items:center;justify-content:center;
  position:relative;overflow:hidden;text-align:center;font-family:sans-serif;}
.ring{position:absolute;width:80px;height:80px;border-radius:50%;
  border:1px solid rgba(180,180,255,.2);
  top:50%;left:50%;transform:translate(-50%,-50%) scale(.4);
  animation:expand 4.5s ease-out infinite;opacity:0;}
.r2{animation-delay:-1.1s;}.r3{animation-delay:-2.2s;}.r4{animation-delay:-3.3s;}
.content{position:relative;z-index:2;padding:40px;}
h1{font-size:clamp(52px,9vw,108px);font-weight:800;
  letter-spacing:-.05em;line-height:.9;color:#fff;margin-bottom:16px;}
.hollow{color:transparent;-webkit-text-stroke:1.5px rgba(255,255,255,.5);}
p{color:rgba(255,255,255,.35);font-size:16px;font-weight:300;
  max-width:380px;margin:0 auto 30px;line-height:1.75;}
.btn{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);
  color:#fff;padding:11px 26px;border-radius:100px;
  font-weight:600;font-size:13px;text-decoration:none;}
@keyframes expand{
  0%{transform:translate(-50%,-50%) scale(.4);opacity:.8;}
  100%{transform:translate(-50%,-50%) scale(3);opacity:0;}}
</style>`,

  5:`<!-- Bio Pulse Hero — Full Source -->
<div class="bio-hero">
  <div class="ring"></div><div class="ring r2"></div>
  <div class="content">
    <h1>YOUR<br><span class="green">NAME</span></h1>
    <p>Creative Designer based in your city</p>
    <a class="btn" href="#">Get In Touch</a>
  </div>
</div>
<style>
:root{--green:#57FF8A;}
.bio-hero{min-height:100vh;background:#020b03;display:flex;
  align-items:center;justify-content:center;
  position:relative;overflow:hidden;text-align:center;font-family:sans-serif;}
.ring{position:absolute;border-radius:50%;
  border:1px solid rgba(87,255,138,.12);
  width:200px;height:200px;
  top:50%;left:50%;transform:translate(-50%,-50%);
  animation:pulse 5s ease-in-out infinite;}
.r2{width:200px;height:200px;animation-delay:-2.5s;}
.content{position:relative;z-index:1;padding:40px;}
h1{font-size:clamp(52px,9vw,110px);font-weight:800;
  letter-spacing:-.05em;line-height:.9;color:#fff;margin-bottom:16px;}
.green{color:var(--green);text-shadow:0 0 40px rgba(87,255,138,.3);}
p{color:rgba(255,255,255,.35);font-size:16px;font-weight:300;margin-bottom:30px;}
.btn{background:rgba(87,255,138,.08);border:1px solid rgba(87,255,138,.2);
  color:var(--green);padding:11px 26px;border-radius:100px;
  font-weight:600;font-size:13px;text-decoration:none;}
@keyframes pulse{0%,100%{transform:translate(-50%,-50%) scale(1);opacity:.5;}
  50%{transform:translate(-50%,-50%) scale(1.8);opacity:.05;}}
</style>`
};

// ── CURSOR (smooth RAF) ──
const cur = document.getElementById('cur');
const curR = document.getElementById('cur-r');
let mx=window.innerWidth/2, my=window.innerHeight/2;
let rx=mx, ry=my;
document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; cur.style.left=mx+'px'; cur.style.top=my+'px'; });
(function loop(){
  rx += (mx-rx) * .1;
  ry += (my-ry) * .1;
  curR.style.left = rx+'px';
  curR.style.top  = ry+'px';
  requestAnimationFrame(loop);
})();

// ── TOAST ──
function toast(msg, dur=2400){
  const t=document.getElementById('toast');
  t.textContent=msg; t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'), dur);
}

// ── NAV SCROLL ──
window.addEventListener('scroll', ()=>{
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 30);
}, {passive:true});

// ── MOBILE ──
window.toggleMobile = ()=>document.getElementById('mob-menu').classList.toggle('open');
window.closeMobile  = ()=>document.getElementById('mob-menu').classList.remove('open');

// ── ROUTER ──
window.navTo = function(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+id).classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a=>a.classList.remove('active'));
  const el=document.getElementById('nl-'+id); if(el) el.classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
  setTimeout(revealAll, 80);
  closeMobile();
};
window.scrollToEl = sel=>{ const el=document.querySelector(sel); if(el) el.scrollIntoView({behavior:'smooth'}); };

// ── REVEAL ──
const ro = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('in'); });
},{threshold:.07});
function revealAll(){ document.querySelectorAll('.rev').forEach(el=>ro.observe(el)); }
revealAll();

// ── COUNTERS ──
function animCount(el, target, suf=''){
  let v=0; const step=target/60;
  const t=setInterval(()=>{ v+=step; if(v>=target){v=target;clearInterval(t);} el.textContent=Math.round(v)+suf; },16);
}
setTimeout(()=>{
  animCount(document.getElementById('c1'),40,'+');
  animCount(document.getElementById('c2'),2400,'+');
  animCount(document.getElementById('c3'),120,'+');
  animCount(document.getElementById('c4'),380,'+');
},600);

// ── DEMO SLIDER ──
let demoIdx=0, demoTimer;
window.setDemo = function(i){
  document.querySelectorAll('.demo-section').forEach((s,j)=>s.classList.toggle('active',j===i));
  document.querySelectorAll('.demo-ndot').forEach((d,j)=>d.classList.toggle('on',j===i));
  demoIdx=i;
  clearInterval(demoTimer); startDemoTimer();
};
function startDemoTimer(){
  demoTimer=setInterval(()=>{
    const next=(demoIdx+1)%4;
    setDemo(next);
  },4000);
}
startDemoTimer();

// ── PARTICLES ──
function makeParticles(container,color,count){
  for(let i=0;i<count;i++){
    const p=document.createElement('div'); p.className='particle';
    const drift=(Math.random()-.5)*70+'px';
    p.style.cssText=`left:${Math.random()*100}%;animation-duration:${3.5+Math.random()*3}s;animation-delay:-${Math.random()*5}s;--d:${drift};background:${color};`;
    container.appendChild(p);
  }
}
function makeMatrix(container){
  for(let i=0;i<16;i++){
    const l=document.createElement('div'); l.className='meta-line';
    l.style.cssText=`left:${Math.random()*100}%;height:${45+Math.random()*90}px;animation-duration:${2+Math.random()*3.5}s;animation-delay:-${Math.random()*5}s;`;
    container.appendChild(l);
  }
}
function makeFire(container){
  const colors=['#FF9F57','#FF7733','#FFCC44','#FF5500'];
  for(let i=0;i<12;i++){
    const p=document.createElement('div'); p.className='fire-p';
    const sz=8+Math.random()*18;
    p.style.cssText=`left:${8+Math.random()*84}%;width:${sz}px;height:${sz}px;background:${colors[~~(Math.random()*4)]};animation-duration:${1.8+Math.random()*2}s;animation-delay:-${Math.random()*2}s;opacity:.75;`;
    container.appendChild(p);
  }
}
function makeStars(container){
  for(let i=0;i<50;i++){
    const s=document.createElement('div'); s.className='star';
    const sz=Math.random()<.15?3:Math.random()<.4?2:1;
    s.style.cssText=`width:${sz}px;height:${sz}px;top:${Math.random()*100}%;left:${Math.random()*100}%;animation-duration:${2+Math.random()*5}s;animation-delay:-${Math.random()*5}s;`;
    container.appendChild(s);
  }
}
function makeNeon(container){
  const angles=[28,45,62,-28,-45];
  const colors=['rgba(200,255,87,.45)','rgba(255,87,51,.45)','rgba(0,212,255,.45)','rgba(123,47,255,.45)'];
  for(let i=0;i<7;i++){
    const l=document.createElement('div'); l.className='neon-line';
    l.style.cssText=`--ang:${angles[i%5]}deg;background:linear-gradient(90deg,transparent,${colors[i%4]},transparent);animation-duration:${3+Math.random()*3}s;animation-delay:-${Math.random()*4}s;top:${15+Math.random()*70}%;left:0;right:0;`;
    container.appendChild(l);
  }
}

// ── TERMINAL ──
function startTerminal(){
  const body=document.getElementById('termBody');
  if(!body) return;
  const lines=['$ npm install velox','✓ Packages installed (1.1s)','$ velox init --template nebula','✓ Template ready','$ velox preview','→ http://localhost:3000'];
  let li=0, ci=0;
  body.innerHTML='';
  function type(){
    if(li>=lines.length){ setTimeout(()=>{li=0;ci=0;body.innerHTML='';type();},2500); return; }
    if(ci<=lines[li].length){
      body.innerHTML=body.innerHTML.replace(/<span[^>]*>.*?<\/span>/,'')+lines[li].slice(0,ci)+'<span class="cursor-blink"></span>';
      ci++; setTimeout(type,28+Math.random()*28);
    } else {
      body.innerHTML=body.innerHTML.replace(/<span[^>]*>.*?<\/span>/,'')+lines[li]+'<br>';
      li++; ci=0; setTimeout(type, li===lines.length?200:60);
    }
  }
  type();
}

// ── DOT GRID ──
function initDotGrid(){
  const container=document.querySelector('.pv12');
  if(!container) return;
  const dg=document.getElementById('dg');
  if(!dg) return;
  container.addEventListener('mousemove', e=>{
    const rect=container.getBoundingClientRect();
    const cmx=e.clientX-rect.left, cmy=e.clientY-rect.top;
    dg.querySelectorAll('.dot-g').forEach(d=>{
      const dr=d.getBoundingClientRect();
      const dx=dr.left+1.5-rect.left-cmx, dy=dr.top+1.5-rect.top-cmy;
      const dist=Math.sqrt(dx*dx+dy*dy);
      if(dist<70){ const s=1+(70-dist)/35; d.style.transform=`scale(${s})`; d.style.background=`rgba(200,255,87,${.2+(70-dist)/130})`; }
      else{ d.style.transform=''; d.style.background=''; }
    });
  },{passive:true});
  container.addEventListener('mouseleave',()=>dg.querySelectorAll('.dot-g').forEach(d=>{d.style.transform='';d.style.background='';}));
}

// ── CARD FILTER ──
window.filterCards = function(tag,btn){
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('on'));
  btn.classList.add('on');
  let shown=0;
  document.querySelectorAll('.card').forEach(c=>{
    const ct=c.dataset.tag||'';
    const vis=tag==='all'||ct.includes(tag);
    c.style.display=vis?'':'none';
    if(vis){ shown++; c.style.animationDelay=(shown*.04)+'s'; }
  });
};

// ── MODAL ──
window.openModal = function(id){
  const c=CARDS.find(x=>x.id===id); if(!c) return;
  document.getElementById('mTitle').textContent=c.name;
  document.getElementById('mDesc').textContent=c.desc;
  document.getElementById('mPrice').textContent=c.price;
  document.getElementById('mPrice').style.color=c.free?'#57FF8A':'var(--accent)';
  const fw=document.getElementById('mFreeWrap');
  const ap=document.getElementById('mActPremium');
  const mc=document.getElementById('mCode');
  if(c.free){
    fw.style.display='block'; ap.style.display='none';
    mc.textContent=FREE_CODE[c.id]||'<!-- Source code here -->';
  } else {
    fw.style.display='none'; ap.style.display='block';
  }
  document.getElementById('modal').classList.add('on');
};
window.closeModal    = e=>{ if(e.target.id==='modal') document.getElementById('modal').classList.remove('on'); };
window.closeModalBtn = ()=>document.getElementById('modal').classList.remove('on');
window.copyCode      = ()=>{
  const c=document.getElementById('mCode').textContent;
  navigator.clipboard.writeText(c).then(()=>toast('✓ Code copied!'));
};

// ── CARD INNER HTML ──
function cardInner(c){
  const m={
    pv1:`<div class="po"></div><div class="po2"></div><div class="pt">NEBULA</div><div class="pl"></div>`,
    pv2:`<div class="pg"></div><div class="pt" style="text-shadow:0 0 30px rgba(200,255,87,.5);color:var(--accent);">GRID SAAS</div>`,
    pv3:`<div class="pp" id="pEl"></div><div class="pt">AGENCY</div>`,
    pv4:`<div class="pr" style="width:70px;height:70px;top:50%;left:50%;transform:translate(-50%,-50%);"></div><div class="pr" style="width:70px;height:70px;top:50%;left:50%;transform:translate(-50%,-50%);animation-delay:-1.5s;"></div><div class="pr" style="width:70px;height:70px;top:50%;left:50%;transform:translate(-50%,-50%);animation-delay:-3s;"></div><div class="pt" style="position:relative;z-index:2;">ORBIT</div>`,
    pv5:`<div class="pg2"></div><div class="pt" style="position:relative;z-index:1;color:#FFCC44;">GLOW</div>`,
    pv6:`<div class="pw"></div><div class="pw pw2"></div><div class="pw pw3"></div><div class="pt">WAVE</div>`,
    pv7:`<div class="pm" id="mEl"></div><div class="pt">MATRIX</div>`,
    pv8:`<div class="pb" style="width:90px;height:90px;top:50%;left:50%;transform:translate(-50%,-50%);"></div><div class="pb" style="width:90px;height:90px;top:50%;left:50%;transform:translate(-50%,-50%);animation-delay:-2.7s;"></div><div class="pt">PULSE</div>`,
    pv9:`<div class="pf" id="fEl"></div><div class="pt" style="position:relative;z-index:1;">FIRE</div>`,
    pv10:`<div class="aurora"></div><div class="pt">AURORA</div>`,
    pv11:`<div class="pt" data-text="GLITCH">GLITCH</div>`,
    pv12:`<div class="dot-grid" id="dg">${Array(160).fill('<div class="dot-g"></div>').join('')}</div><div class="pt">DOT FIELD</div>`,
    pv13:`<div class="blob"></div><div class="pt">MORPH</div>`,
    pv14:`<div id="nlEl"></div><div class="pt">NEON</div>`,
    pv15:`<div class="terminal"><div class="term-bar"><div class="term-dot" style="background:#FF5F57;"></div><div class="term-dot" style="background:#FEBC2E;"></div><div class="term-dot" style="background:#28C840;"></div></div><div class="term-body" id="termBody"></div></div>`,
    pv16:`<div id="stEl"></div><div class="pt">STARS</div>`,
  };
  return m[c.anim]||`<div class="pt">${c.name.toUpperCase()}</div>`;
}

// ── RENDER CARDS ──
function renderCards(){
  const grid=document.getElementById('cardsGrid'); if(!grid) return;
  const bmap={free:'<span class="badge b-free">Free</span>',new:'<span class="badge b-new">New</span>',hot:'<span class="badge b-hot">Hot</span>',pro:'<span class="badge b-pro">Pro</span>'};
  grid.innerHTML=CARDS.map((c,i)=>`
  <div class="card" data-tag="${c.tags}" onclick="openModal(${c.id})" style="animation-delay:${i*.05}s;">
    <div class="card-prev ${c.anim}">${cardInner(c)}</div>
    ${bmap[c.badge]||''}
    ${c.free?'<span class="free-label">Open Source</span>':''}
    <div class="card-over"><button class="prev-btn">${c.free?'Copy Code':'Quick View'}</button></div>
    <div class="card-foot">
      <div><div class="card-name">${c.name}</div><div class="card-meta">${c.meta}</div></div>
      <div class="card-price ${c.free?'free-price':''}">${c.price}</div>
    </div>
  </div>`).join('');

  // attach dynamic elements after render
  requestAnimationFrame(()=>{
    const pEl=document.getElementById('pEl'); if(pEl) makeParticles(pEl,'#FF5733',14);
    const mEl=document.getElementById('mEl'); if(mEl) makeMatrix(mEl);
    const fEl=document.getElementById('fEl'); if(fEl) makeFire(fEl);
    const stEl=document.getElementById('stEl'); if(stEl) makeStars(stEl);
    const nlEl=document.getElementById('nlEl'); if(nlEl) makeNeon(nlEl);
    initDotGrid();
    startTerminal();
  });
}

// ── RENDER PRICING ──
function renderPricing(){
  const grid=document.getElementById('priceGrid'); if(!grid) return;
  grid.innerHTML=PLANS.map(p=>`
  <div class="p-card ${p.featured?'feat':''}">
    ${p.featured?`<div class="feat-tag">${p.tag}</div>`:''}
    <div class="p-tier">${p.name}</div>
    <div class="p-amt"><sup>$</sup>${p.price.replace('$','')}</div>
    <div class="p-per">${p.period}</div>
    <div class="p-div"></div>
    <ul class="p-feats">${p.features.map(f=>`<li class="${f.included?'':'no'}">${f.text}</li>`).join('')}</ul>
    <a href="${p.payLink}" target="_blank" rel="noopener" class="${p.featured?'p-btn-main':'btn-out'}">${p.featured?'Get Pro Access →':'Get '+p.name}</a>
  </div>`).join('');
}

// ── PROMPTS ──
let activeTool='all', activeCat='all';

window.filterTool = function(tool,btn){
  activeTool=tool;
  document.querySelectorAll('#toolF .f-btn').forEach(b=>b.classList.remove('on','tc','tv','tcu','tg'));
  btn.classList.add('on');
  if(tool==='claude')btn.classList.add('tc');
  else if(tool==='v0')btn.classList.add('tv');
  else if(tool==='cursor')btn.classList.add('tcu');
  else if(tool==='gpt')btn.classList.add('tg');
  renderPrompts();
};
window.filterCat = function(cat,btn){
  activeCat=cat;
  document.querySelectorAll('#catF .f-btn').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
  renderPrompts();
};

function renderPrompts(){
  const grid=document.getElementById('promptsGrid'); if(!grid) return;
  const list=PROMPTS.filter(p=>(activeTool==='all'||p.tool===activeTool)&&(activeCat==='all'||p.cat===activeCat));
  if(!list.length){ grid.innerHTML='<div style="grid-column:1/-1;text-align:center;color:var(--gray);padding:60px;font-size:15px;font-weight:300;">No prompts match this filter.</div>'; return; }
  grid.innerHTML=list.map(p=>`
  <div class="pc rev">
    <div class="pc-top">
      <div class="pc-tags">
        <span class="pc-tag tg-${p.tool}">${p.tool==='gpt'?'ChatGPT':p.tool[0].toUpperCase()+p.tool.slice(1)}</span>
        <span class="pc-tag tg-${p.cat}">${p.cat[0].toUpperCase()+p.cat.slice(1)}</span>
      </div>
      <div style="display:flex;align-items:center;gap:5px;font-size:9.5px;color:var(--gray);font-weight:600;letter-spacing:.06em;text-transform:uppercase;">
        Lvl <div class="cdots"><div class="cd ${p.complexity>=1?'on':''}"></div><div class="cd ${p.complexity>=2?'on':''}"></div><div class="cd ${p.complexity>=3?'on':''}"></div></div>
      </div>
    </div>
    <div class="pc-title">${p.title}</div>
    <p class="pc-desc">${p.desc}</p>
    <div class="pc-prompt" id="pt-${p.id}">${p.prompt.replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\n/g,'<br>')}</div>
    <div class="pc-acts">
      <button class="cpbtn" id="cb-${p.id}" onclick="copyPrompt(${p.id})">
        <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><rect x="4" y="0" width="8" height="8" rx="1.5" stroke="currentColor" stroke-width="1.3"/><rect x="0" y="4" width="8" height="8" rx="1.5" stroke="currentColor" stroke-width="1.3" fill="none"/></svg>
        Copy Prompt
      </button>
      <button class="expbtn" onclick="expandPrompt(${p.id},this)">Show full ↓</button>
    </div>
  </div>`).join('');
  revealAll();
}

window.copyPrompt = function(id){
  const p=PROMPTS.find(x=>x.id===id); if(!p) return;
  navigator.clipboard.writeText(p.prompt).then(()=>{
    const btn=document.getElementById('cb-'+id);
    const orig=btn.innerHTML;
    btn.innerHTML='✓ Copied!'; btn.classList.add('ok');
    toast('✓ Prompt copied to clipboard!');
    setTimeout(()=>{ btn.innerHTML=orig; btn.classList.remove('ok'); },2200);
  });
};
window.expandPrompt = function(id,btn){
  const el=document.getElementById('pt-'+id);
  const ex=el.classList.toggle('ex');
  btn.textContent=ex?'Collapse ↑':'Show full ↓';
};

// ── FAQ ──
function renderFAQ(){
  const body=document.getElementById('faqBody'); if(!body) return;
  body.innerHTML=FAQS.map((f,i)=>`
  <div class="faq-item" id="faq-${i}">
    <div class="faq-q" onclick="toggleFaq(${i})">
      <span class="faq-q-t">${f.q}</span>
      <div class="faq-ico">+</div>
    </div>
    <div class="faq-a"><p class="faq-a-t">${f.a}</p></div>
  </div>`).join('');
}
window.toggleFaq = function(i){
  const el=document.getElementById('faq-'+i);
  const was=el.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(x=>x.classList.remove('open'));
  if(!was) el.classList.add('open');
};

// ── BLOG ──
function renderBlog(){
  const grid=document.getElementById('blogGrid'); if(!grid) return;
  grid.innerHTML=BLOGS.map(b=>`
  <div class="blog-card">
    <div class="blog-img" style="background:${b.bg};">${b.emoji}</div>
    <div class="blog-body">
      <div class="blog-tag">${b.tag}</div>
      <div class="blog-title">${b.title}</div>
      <p class="blog-exc">${b.excerpt}</p>
      <div class="blog-meta"><span>${b.date}</span><span>${b.read} read</span></div>
    </div>
  </div>`).join('');
}

// ── CONTACT FORM ──
window.submitContact = function(){
  const first=document.getElementById('cf-first')?.value.trim();
  const email=document.getElementById('cf-email')?.value.trim();
  const msg=document.getElementById('cf-msg')?.value.trim();
  if(!first||!email||!msg){ toast('⚠ Please fill in all required fields'); return; }
  if(!email.includes('@')){ toast('⚠ Please enter a valid email'); return; }
  document.getElementById('contactFormInner').style.display='none';
  document.getElementById('contactSuccess').style.display='block';
  toast('✓ Message sent! We\'ll be in touch soon.');
};

// ── INIT ──
renderCards();
renderPricing();
renderPrompts();
renderFAQ();
renderBlog();
