# ASECO Website - Corporate Values & Safety Platform

A modern, interactive corporate website showcasing ASECO's core values, safety initiatives, and employee wellness programs. Built with React, featuring smooth animations, glassmorphism design, and comprehensive content sections.

 Project Overview

This website presents ASECO's commitment to excellence through their **A.S.E.C.O.** values framework:
- **A** - Adherence to HSEQ (Health, Safety, Environment, Quality)
- **S** - Sustainability
- **E** - Employee Excellence (Engagement, Education, Empowerment)
- **C** - Collaboration (Customers & Suppliers)
- **O** - Operational Excellence

Features

### Design System
- **Glassmorphism UI** - Frosted glass effects with backdrop blur
- **ASECO Blue Theme** - Primary color: `#1E4ED8`
- **Smooth Animations** - Framer Motion & CSS transitions
- **Scroll Reveal Effects** - Intersection Observer API
- **Masonry Background** - Dynamic image grids with subtle animations
- **Blue Glow Effects** - Cursor-tracking radial gradients
- **Responsive Design** - Mobile-first approach with Tailwind CSS

### Key Components

#### 1. Navigation
- Fixed header with backdrop blur
- Smooth scroll behavior
- Active route highlighting
- Height: 80-90px with 18-20px font sizes

#### 2. Value Cards
- Pill-based navigation system
- Navy blue gradient: `linear-gradient(135deg, #1E3A8A 0%, #1E40AF 50%, #1E4ED8 100%)`
- Horizontal icon + title layout
- Responsive grid (1/2/3/4 columns)
- Hover animations with scale effects

#### 3. Safety Page
- **Hero Section** - Full viewport height with masonry background
- **Grade A Certificate** - Oman Municipal Affairs certification display
- **Near Miss Reporting** - Chart visualization with ImageBox component
- **Golden Rules Grid** - 3x3 radial layout with center title card
- **Training Programs** - Interactive cards with blue glow on hover
- **KPI Charts** - Safety performance metrics
- **Employee Safety Program** - Carousel with auto-rotation
- **Background Overlay** - 55% transparency for optimal readability

#### 4. Health Page
- **Hero Section** - "Employee Health - Wellness Initiatives"
- **Medical Camps & Screenings** - 2-column layout with bullet points
  - General health screenings
  - Vision & optical checks
  - Nutrition consultation
  - Preventive medical checkups
- **Dubai Run Participation** - Large hero image with stacked activity cards
- **Fitness Challenge Gallery** - 3-column masonry grid with hover effects
- **Closing Statement** - Cinematic gradient overlay section

#### 5. GridCardSection
- 3x3 grid layout (0,1,2 | 3,CENTER,4 | 5,6,7)
- Cursor-tracking blue glow effects
- Floating bubble animations (12 particles)
- Glassmorphism cards with hover lift
- Center card with title and gradient background

#### 6. ImageBox
- Responsive image container
- Three aspect ratios: `4/5` (vertical), `1/1` (square), `16/9` (horizontal)
- `object-cover` for proper cropping
- Rounded corners: `rounded-2xl`
- Lazy loading support

#### 7. CardSwap
- Auto-rotating image carousel (4-second intervals)
- Pause on hover
- Indicator dots with click navigation
- Framer Motion slide transitions
- Responsive grid layout

## 🛠️ Tech Stack

### Core
- **React** 18.2.0 - UI library
- **React Router DOM** 6.3.0 - Client-side routing
- **Framer Motion** 12.31.1 - Animation library
- **Tailwind CSS** 3.1.8 - Utility-first CSS framework
- **Lucide React** 0.263.1 - Icon library

### Development
- **Node.js** v24.12.0 / v25.6.0 (managed via nvm)
- **React Scripts** 5.0.1 - Create React App tooling
- **PostCSS** 8.4.16 - CSS processing
- **Autoprefixer** 10.4.8 - CSS vendor prefixes

## 📁 Project Structure

```
WEBSITE ASECO/
├── public/
│   ├── index.html
│   └── ASSETS/
│       └── asset/
│           └── safety/              # Safety page images
│               ├── Screenshot 2026-02-05 at 11.51.19 AM.png  # Grade A certificate
│               ├── Screenshot 2026-02-05 at 11.52.07 AM*.png # Training photos
│               ├── Screenshot 2026-02-05 at 11.52.14 AM*.png # First aid
│               ├── Screenshot 2026-02-05 at 11.52.19 AM.png  # Forklift safety
│               ├── Screenshot 2026-02-05 at 11.52.24 AM*.png # Knowledge sessions
│               ├── Screenshot 2026-02-05 at 11.52.53 AM.png  # Safe hydro
│               └── Screenshot 2026-02-05 at 11.53.05 AM.png  # Mock drill
├── src/
│   ├── components/
│   │   ├── Navigation.js           # Site header
│   │   ├── ValueCard.js            # Homepage value cards with pills
│   │   ├── GridCardSection.js      # 3x3 radial grid layout
│   │   ├── ImageBox.js             # Responsive image container
│   │   ├── CardSwap.js             # Auto-rotating carousel
│   │   ├── MasonryBackground.js    # Animated background grid
│   │   ├── SafetyCharts.js         # KPI visualizations
│   │   ├── Layout.js               # Page layout wrappers
│   │   └── Footer.js               # Site footer
│   ├── pages/
│   │   ├── Homepage.js             # Landing page with values
│   │   ├── SafetyPage.js           # Full safety implementation
│   │   ├── HealthPage.js           # Health & wellness page
│   │   └── PlaceholderPage.js      # Template for remaining pages
│   ├── hooks/
│   │   └── useScrollAnimation.js   # Scroll reveal hook
│   ├── App.js                      # Main app with routing
│   ├── index.js                    # React entry point
│   └── index.css                   # Global styles & animations
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

##  Design Specifications

### Color Palette
- **Primary Blue**: `#1E4ED8` (ASECO brand blue)
- **Navy Gradient**: `#1E3A8A → #1E40AF → #1E4ED8`
- **Background Overlay**: `rgba(255, 255, 255, 0.55)` (55% white)
- **Glassmorphism**: `backdrop-blur-md` with `bg-white/90`

### Typography
- **Headings**: `League Spartan, system-ui, sans-serif`
- **Sizes**: 
  - Hero: `text-6xl md:text-7xl` (60px/70px)
  - Section: `text-5xl md:text-6xl` (48px/60px)
  - Body: `text-xl` (20px)
  - Nav: `text-lg lg:text-xl` (18px/20px)

### Spacing
- **Section Padding**: `py-24` (96px vertical)
- **Container Max Width**: `max-w-7xl` (1280px)
- **Gap Spacing**: `gap-8` (32px) for grids
- **Border Radius**: `rounded-2xl` (16px) to `rounded-3xl` (24px)

### Animations
- **Scroll Reveal**: 
  ```css
  opacity: 0;
  transform: translateY(60px);
  transition: 0.7s cubic-bezier(0.22, 1, 0.36, 1);
  ```
- **Hover Lift**: `hover:-translate-y-2` with shadow increase
- **Page Transition**: `pageFade` animation on route change
- **Floating Bubbles**: 15s linear infinite with blur and scale

##  Getting Started

### Prerequisites
- Node.js v24.x or v25.x (managed via nvm)
- npm 10.x+

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/TarunikkaS/Website-Internship.git
   cd "WEBSITE ASECO"
   ```

2. **Load nvm (if using Node Version Manager)**
   ```bash
   source ~/.nvm/nvm.sh
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start development server**
   ```bash
   npm start
   ```

5. **Open browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
```

Builds the app for production to the `build/` folder. Optimizes for best performance with minification and hashing.

##  Routes

| Route | Component | Status |
|-------|-----------|--------|
| `/` | Homepage | ✅ Complete |
| `/health` | HealthPage | ✅ Complete |
| `/safety` | SafetyPage | ✅ Complete |
| `/environment` | PlaceholderPage | 🚧 Pending |
| `/quality` | PlaceholderPage | 🚧 Pending |
| `/sustainability` | PlaceholderPage | 🚧 Pending |
| `/employee-engagement` | PlaceholderPage | 🚧 Pending |
| `/education` | PlaceholderPage | 🚧 Pending |
| `/empowerment` | PlaceholderPage | 🚧 Pending |
| `/collaboration/customers` | PlaceholderPage | 🚧 Pending |
| `/collaboration/suppliers` | PlaceholderPage | 🚧 Pending |
| `/operational-excellence` | PlaceholderPage | 🚧 Pending |

## 📊 Component API

### ImageBox
```jsx
<ImageBox
  src="/path/to/image.png"
  alt="Description"
  orientation="vertical|square|horizontal"  // default: vertical
/>
```

### GridCardSection
```jsx
<GridCardSection
  title="Section Title"
  items={[
    { icon: IconComponent, title: "Card 1", description: "..." },
    // ... 8 more items (center is title)
  ]}
/>
```

### CardSwap
```jsx
<CardSwap
  images={[
    { src: "/img1.png", alt: "Image 1", orientation: "horizontal" },
    { src: "/img2.png", alt: "Image 2", orientation: "vertical" }
  ]}
/>
```

##  Key Implementations

### Scroll Reveal Animation
```javascript
useEffect(() => {
  const sections = document.querySelectorAll('.reveal-section');
  const revealElements = document.querySelectorAll('.reveal');
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          entry.target.classList.add('active');
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach((section) => observer.observe(section));
  revealElements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);
```

### Blue Glow Cursor Tracking
```javascript
const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });

const handleMouseMove = (e, cardRef) => {
  const rect = cardRef.current.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  setGlowPosition({ x, y });
};

// CSS: radial-gradient(600px circle at var(--x) var(--y), rgba(30,78,216,0.15), transparent)
```

### Navy Blue Gradient Pills
```javascript
background: `linear-gradient(135deg, #1E3A8A 0%, #1E40AF 50%, #1E4ED8 100%)`,
boxShadow: '0 4px 15px rgba(30, 78, 216, 0.3)',
transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
```

##  Troubleshooting

### npm command not found
```bash
# Load nvm first
source ~/.nvm/nvm.sh

# Verify Node.js is active
node --version
npm --version
```

### Port 3000 already in use
```bash
# Kill existing process
lsof -ti:3000 | xargs kill -9

# Or use different port
PORT=3001 npm start
```

### CSS animations not working
- Check `.reveal` and `.reveal-section` classes are applied
- Verify Intersection Observer is initialized in useEffect
- Confirm threshold is appropriate for viewport height

## Development Notes

### Completed Features
- ✅ Navigation component with fixed header
- ✅ Homepage value cards with pill navigation
- ✅ SafetyPage with all sections and animations
- ✅ HealthPage with wellness content
- ✅ GridCardSection 3x3 layout
- ✅ ImageBox responsive component
- ✅ Blue glow cursor-tracking effects
- ✅ Scroll reveal animations
- ✅ Page transition animations
- ✅ Masonry background with 55% overlay
- ✅ Pill button refactoring with navy gradient
- ✅ CardSwap auto-rotating carousel

### Future Enhancements
- 🔄 Environment page implementation
- 🔄 Quality page implementation
- 🔄 Sustainability page implementation
- 🔄 Employee Excellence pages (Engagement, Education, Empowerment)
- 🔄 Collaboration pages (Customers, Suppliers)
- 🔄 Operational Excellence page
- 🔄 Real image integration (currently using placeholders)
- 🔄 Backend API integration for dynamic content
- 🔄 CMS integration for content management
- 🔄 Analytics tracking
- 🔄 SEO optimization

##  Contributing

This project was developed as part of an internship program. For any questions or suggestions:

1. Create an issue in the repository
2. Fork the project and submit a pull request
3. Contact the development team

##  License

Proprietary - ASECO Company

## Acknowledgments

- ASECO team for brand guidelines and content
- React community for excellent documentation
- Tailwind Labs for the CSS framework
- Framer Motion for animation capabilities
- Lucide for beautiful icon library

---

**Built with ❤️ for ASECO** | Last Updated: February 11, 2026
