# Quick Start Guide - AGORA Events

Get the AGORA Events application running in 2 minutes!

## 🚀 Get Started

### Step 1: Install Dependencies
```bash
pnpm install
```

### Step 2: Start Development Server
```bash
pnpm dev
```

### Step 3: Open in Browser
Navigate to **http://localhost:3000**

That's it! The app is running! 🎉

---

## 🗺️ Navigate the App

### Main Sites
- **AGORA Events** (Corporate Site)
  - Path: `/` (Home)
  - Click any header link to explore

- **AGORA University Circuit** (Competition Platform)
  - Path: `/circuit` (Home)
  - Click "Circuit" in navigation

### Key Pages to Check Out

1. **Home Page** - `http://localhost:3000/`
   - Beautiful hero section
   - Featured projects
   - Call-to-action buttons

2. **Rankings** - `http://localhost:3000/circuit/rankings`
   - Current team standings
   - Season points
   - Top 3 podium display

3. **Registration** - `http://localhost:3000/circuit/register`
   - QR code display
   - Registration form
   - Multiple user categories

4. **Schedule** - `http://localhost:3000/circuit/schedule`
   - Match calendar
   - Expandable match stats
   - Score display

---

## 🌍 Language Support

Click the **EN / FR** button in the header to switch between:
- English (EN)
- French (FR)

Your choice is saved in the browser!

---

## 📋 Available Commands

```bash
# Development
pnpm dev           # Start dev server

# Production
pnpm build         # Build for production
pnpm preview       # Preview production build locally

# Code Quality
pnpm lint          # Run ESLint

# Other
pnpm install       # Install dependencies
```

---

## 📁 Project Structure

```
src/
├── components/        # Shared components (Header, Footer)
├── pages/            # Page components
│   ├── agora-events/ # Corporate site pages
│   └── circuit/      # Competition platform pages
├── data/             # Static data (teams, matches, etc.)
├── i18n/             # Translations (English, French)
├── App.tsx           # Main app with routing
└── index.css         # Global styles
```

---

## 🎨 Key Features

✅ **Two Complete Platforms**
- AGORA Events (6 pages)
- AGORA University Circuit (6 pages)

✅ **Bilingual Support**
- English & French
- Language persistence

✅ **Professional Design**
- AGORA logo integration
- Purple & Orange gradient branding
- Responsive on all devices

✅ **Interactive Forms**
- Registration form
- Contact form
- Partnership inquiry

✅ **Static Data**
- 8 teams
- 8 matches
- Current rankings
- 6 projects

✅ **Rich Components**
- QR code display
- Match statistics
- Expandable schedules
- Filterable portfolios

---

## 🔧 Customization Tips

### Change Logo
Edit `src/components/Header.tsx`:
```tsx
<img src="YOUR_LOGO_URL" alt="Logo" />
```

### Change Colors
Edit `tailwind.config.js`:
```js
colors: {
  'agora-purple': '#YOUR_COLOR',
  'agora-orange': '#YOUR_COLOR'
}
```

### Update Content
All content is in the page components. Edit:
- Text in `.tsx` files
- Translations in `src/i18n/locales/`

### Add New Page
1. Create file: `src/pages/agora-events/NewPage.tsx`
2. Add route in `src/App.tsx`
3. Update navigation in `Header.tsx`

---

## 📱 Test Responsive Design

1. Open DevTools (F12 or Right-click → Inspect)
2. Click device toggle (mobile icon)
3. Test on different screen sizes:
   - Mobile: 375px
   - Tablet: 768px
   - Desktop: 1920px

---

## 🐛 Common Issues

### App Won't Start
```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm dev
```

### Port 3000 Already in Use
```bash
# Use different port
pnpm dev -- --port 3001
```

### Language Not Switching
- Clear browser cache/localStorage
- Close and reopen browser
- Check console for errors (F12)

### Styles Not Loading
- Hard refresh: Ctrl+Shift+R (or Cmd+Shift+R)
- Check Tailwind is running
- Verify no CSS conflicts

---

## 📚 What's Inside

### Pages Built (12 Total)

**AGORA Events:**
- HomePage - Hero and featured content
- AboutPage - Company info and values
- ProjectsPage - Filterable project portfolio
- PartnersPage - Partnership opportunities
- ContactPage - Contact form and info
- FAQPage - Frequently asked questions

**AGORA Circuit:**
- CircuitHomePage - Competition overview
- RankingsPage - Live leaderboard
- SchedulePage - Match schedule with stats
- RegisterPage - QR + registration form
- RulesPage - Competition rules
- PrizesPage - Prize pool and awards

### Features
- ✅ Responsive design (mobile-first)
- ✅ Dark navigation header
- ✅ Footer with contact info
- ✅ Language switching
- ✅ Form validation
- ✅ Static data management
- ✅ QR code generation
- ✅ Match statistics display
- ✅ Team rankings
- ✅ Animations & transitions

---

## 🚀 Next Steps

1. **Explore the App**
   - Visit all pages
   - Test forms
   - Switch languages
   - Try on mobile

2. **Customize**
   - Update company info
   - Change colors/logo
   - Add your data
   - Modify content

3. **Extend**
   - Add more pages
   - Connect to backend
   - Add authentication
   - Implement payments

4. **Deploy**
   - See `DEPLOYMENT.md` for options
   - Choose platform (Vercel, Netlify, etc.)
   - Set up domain & SSL

---

## 📖 Full Documentation

- **README.md** - Complete project documentation
- **IMPLEMENTATION_SUMMARY.md** - What was built
- **DEPLOYMENT.md** - Deployment guide

---

## 💡 Pro Tips

1. **Use Browser DevTools**
   - F12 or Ctrl+Shift+I to open
   - Check console for errors
   - Test responsive design

2. **Test All Features**
   - Fill out forms to see validation
   - Click all navigation links
   - Test language switching
   - Expand accordions

3. **Look at Code**
   - Well-commented and organized
   - Great for learning React + Vite
   - Modify and experiment

4. **Performance**
   - App loads instantly
   - Smooth animations
   - Optimized for mobile
   - Production-ready

---

## ❓ Need Help?

1. **Check Documentation**
   - README.md
   - IMPLEMENTATION_SUMMARY.md

2. **Review Code**
   - Components are well-structured
   - Easy to understand and modify

3. **Browser Console**
   - F12 → Console
   - Check for error messages

---

## 🎉 You're All Set!

Your professional AGORA Events platform is ready to use.

**Happy coding!** 🚀

---

*Built with React 19 + Vite + Tailwind CSS*
*Designed with ❤️ for modern web applications*
