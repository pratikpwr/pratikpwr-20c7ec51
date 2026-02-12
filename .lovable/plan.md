

# Premium Apple-Inspired Website Revamp

## Overview
Transform the portfolio into a clean, spacious, Apple-style design with cinematic scroll animations, generous whitespace, large typography, and smooth parallax-like effects.

## Design Philosophy
- **Minimalism**: Remove visual clutter (gradient blobs, glass-card borders, busy backgrounds)
- **Typography-first**: Large, bold headlines with tight tracking; lightweight body text
- **Generous spacing**: Tall sections (full or near-full viewport height)
- **Monochrome + accent**: Mostly black/white with subtle primary accent
- **Cinematic animations**: Parallax text reveals, sticky scroll effects, opacity fades tied to scroll progress

---

## Changes by File

### 1. `src/index.css` - Global Styles Overhaul
- Remove `gradient-bg::before` animated gradient backgrounds
- Remove `glass-card` in favor of clean flat cards with subtle borders
- Replace `hover-card` with smoother, subtler transforms
- Add new utility classes:
  - `.text-gradient` for Apple-style gradient text on headings
  - `.section-divider` thin line separators between sections
- Increase section padding significantly (py-32 or more)
- Clean up orbit animation CSS (keep but refine)
- Add smooth scroll-linked opacity transitions

### 2. `tailwind.config.ts` - Typography and Animation Updates
- Add `letter-spacing` utilities for tight headline tracking
- Add new keyframes: `blur-in` (blur to sharp), `slide-up-large` (bigger travel distance), `scale-fade` (scale from 0.8 with fade)
- Refine existing animation durations to be slower/more cinematic (0.8-1.2s)

### 3. `src/components/ScrollReveal.tsx` - Enhanced Scroll Animations
- Add new animation variants: `blur` (starts blurred), `scale` (scales up from 0.9), `parallax` (slower movement creating depth)
- Increase default duration to 0.8s for more cinematic feel
- Add stagger support for child elements

### 4. `src/components/Hero.tsx` - Cinematic Hero
- Make full viewport height (`min-h-screen` already exists)
- Remove background gradient blobs
- Increase heading size dramatically (text-6xl to text-8xl on desktop)
- Add letter-spacing tight on name
- Subtitle in lighter weight, larger size
- CTA buttons: one solid primary, one text-only with arrow
- Simplify badge styling
- Profile image and orbit stays but with cleaner presentation

### 5. `src/components/About.tsx` - Clean Two-Column
- Remove gradient blur backgrounds behind image
- Remove glass-card wrapper on image
- Clean, borderless image with rounded corners
- Section headings: larger, bolder, left-aligned
- More whitespace between content blocks
- Subtle fade-in animations

### 6. `src/components/Skills.tsx` - Minimalist Grid
- Replace glass-cards with clean flat cards (thin border, no backdrop blur)
- Skill tags: simpler styling, monochrome with hover accent
- Core competencies: clean list with subtle left border accent instead of gradient backgrounds
- More breathing room between items

### 7. `src/components/Experience.tsx` - Clean Timeline Feel
- Remove decorative corner gradients from cards
- Cleaner card design: white/dark background, thin border, no glass effect
- Period badge: simpler, no gradient
- Responsibility items: clean text without individual card wrapping
- Achievement items: subtle left-border accent instead of gradient backgrounds
- App cards within experience stay but get cleaner styling

### 8. `src/components/Projects.tsx` - Showcase Layout
- Larger project cards with more prominent images
- Clean hover: subtle shadow increase, no dramatic scale
- Technology tags: minimal pill style
- Cleaner typography hierarchy

### 9. `src/components/Contact.tsx` - Refined Form
- Remove gradient blur behind contact info card
- Cleaner input fields: bottom-border only or very thin border
- Simpler contact info layout
- Social icons: cleaner hover states

### 10. `src/components/Navbar.tsx` - Frosted Glass Nav
- Thinner height, more refined
- Smaller, more refined logo text
- Navigation links: lighter weight, subtle hover underline
- Increase backdrop blur for premium frosted glass effect

### 11. `src/components/Footer.tsx` - Minimal Footer
- Remove gradient background
- Clean separator line
- Lighter, more spacious layout

### 12. `src/components/AppCard.tsx` - Clean App Cards
- Remove gradient hover overlays
- Cleaner image presentation
- Simpler badge and link styling

---

## Technical Details

### New CSS Animations Added
```text
blur-in: filter blur(10px) -> blur(0), opacity 0 -> 1
slide-up-large: translateY(60px) -> 0 with opacity
scale-fade: scale(0.9) opacity(0) -> scale(1) opacity(1)
```

### Color Refinements
- Light mode: Pure white backgrounds, near-black text
- Dark mode: Deep black (#0a0a0a), pure white text
- Reduce primary color usage to key accents only
- Muted foreground stays for secondary text

### Typography Scale
- Hero name: 5xl (mobile) / 8xl (desktop) with -0.04em tracking
- Section titles: 4xl / 5xl with -0.02em tracking  
- Body: 16-18px, relaxed line height, lighter weight

### Animation Timing
- All scroll reveals: 0.8-1s duration with cubic-bezier(0.16, 1, 0.3, 1)
- Stagger delays: 0.1-0.15s between items
- Hover transitions: 0.3-0.4s

