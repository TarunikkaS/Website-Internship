# ASECO Homepage Setup Guide

## Quick Start (HTML Demo)

**For immediate testing without Node.js:**

1. Open `demo.html` in your web browser
2. The page will work immediately with all animations and interactions

## Full React Development Setup

**Prerequisites:**
- Node.js 16+ and npm

**Installation:**

1. Install Node.js from [nodejs.org](https://nodejs.org/) if not already installed

2. Navigate to the project directory:
```bash
cd "/Users/tarunikkasuresh/Desktop/WEBSITE ASECO"
```

3. Install dependencies:
```bash
npm install
```

4. Start development server:
```bash
npm start
```

5. Open http://localhost:3000 in your browser

**Production Build:**
```bash
npm run build
```

## What You Get

### ✅ Complete Neumorphic Design System
- Cool grey background (#E0E5EC)
- Extruded and inset shadows
- 32px rounded containers
- No borders or white backgrounds

### ✅ Intro Animation (2 seconds)
- Al Shirawi Equipment logo zoom-in effect
- Smooth transition to homepage
- Runs once per page load

### ✅ Interactive ASECO Navigation
- **A** - HSEQ with dropdown (Health, Safety, Environment, Quality)
- **S** - Sustainability (direct link)  
- **E** - Employee Engagement with Education dropdown (KISS Program)
- **C** - Collaboration dropdown (Customers, Suppliers)
- **O** - Operational Excellence (direct link)

### ✅ Responsive & Accessible
- Mobile-first responsive design
- Keyboard navigation support
- Focus management
- Touch-friendly interactions
- 300ms smooth transitions

### ✅ Corporate Premium Feel
- Professional typography
- Subtle micro-interactions
- Physics-based animations
- Clean, calm visual tone

## File Structure

```
WEBSITE ASECO/
├── demo.html              # HTML demo (works immediately)
├── logo.png               # Al Shirawi Equipment logo
├── package.json           # React dependencies
├── tailwind.config.js     # Neumorphic design system
├── README.md             # Full documentation
└── src/                   # React components
    ├── App.js             # Main app with routing
    ├── components/
    │   ├── IntroAnimation.js
    │   ├── Homepage.js
    │   ├── ValueCard.js
    │   └── Dropdown.js
    └── index.css          # Neumorphic styles
```

## Browser Testing

**demo.html works in:**
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

**React app supports:**
- Chrome 80+, Firefox 75+, Safari 13+, Edge 80+

## Customization

### Colors
Edit the CSS custom properties in demo.html or tailwind.config.js:
- Background: `#E0E5EC`
- Light shadow: `#FFFFFF` 
- Dark shadow: `#A3B1C6`

### Animation Timing
- Intro: 2 seconds (as required)
- Transitions: 300ms
- Hover effects: Instant with 300ms return

### Navigation Routes
Current placeholder routes can be replaced with actual pages:
- `/health`, `/safety`, `/environment`, `/quality`
- `/sustainability`
- `/employee-engagement`, `/education/kiss-program`, `/empowerment`
- `/collaboration/customers`, `/collaboration/suppliers`
- `/operational-excellence`

---

**Demo ready to view: Open `demo.html` in any browser** 🚀