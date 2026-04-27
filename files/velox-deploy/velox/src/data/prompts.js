export const PROMPTS = [
  {
    id:1, title:'Dark Nebula Hero', tool:'claude', cat:'hero', complexity:2,
    desc:'Glowing orbs, scan line and gradient type for dark SaaS or startup pages.',
    prompt:`Create a full-screen hero section spec:

DESIGN: Dark bg (#050507), bold headline font-weight 800 clamp(60px,9vw,120px), lime accent #C8FF57.

ANIMATIONS (CSS only):
- 3 blurred orbs (500px, filter blur(90px)) floating via keyframes 12-18s infinite
- Horizontal scan line sweeping upward every 3s with opacity fade
- Grid bg (1px lines 80px intervals) with radial gradient mask
- Headline words staggered fade-up (delay 0s, 0.1s, 0.2s)
- Badge with pulsing dot

LAYOUT: Centered, badge → headline → subtext → 2 CTA buttons → stat row

OUTPUT: Single self-contained HTML file, CSS variables at top, zero dependencies.`
  },
  {
    id:2, title:'Moving Grid SaaS', tool:'v0', cat:'saas', complexity:1,
    desc:'Animated grid background with lime accent type for SaaS dashboards.',
    prompt:`Build a SaaS hero React component:

Style: Dark bg #020e05, animated CSS grid bg scrolling downward, lime accent #C8FF57.

Include:
- Moving grid (CSS keyframe translateY 0 to 28px, 7s infinite)
- Bold 2-line headline left-aligned 80px+
- Short subtext muted color
- Lime pill CTA + ghost secondary
- 3-4 feature badge pills below CTA
- "Trusted by X companies" with gray placeholder logos

Single React component, no required props, Tailwind if available.`
  },
  {
    id:3, title:'Particle Storm Agency', tool:'cursor', cat:'agency', complexity:3,
    desc:'JS-generated floating particles for cinematic agency hero.',
    prompt:`Build animated agency hero in vanilla HTML/CSS/JS:

PARTICLE SYSTEM (JS):
- Generate 20 particles via JS
- Each: 3px circle, random left 0-100%
- Floats bottom to top with random drift -30px to +30px via CSS var --d
- Duration 3-6s random, delay -5s to 0s
- Colors: #FF5733, #FF7744
- Opacity: fade in at 10%, fade out at 90%

LAYOUT:
- Full vh, dark bg, centered flex
- Headline clamp(56px,8vw,110px) bold
- Line 1 white, line 2 hollow (-webkit-text-stroke)
- Minimal CTA below

Complete runnable HTML file.`
  },
  {
    id:4, title:'Orbit Rings', tool:'claude', cat:'hero', complexity:2,
    desc:'Concentric ring pulse sonar effect for tech product launches.',
    prompt:`Hero section with animated concentric rings:

RINGS:
- 4 rings, 80px starting size, all centered
- border-radius 50%, border 1px solid rgba(255,255,255,0.12)
- Keyframe: scale 0.5→2.2, opacity 0.9→0, 4s infinite
- Stagger delay: 0s, -1s, -2s, -3s
- Positioned absolute, centered with translate(-50%,-50%)

CONTENT above rings:
- Bold headline, small subtitle, minimal CTA
- Background #050510

Output: single HTML file.`
  },
  {
    id:5, title:'Warm Glow Startup', tool:'gpt', cat:'startup', complexity:2,
    desc:'Premium amber glow for luxury startup or product launch pages.',
    prompt:`Premium startup hero:

COLORS: #080600 bg, #FFCC44 accent, #FFF8E8 text

GLOW:
- 280x80px element, background rgba(255,204,68,0.12), blur(38px)
- Animate: scale + opacity pulse 3s alternate infinite
- Place behind/below headline

TYPOGRAPHY:
- ~80px extra-bold warm white, letter-spacing -0.04em
- Accent word in #FFCC44
- Subtext: warm gray 17px light

LAYOUT: Centered, gold pill CTA, 3 social proof items row below

Complete HTML.`
  },
  {
    id:6, title:'Wave Tech Fintech', tool:'v0', cat:'saas', complexity:2,
    desc:'Fluid wave oscillation for fintech, crypto and tech products.',
    prompt:`React hero with CSS wave animations:

WAVES:
- 2 elements, bottom of hero
- border-radius: 50% 50% 0 0 / 60% 60% 0 0
- Width 120%, left -10%
- Wave 1: rgba(0,212,255,0.08), scaleY + translateY keyframe 4s infinite
- Wave 2: delay -2s, opacity 0.5
- Background #04090c, cyan accent #00D4FF

Bold headline, cyan CTA outline (fill on hover)

Self-contained React component.`
  },
  {
    id:7, title:'Matrix Rain Portfolio', tool:'claude', cat:'portfolio', complexity:3,
    desc:'Vertical falling line rain for dark portfolio and personal brand.',
    prompt:`Portfolio hero with falling matrix lines:

LINES (JS generated):
- 18 vertical line elements
- Width 1px, height 40-120px random
- bg: linear-gradient transparent → rgba(255,108,242,0.4) → transparent
- Random left positions
- translateY from -100% to 110% via CSS animation
- Duration 2-5s random, delay -5s to 0s infinite

CONTENT:
- Name 80px+ pink accent
- Role/title muted below
- "View Work" CTA
- bg #08040c

Complete HTML.`
  },
  {
    id:8, title:'SaaS Features + Counters', tool:'cursor', cat:'saas', complexity:3,
    desc:'Animated feature cards with counting metrics on scroll.',
    prompt:`SaaS features section:

METRICS ROW:
- 3-4 large numbers (44px bold)
- Count up animation via IntersectionObserver on scroll
- Labels below each number

CARDS (2-col grid, 4 cards):
- 48px icon box (rounded, semi-transparent accent bg)
- Bold 18px title + 2-3 line desc
- Hover: translateY -6px, brighter border
- Staggered fade-up via IntersectionObserver

COLORS: Dark bg, lime accent #C8FF57

Complete HTML with IntersectionObserver code.`
  },
  {
    id:9, title:'Agency Dark Magnetic', tool:'gpt', cat:'agency', complexity:3,
    desc:'Bold 3-line typography with magnetic CTA button and noise texture.',
    prompt:`Dark agency hero with magnetic button:

TYPOGRAPHY:
- 3-line ~110px headline, font-weight 800, letter-spacing -0.045em
- Line 1: white
- Line 2: hollow (-webkit-text-stroke: 1.5px white)
- Line 3: #C8FF57 accent
- Hover each line: shifts -8px left with transition

BACKGROUND: #050507 + SVG noise texture + faint grid

MAGNETIC BUTTON (JS):
- On mousemove near button, calculate offset from center
- Apply transform translateX/Y proportional to distance (max 15px)
- Reset on mouseleave

SCROLL CUE: Bouncing arrow at bottom center

Complete HTML + CSS + JS.`
  },
  {
    id:10, title:'Countdown Launch Page', tool:'claude', cat:'startup', complexity:2,
    desc:'Live countdown timer + email waitlist form for product launches.',
    prompt:`Startup coming-soon page:

COUNTDOWN (JS):
- Target date: 30 days from now (calculate in JS)
- Display days/hours/minutes/seconds in individual dark rounded boxes
- Numbers animate scale pulse when they change

WAITLIST FORM:
- Email input + submit pill button in a row
- On submit: visual fades out → "You're on the list! ✓" success message
- No backend needed

HEADLINE: Large centered bold
SOCIAL PROOF: "X people already waiting" counter text

Colors: dark bg, lime accent. Complete HTML.`
  },
  {
    id:11, title:'Split Screen Portfolio', tool:'v0', cat:'portfolio', complexity:2,
    desc:'Left text + right project grid with letter-by-letter name reveal.',
    prompt:`Split-screen portfolio React component:

LEFT: dark bg, name reveals letter-by-letter on load (stagger animation-delay per char), title slides from left, social links fade in last

RIGHT: 2x2 grid of project cards, dark bg, hover zoom (scale 1.05) + overlay

DIVIDER: Thin vertical line, slow travel-down animation on load

Mobile: stacks vertically

Tailwind + minimal JS, self-contained React component.`
  },
  {
    id:12, title:'Full Page Snap Scroll', tool:'cursor', cat:'startup', complexity:3,
    desc:'5-section snap-scroll site with dot nav and staggered reveals.',
    prompt:`Full-page scroll site with CSS snap:

STRUCTURE (5 sections, each 100vh):
- CSS: scroll-snap-type: y mandatory on container
- scroll-snap-align: start on each section
- Sections: Hero, About, Services, Work, Contact

DOT NAV (fixed right side):
- Dots update active state via IntersectionObserver
- Click dot → smooth scroll to section

CONTENT:
- S1 Hero: headline + orb bg + CTA
- S2 About: text + 2x2 stat grid
- S3 Services: 3-col card grid
- S4 Work: project showcase grid
- S5 Contact: centered contact area + form

Each section: fade-up stagger via IntersectionObserver

Complete HTML file.`
  },
  {
    id:13, title:'Aurora Gradient Hero', tool:'claude', cat:'hero', complexity:2,
    desc:'Shifting northern lights aurora gradient for dark premium sites.',
    prompt:`Hero with animated aurora gradient:

AURORA:
- Large pseudo-element behind content
- background: linear-gradient(135deg, #00C9FF, #92FE9D, #7B2FFF, #FF5733)
- background-size: 400% 400%
- Animation: background-position shifts over 12s ease infinite
- Low opacity (0.15), massive blur (120px), covering 80% of hero height

HEADLINE: Large bold centered, white with accent word
SUBTEXT: Muted, light weight
CTA: Two buttons primary + ghost

Output complete HTML.`
  },
  {
    id:14, title:'Glitch Text Effect', tool:'gpt', cat:'portfolio', complexity:2,
    desc:'RGB channel-split glitch animation on headline for cyberpunk feel.',
    prompt:`Portfolio hero with CSS glitch effect:

GLITCH HEADLINE:
- Headline element with ::before and ::after pseudo-elements (same text via attr or data-text)
- ::before: color #FF5733, clip-path animation, translateX offset, mix-blend-mode screen
- ::after: color #00D4FF, different clip-path timing
- Keyframe glitch: random clip-path rect() values changing at 2%, 4%, 6%... intervals
- Trigger glitch animation on hover OR run every 6s for 0.3s automatically

LAYOUT: Dark bg, large headline, small role text below, minimal CTA

Complete HTML with the glitch keyframes.`
  },
  {
    id:15, title:'Interactive Dot Grid', tool:'cursor', cat:'saas', complexity:3,
    desc:'Mouse-reactive dot field that ripples away from cursor position.',
    prompt:`Hero with mouse-interactive dot grid:

DOT GRID (JS canvas or CSS grid):
- Generate 20x15 grid of 4px dots on dark bg
- Each dot: position tracked, distance from mouse calculated
- Dots near cursor: scale up + brighten proportionally to proximity (max 3px → 8px)
- Smooth transition back when mouse moves away
- Ambient: random dots slightly pulse on their own

CONTENT overlaid:
- Centered headline above dot grid
- Short subtext
- CTA button

Performance: use requestAnimationFrame for mouse tracking

Complete HTML file.`
  },
  {
    id:16, title:'Terminal Typewriter', tool:'v0', cat:'saas', complexity:1,
    desc:'CLI-style typing animation for developer tools, APIs and infra products.',
    prompt:`Developer-focused hero with terminal animation:

TERMINAL COMPONENT:
- Dark terminal window (rounded corners, traffic light dots top left)
- Text types out line by line: first a command, then output lines
- Blinking cursor (CSS animation)
- Monospace font, green or lime text on near-black bg
- After full sequence types, pauses 2s, then restarts

HERO LAYOUT:
- Left: bold headline + subtext + CTAs
- Right: terminal window component (width ~45%)
- bg: very dark with subtle grid

React component or complete HTML. No external libs needed.`
  },
];
