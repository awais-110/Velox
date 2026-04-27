// Replace STRIPE_LINK_* with real Stripe Payment Links from dashboard.stripe.com
// Format: https://buy.stripe.com/YOUR_LINK
// Or use Gumroad: https://YOUR_HANDLE.gumroad.com/l/PRODUCT_ID
// Or Lemon Squeezy: https://YOUR_STORE.lemonsqueezy.com/checkout/buy/VARIANT_ID

export const PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$49',
    period: 'one-time',
    featured: false,
    payLink: 'checkout-success.html?plan=Starter',
    features: [
      { text: '5 free sections (always)', included: true },
      { text: '15 premium sections', included: true },
      { text: 'HTML + CSS + JS source', included: true },
      { text: 'Commercial license', included: true },
      { text: '6 months updates', included: true },
      { text: 'AI Prompts library', included: false },
      { text: 'Figma source files', included: false },
      { text: 'Priority support', included: false },
    ]
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$99',
    period: 'one-time',
    featured: true,
    tag: '✦ Most Popular',
    payLink: 'checkout-success.html?plan=Pro',
    features: [
      { text: 'All 40+ sections', included: true },
      { text: 'HTML + CSS + JS source', included: true },
      { text: 'Commercial license', included: true },
      { text: 'Lifetime updates', included: true },
      { text: 'Full AI Prompts library (100+)', included: true },
      { text: 'Figma source files', included: true },
      { text: 'Priority support', included: true },
    ]
  },
  {
    id: 'agency',
    name: 'Agency',
    price: '$199',
    period: 'one-time',
    featured: false,
    payLink: 'checkout-success.html?plan=Agency',
    features: [
      { text: 'Everything in Pro', included: true },
      { text: 'Unlimited client projects', included: true },
      { text: '5-seat team license', included: true },
      { text: 'White-label rights', included: true },
      { text: 'Figma source files', included: true },
      { text: 'Slack support channel', included: true },
      { text: 'Custom section requests', included: true },
    ]
  }
];
