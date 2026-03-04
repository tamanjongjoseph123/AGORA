# AGORA Events - Professional Event Management Platform

A modern, responsive React + Vite application featuring two comprehensive platforms:
1. **AGORA Events** - Corporate event management and partnerships
2. **AGORA University Circuit** - Competitive sports tournament platform

## Features

### AGORA Events (Parent Brand)
- **Home Page**: Hero section with featured projects and call-to-action
- **About Page**: Company vision, mission, and core values
- **Projects Page**: Filterable project portfolio with status tracking
- **Partners Page**: Partnership opportunities and inquiry form
- **Contact Page**: Multi-channel contact information and message form
- **FAQ Page**: Comprehensive frequently asked questions

### AGORA University Circuit (Competition Platform)
- **Home Page**: Competition overview with key features and statistics
- **Rankings Page**: Live leaderboard with team standings and season points
- **Schedule Page**: Match calendar with live scores and detailed statistics
- **Registration Page**: QR code registration with multiple user categories
- **Rules Page**: Detailed competition rules and regulations
- **Prizes Page**: Prize pool breakdown and awards information

## Technology Stack

- **Framework**: React 19.2 with TypeScript
- **Build Tool**: Vite 5.4
- **Styling**: Tailwind CSS 4.2
- **Routing**: React Router DOM 7.1
- **Internationalization**: i18next with French/English support
- **Forms**: React Hook Form with Zod validation
- **QR Codes**: qrcode.react
- **Charts**: Recharts
- **Icons**: Lucide React

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header with language switcher
│   └── Footer.tsx          # Footer with contact & social links
├── pages/
│   ├── agora-events/       # AGORA Events pages
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ProjectsPage.tsx
│   │   ├── PartnersPage.tsx
│   │   ├── ContactPage.tsx
│   │   └── FAQPage.tsx
│   └── circuit/            # AGORA Circuit pages
│       ├── CircuitHomePage.tsx
│       ├── RankingsPage.tsx
│       ├── SchedulePage.tsx
│       ├── RegisterPage.tsx
│       ├── RulesPage.tsx
│       └── PrizesPage.tsx
├── data/                   # Static data
│   ├── teams.ts
│   ├── matches.ts
│   ├── rankings.ts
│   └── projects.ts
├── i18n/                   # Translations
│   ├── config.ts
│   └── locales/
│       ├── en.json
│       └── fr.json
├── App.tsx                 # Main app with routing
├── main.tsx               # Entry point
└── index.css              # Global styles & Tailwind

Configuration:
├── vite.config.ts         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # Dependencies
└── index.html             # HTML entry point
```

## Installation & Setup

### Prerequisites
- Node.js 16.0 or higher
- pnpm (or npm/yarn)

### Getting Started

1. **Install Dependencies**
   ```bash
   pnpm install
   ```

2. **Start Development Server**
   ```bash
   pnpm dev
   ```
   The app will open at `http://localhost:3000`

3. **Build for Production**
   ```bash
   pnpm build
   ```

4. **Preview Production Build**
   ```bash
   pnpm preview
   ```

## Design System

### Color Palette
- **Primary Purple**: `#7B2CBF`
- **Primary Orange**: `#FF6B35`
- **Red Accent**: `#D62828`
- **Dark**: `#1a1a1a`
- **Light**: `#f8f8f8`

### Typography
- **Font Family**: System fonts (Segoe UI, Roboto, etc.)
- **Headings**: Bold weights for hierarchy (H1-H4)
- **Body**: Regular weight with 1.4-1.6 line-height

### Components
All reusable components include:
- Gradient button styles (primary, secondary, outline)
- Card components with hover effects
- Responsive grid layouts
- Mobile-first design
- Smooth animations and transitions

## Internationalization (i18n)

The app supports English and French with automatic language persistence:
- Language switcher in header
- All content translated in JSON files
- Stored in localStorage for user preference
- Switch using: `i18n.changeLanguage('en')` or `i18n.changeLanguage('fr')`

## Static Data Management

All data is stored as static TypeScript arrays:
- **Teams**: Team information and metadata
- **Matches**: Match schedule with scores and statistics
- **Rankings**: Current season standings
- **Projects**: AGORA Events portfolio

For form submissions:
- Registration data stored in localStorage for demo purposes
- Can be easily connected to a backend API

## Forms & Validation

Forms use React Hook Form with Zod validation:
- Partnership inquiry form (Partners page)
- Contact form (Contact page)
- Event registration (Circuit registration)
- Input validation with error messages
- Successful submission feedback

## Responsive Design

Mobile-first approach with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

Features:
- Hamburger menu on mobile
- Responsive grids and layouts
- Optimized images
- Touch-friendly buttons

## QR Code Integration

- Static QR code displayed on registration page
- Links to registration form
- Generated with qrcode.react library
- Can be extended for real scanning functionality

## Performance Optimizations

- Code splitting by route
- Lazy image loading
- Optimized bundle size
- CSS-in-JS with Tailwind
- Efficient re-renders with React hooks

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization

### Changing Branding
1. Update colors in `tailwind.config.js`
2. Replace logo image URL in Header component
3. Update i18n translations

### Adding New Pages
1. Create new component in `src/pages/`
2. Add route in `App.tsx`
3. Update navigation in Header component
4. Add translations to i18n files

### Connecting to Backend
1. Replace static data imports with API calls
2. Update form submissions to POST requests
3. Implement authentication if needed
4. Update TypeScript types as needed

## Known Limitations

- Static data only (no backend/database)
- Form submissions stored in localStorage
- QR codes display only (no real scanning)
- No authentication system
- No real-time updates

## Future Enhancements

- Backend API integration
- User authentication & profiles
- Real-time match updates
- Payment processing for tickets
- Admin dashboard
- Email notifications
- Social media integration

## Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Other Platforms
The app can be deployed to:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Docker containers
- Traditional hosting

## Support

For issues or questions, please check:
1. FAQ sections on both platforms
2. Contact form on AGORA Events site
3. Terms & conditions on Rules page

## License

AGORA Events Platform © 2024. All rights reserved.

---

**Built with React + Vite | Styled with Tailwind CSS | Deployed with ❤️**
