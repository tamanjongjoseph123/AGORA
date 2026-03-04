# Deployment Guide - AGORA Events

This guide covers deploying the AGORA Events application to various platforms.

## Local Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# The app will open at http://localhost:3000
```

## Production Build

```bash
# Build the app
pnpm build

# This creates a `dist/` folder with optimized production files

# Preview the production build locally
pnpm preview
```

---

## Deployment Platforms

### 1. Vercel (Recommended for Next.js-like apps)

**Automatic Deployment:**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

**Manual Steps:**
1. Go to [vercel.com](https://vercel.com)
2. Sign in or create account
3. Click "New Project"
4. Import your Git repository
5. Vercel auto-detects Vite and builds automatically
6. Click "Deploy"

**Configuration:**
- Build Command: `pnpm build`
- Output Directory: `dist`
- Install Command: `pnpm install`

---

### 2. Netlify

**Via Git:**
1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect your repository
4. Set build settings:
   - Build command: `pnpm build`
   - Publish directory: `dist`
   - Node version: 18
5. Deploy

**Via CLI:**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

**Netlify Configuration** (`netlify.toml`):
```toml
[build]
  command = "pnpm build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### 3. GitHub Pages

**Setup Steps:**
1. Update `vite.config.ts`:
```ts
export default defineConfig({
  base: '/agora-events/', // Your repo name
  // ... other config
})
```

2. Add deployment script to `package.json`:
```json
{
  "scripts": {
    "deploy": "pnpm build && gh-pages -d dist"
  },
  "devDependencies": {
    "gh-pages": "^6.0.0"
  }
}
```

3. Deploy:
```bash
pnpm deploy
```

**Repository Settings:**
- Go to Settings > Pages
- Source: Deploy from a branch
- Branch: gh-pages
- Folder: /(root)

---

### 4. AWS S3 + CloudFront

**Setup:**
1. Create S3 bucket:
```bash
aws s3 mb s3://agora-events-prod
```

2. Build and upload:
```bash
pnpm build
aws s3 sync dist/ s3://agora-events-prod/
```

3. Create CloudFront distribution:
   - Origin domain: your-bucket.s3.amazonaws.com
   - Origin path: /
   - Default cache behavior settings configured

**Automation Script** (`deploy-aws.sh`):
```bash
#!/bin/bash
pnpm build
aws s3 sync dist/ s3://agora-events-prod/ --delete
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

---

### 5. Docker

**Dockerfile:**
```dockerfile
# Build stage
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install
COPY . .
RUN pnpm build

# Production stage
FROM node:18-alpine
WORKDIR /app
RUN npm install -g pnpm-serve
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["pnpm-serve", "-s", "dist", "-l", "3000"]
```

**Build and Run:**
```bash
docker build -t agora-events .
docker run -p 3000:3000 agora-events
```

---

### 6. Traditional Hosting (cPanel, Shared Hosting)

1. Build locally:
```bash
pnpm build
```

2. Upload `dist/` folder contents to your web host

3. Configure web server:
   - **Apache**: Add `.htaccess` to `dist/` folder:
     ```
     <IfModule mod_rewrite.c>
       RewriteEngine On
       RewriteBase /
       RewriteRule ^index\.html$ - [L]
       RewriteCond %{REQUEST_FILENAME} !-f
       RewriteCond %{REQUEST_FILENAME} !-d
       RewriteRule . /index.html [L]
     </IfModule>
     ```
   
   - **Nginx**: Configure nginx.conf:
     ```nginx
     server {
       listen 80;
       server_name agora-events.com;
       root /var/www/dist;
       
       location / {
         try_files $uri $uri/ /index.html;
       }
     }
     ```

---

## Environment Variables

Create `.env.local` in the project root:

```env
VITE_APP_NAME=AGORA Events
VITE_APP_URL=https://agora-events.com
VITE_DEFAULT_LANGUAGE=en
```

**Important:** Only variables prefixed with `VITE_` are exposed to the browser.

---

## Pre-Deployment Checklist

- [ ] Update logo URL to production CDN
- [ ] Update social media links
- [ ] Set correct API endpoints (when backend is ready)
- [ ] Update contact email and phone numbers
- [ ] Test all forms and validation
- [ ] Verify responsive design on mobile
- [ ] Test language switching
- [ ] Check all links work correctly
- [ ] Run `pnpm build` without errors
- [ ] Test production build locally with `pnpm preview`

---

## Post-Deployment

1. **Setup Domain**
   - Configure DNS records
   - Point domain to hosting provider

2. **SSL Certificate**
   - Enable HTTPS (most platforms auto-configure)
   - Verify SSL certificate is valid

3. **Analytics**
   - Add Google Analytics ID
   - Set up error tracking (Sentry, etc.)

4. **Monitoring**
   - Set up uptime monitoring
   - Configure alerts for errors

5. **CDN Configuration**
   - Cache static assets
   - Set cache headers appropriately

---

## Performance Optimization

### Before Deployment

1. Minify code:
```bash
pnpm build  # Already optimized
```

2. Optimize images:
   - Use WEBP format where possible
   - Compress PNG/JPG files
   - Use appropriate image sizes

3. Enable Gzip compression (most platforms auto-configure)

4. Set cache headers:
```
# Cache static assets for 1 year
Cache-Control: public, max-age=31536000, immutable

# Cache HTML for 1 hour
Cache-Control: public, max-age=3600
```

---

## Troubleshooting

### Blank Page After Deployment
- Check browser console for errors
- Verify `base` path in `vite.config.ts`
- Check all assets are loading correctly

### 404 Errors on Page Refresh
- Configure server to serve `index.html` for all routes
- Enable client-side routing fallback

### Slow Performance
- Check network tab for large assets
- Optimize images
- Enable compression
- Use CDN for static files

### Language Not Switching
- Verify localStorage is not blocked
- Check i18n configuration
- Clear browser cache

---

## Continuous Deployment (CI/CD)

### GitHub Actions Example

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'pnpm'
      
      - run: pnpm install
      - run: pnpm build
      
      - uses: vercel/action@main
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

---

## Support & Resources

- **Vite Documentation**: https://vitejs.dev
- **React Documentation**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com
- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com

---

**Ready to deploy! Choose your platform and follow the steps above.** 🚀
