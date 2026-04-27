# VELOX — Premium Animated Hero Sections

## Deploy to Vercel
1. Push repo to GitHub
2. Import on vercel.com → auto-detects config
3. Done. Zero config needed.

## Local Dev
```bash
npm install
npm run dev
```

## Payment Setup
- Replace `STRIPE_LINK_*` in `src/data/pricing.js` with your Stripe payment links
- Or replace with Gumroad/Lemon Squeezy links

## Structure
```
velox/
├── index.html          # Entry point
├── src/
│   ├── data/           # Cards, prompts, pricing, FAQ, blog data
│   ├── styles/         # CSS modules
│   └── main.js         # App logic + router
├── public/             # Static assets
├── vercel.json
└── vite.config.js
```
