# LiftAway React - Waste Management Landing Page

Production-quality React landing page converted from Flutter with premium animations.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🎨 Features

- **Hero Section**: Dot-triggered transition layer animation
- **Highlights Section**: Center-split card reveal animation
- **About Section**: Scroll-triggered layered content reveal
- **Glassmorphism UI**: Modern backdrop-blur effects
- **Hover Interactions**: Smooth micro-animations
- **Responsive Design**: Mobile, tablet, and desktop optimized
- **SEO-Friendly**: Semantic HTML and meta tags

## 🛠️ Tech Stack

- React 18 + TypeScript
- Framer Motion (animations)
- Tailwind CSS (styling)
- React Router (navigation)
- Vite (build tool)

## 📁 Project Structure

```
src/
├── sections/
│   ├── Hero.tsx          # Dot-reveal hero animation
│   ├── Highlights.tsx    # Center-split card animation
│   └── About.tsx         # Scroll-triggered content
├── components/
│   └── HighlightCard.tsx # Glassmorphism card with hover
├── pages/
│   ├── LandingPage.tsx   # Main landing page
│   └── LoginPage.tsx     # Login page
└── App.tsx               # Router setup
```

## 🎬 Animation Details

### Hero Section
- Dot navigation triggers transition layer
- Layer sweeps across hero (one-directional)
- Content swaps mid-transition
- Smooth fade transitions

### Highlights Section
- Scroll-triggered visibility detection
- Center card appears first
- Cards split left/right from center
- Content reveals after split completes
- Resets on scroll out, replays on scroll back

### About Section
- Layered text reveal (title → subtitle → paragraphs → stats)
- Illustration slides in with floating animation
- Animated background blobs

## 🎨 Design System

**Colors:**
- Primary: `#0F5132` (Deep Forest Green)
- Secondary: `#D1E7DD` (Sage Green)
- Accent: `#FAF7F2` (Soft Beige)
- Dark: `#1F1F1F` (Charcoal)

**Animation Curves:**
- `easeOutCubic`: [0.65, 0, 0.35, 1]
- Duration: 400-1800ms
- No elastic/bouncy curves

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌐 Routes

- `/` - Landing Page
- `/login` - Login Page

## 🔧 Development

The app uses Vite for fast HMR and optimized builds. All animations respect `prefers-reduced-motion` for accessibility.

## 📦 Build

```bash
npm run build
```

Output in `dist/` folder, ready for deployment.

---

Built with ❤️ using React + Framer Motion
