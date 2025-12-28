# Coding Gurus - Professional Website

A client-ready, professional website for Coding Gurus showcasing services, projects, and expertise.

## 🎯 What's Included

### Pages Created

1. **Homepage** (`/`) - Hero, services, why choose us, trust metrics
2. **Services** (`/services`) - Web Dev, AI/ML, Blockchain, GovTech, MVP
3. **Projects** (`/projects`) - 6 featured case studies with impact metrics
4. **Industries** (`/industries`) - Government, Startups, MSMEs, EdTech, etc.
5. **How We Work** (`/process`) - 5-step process from idea to launch
6. **Pricing** (`/pricing`) - 4 engagement models with pricing factors
7. **Contact** (`/contact`) - Project inquiry form with contact info
8. **Legal Pages** - Privacy Policy & Terms & Conditions

## 🚀 Getting Started

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Quick Customization

### 1. Update Contact Information

**Files to edit:**

- `src/app/contact/page.js`
- `src/components/Footer.js`

**Replace:**

- Email: `contact@codinggurus.in`
- Phone: `+91 99999 99999`

### 2. Connect Contact Form

Choose one option:

**EmailJS (Free):**

```bash
npm install @emailjs/browser
```

**FormSpree:**

```javascript
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```

**Custom API:**
Create `src/app/api/contact/route.js`

### 3. Add Social Media Links

Update in `src/components/Footer.js`:

```javascript
<a href="https://linkedin.com/company/codinggurus">in</a>
<a href="https://twitter.com/codinggurus">tw</a>
<a href="https://github.com/codinggurus">gh</a>
```

### 4. Add Your Logo

Place logo in `/public/logo.png` and update `src/components/Navbar.js`

### 5. Add Project Screenshots

1. Create `/public/projects/` folder
2. Add images
3. Update `src/app/projects/page.js`

## 📋 Important Next Steps

### Before Going Live:

✅ **Content**

- [ ] Update phone/email to real contact info
- [ ] Add actual project screenshots
- [ ] Add team photos (create About page)
- [ ] Add client testimonials

✅ **Backend**

- [ ] Connect contact form (EmailJS/FormSpree)
- [ ] Add meeting scheduler (Calendly/Cal.com)
- [ ] Set up email notifications

✅ **SEO**

- [ ] Add Google Analytics
- [ ] Update metadata in each page
- [ ] Create sitemap.xml
- [ ] Submit to Google Search Console

✅ **Legal**

- [ ] Review Privacy Policy
- [ ] Review Terms & Conditions
- [ ] Add company registration details

✅ **Performance**

- [ ] Optimize images (WebP format)
- [ ] Test on mobile devices
- [ ] Check page load speed

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Deploy

### Add Custom Domain

1. Buy domain (Namecheap, GoDaddy)
2. Point DNS to Vercel
3. Add domain in Vercel settings

## 🎨 Design System

**Colors:**

- Primary Blue: `#2563eb`
- Indigo: `#4f46e5`
- Accent Cyan: `#06b6d4`

**Typography:**

- Font: Geist Sans
- Headings: Bold
- Body: Regular

## 📱 Fully Responsive

- Mobile: < 768px ✅
- Tablet: 768-1024px ✅
- Desktop: > 1024px ✅

## 🔧 Tech Stack

- **Framework:** Next.js 15
- **Styling:** Tailwind CSS
- **Font:** Geist Sans & Mono
- **Components:** React

## 📞 Need Help?

1. Check component files for inline documentation
2. Visit [Next.js Docs](https://nextjs.org/docs)
3. Visit [Tailwind CSS Docs](https://tailwindcss.com)

---

**Built:** December 28, 2025  
**Status:** Ready for production (after content updates)
"# Coding-Gurus" 
