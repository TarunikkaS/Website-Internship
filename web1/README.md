# ASECO Homepage - Values & Culture

A responsive homepage for Al Shirawi Equipment (ASECO) featuring neumorphic design system and smooth intro animation.

## Features

- **Intro Animation**: 2-second logo zoom animation on page load
- **Neumorphic Design**: Soft UI with extruded/inset shadows
- **Responsive Layout**: Works on desktop, tablet, and mobile
- **Interactive Navigation**: ASECO values cards with dropdown menus
- **Accessibility**: Keyboard navigation and focus management
- **Smooth Animations**: Physics-based micro-interactions

## Design System

- **Background**: Cool monochromatic grey (#E0E5EC)
- **Shadows**: Extruded and inset neumorphic shadows
- **Typography**: Clean, corporate styling
- **Interactions**: 300ms smooth transitions
- **Border Radius**: 32px rounded containers

## Navigation Structure

### A - Adherence to HSEQ
- Health → `/health`
- Safety → `/safety`
- Environment → `/environment`
- Quality → `/quality`

### S - Sustainability
- Direct link → `/sustainability`

### E - Employee Engagement, Education & Empowerment
- Employee Engagement → `/employee-engagement`
- Education
  - KISS Program → `/education/kiss-program`
- Empowerment → `/empowerment`

### C - Collaboration with Customers & Suppliers
- Collaboration with Customers → `/collaboration/customers`
- Collaboration with Suppliers → `/collaboration/suppliers`

### O - Operational Excellence
- Direct link → `/operational-excellence`

## Tech Stack

- **React 18** - Component-based UI
- **React Router 6** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **Custom CSS** - Neumorphic design system

## Installation & Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm start
```

3. Build for production:
```bash
npm run build
```

## File Structure

```
src/
├── components/
│   ├── IntroAnimation.js    # Logo intro animation
│   ├── Homepage.js          # Main homepage content
│   ├── ValueCard.js         # Reusable ASECO value cards
│   └── Dropdown.js          # Dropdown menu component
├── App.js                   # Main app with routing
├── index.js                 # React entry point
└── index.css                # Global styles + Tailwind

public/
├── index.html               # HTML template
└── logo.png                 # Al Shirawi Equipment logo
```

## Customization

### Colors
Update `tailwind.config.js` to modify the neumorphic color scheme:

```javascript
colors: {
  neumorphic: {
    bg: '#E0E5EC',      // Background color
    light: '#FFFFFF',    // Light shadow
    dark: '#A3B1C6'     // Dark shadow
  }
}
```

### Animation Timing
Modify animation durations in `tailwind.config.js` or component files.

### Navigation Routes
Add new routes in `src/App.js` and update dropdown items in `src/components/Homepage.js`.

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Performance

- Lazy loading for route components
- Optimized animations using CSS transforms
- Minimal re-renders with React best practices
- Image optimization ready

## Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader friendly
- High contrast mode support
- Focus management

---

**Built with ♥ for Al Shirawi Equipment (ASECO)**