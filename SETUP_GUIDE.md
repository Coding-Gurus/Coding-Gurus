# 🚀 Coding Gurus Website - Complete Setup Guide

## ✅ What Has Been Built

Your website is now **CLIENT-READY** with a professional, conversion-focused structure:

### 🎯 All Pages Created

| Page               | URL           | Purpose                               |
| ------------------ | ------------- | ------------------------------------- |
| Homepage           | `/`           | Hero, services snapshot, credibility  |
| Services           | `/services`   | 5 service categories with tech stacks |
| Projects           | `/projects`   | 6 case studies with impact metrics    |
| Industries         | `/industries` | 6 industry verticals                  |
| How We Work        | `/process`    | 5-step process                        |
| Pricing            | `/pricing`    | 4 engagement models                   |
| Contact            | `/contact`    | Lead generation form                  |
| Privacy Policy     | `/privacy`    | Legal compliance                      |
| Terms & Conditions | `/terms`      | Legal compliance                      |

### 🎨 Components Built

- **Navbar**: Responsive navigation with mobile menu
- **Footer**: Comprehensive footer with all links
- **All pages fully responsive** (mobile, tablet, desktop)

---

## 🔥 CRITICAL: Before Going Live

### 1️⃣ Update Contact Information (15 minutes)

**Files to edit:**

#### A. Footer Component

File: `src/components/Footer.js`

```javascript
// Line 52-53: Update email
<a href="mailto:YOUR_ACTUAL_EMAIL@codinggurus.in">
  YOUR_ACTUAL_EMAIL@codinggurus.in
</a>

// Line 57-58: Update phone
<a href="tel:+919876543210">
  +91 98765 43210
</a>
```

#### B. Contact Page

File: `src/app/contact/page.js`

```javascript
// Line 222: Update email
href = "mailto:YOUR_ACTUAL_EMAIL@codinggurus.in";

// Line 243: Update phone
href = "tel:+919876543210";
```

#### C. Privacy & Terms Pages

- `src/app/privacy/page.js` (Line 125)
- `src/app/terms/page.js` (Line 213)

---

### 2️⃣ Connect Contact Form (30 minutes)

**Choose ONE option:**

#### Option A: EmailJS (Free, Easy)

1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Create email service
3. Install package:

```bash
npm install @emailjs/browser
```

4. Update `src/app/contact/page.js`:

```javascript
import emailjs from "@emailjs/browser";

const handleSubmit = (e) => {
  e.preventDefault();

  emailjs
    .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_PUBLIC_KEY")
    .then(() => {
      setSubmitted(true);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
```

#### Option B: FormSpree (Easiest)

1. Sign up at [formspree.io](https://formspree.io)
2. Get form endpoint
3. Update form action:

```javascript
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

#### Option C: Custom API (Most Control)

Create `src/app/api/contact/route.js`:

```javascript
import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();

  // Send email using Nodemailer, SendGrid, etc.
  // Add your email sending logic here

  return NextResponse.json({ success: true });
}
```

---

### 3️⃣ Add Meeting Scheduler (10 minutes)

**Option A: Calendly (Recommended)**

1. Sign up at [calendly.com](https://calendly.com)
2. Create meeting type
3. Update `src/app/contact/page.js` (Line 261):

```javascript
<a
  href="https://calendly.com/YOUR_USERNAME/30min"
  target="_blank"
  className="text-blue-600 hover:underline"
>
  Book a free consultation call
</a>
```

**Option B: Cal.com (Open Source)**

Same process but use: `https://cal.com/YOUR_USERNAME`

---

### 4️⃣ Add Social Media Links (5 minutes)

Update `src/components/Footer.js` (Lines 62-82):

```javascript
<a
  href="https://linkedin.com/company/YOUR_COMPANY"
  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg..."
>
  <LinkedInIcon />
</a>
```

---

## 🎨 Optional Enhancements

### Add Your Logo

1. Place logo: `/public/logo.png` (PNG, 200x50px recommended)
2. Update `src/components/Navbar.js`:

```javascript
import Image from "next/image";

<Link href="/" className="flex items-center gap-2">
  <Image src="/logo.png" alt="Coding Gurus" width={40} height={40} />
  <span className="text-2xl font-bold text-blue-600">Coding Gurus</span>
</Link>;
```

### Add Project Screenshots

1. Create folder: `/public/projects/`
2. Add images (recommended: 1200x800px, WebP format)
3. Update `src/app/projects/page.js`:

```javascript
import Image from "next/image";

// Inside project card:
<Image
  src="/projects/digikshetra.png"
  alt="DigiKshetra Screenshot"
  width={800}
  height={500}
  className="rounded-lg"
/>;
```

### Add Team Section (Create About Page)

Create `src/app/about/page.js`:

```javascript
export default function About() {
  const team = [
    { name: "Name", role: "Role", image: "/team/person1.jpg" },
    // Add team members
  ];

  return (
    <div>
      <h1>About Coding Gurus</h1>
      {/* Team section */}
    </div>
  );
}
```

Update navbar to include About link.

---

## 📊 Add Analytics (15 minutes)

### Google Analytics 4

1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get Measurement ID (G-XXXXXXXXXX)
3. Create `src/app/layout.js` add:

```javascript
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

---

## 🚢 Deploy Your Website

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit - Coding Gurus website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/codinggurus.git
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"
6. Wait 2-3 minutes
7. Your site is live! 🎉

### Step 3: Add Custom Domain

1. Buy domain (Namecheap, GoDaddy, etc.)

   - Recommended: `codinggurus.in` or `codinggurus.com`

2. In Vercel:

   - Go to project settings
   - Click "Domains"
   - Add your domain

3. Update DNS (at your domain provider):

   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com

   Type: A
   Name: @
   Value: 76.76.21.21
   ```

4. Wait 24-48 hours for DNS propagation

---

## 🔍 SEO Optimization

### 1. Submit to Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property (your domain)
3. Verify ownership
4. Submit sitemap: `https://yoursite.com/sitemap.xml`

### 2. Create Sitemap

Create `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://codinggurus.in/</loc><priority>1.0</priority></url>
  <url><loc>https://codinggurus.in/services</loc><priority>0.9</priority></url>
  <url><loc>https://codinggurus.in/projects</loc><priority>0.9</priority></url>
  <url><loc>https://codinggurus.in/contact</loc><priority>0.8</priority></url>
</urlset>
```

### 3. Update Open Graph Images

Create `src/app/opengraph-image.png` (1200x630px)

This will show when sharing on social media.

---

## ✅ Pre-Launch Checklist

### Content

- [ ] Updated email and phone numbers
- [ ] Added real project screenshots
- [ ] Reviewed all text for accuracy
- [ ] Added testimonials (if available)

### Functionality

- [ ] Contact form working and tested
- [ ] All navigation links working
- [ ] Mobile menu functioning
- [ ] Forms submitting correctly

### Legal

- [ ] Reviewed Privacy Policy
- [ ] Reviewed Terms & Conditions
- [ ] Added company registration info

### Technical

- [ ] Google Analytics installed
- [ ] Favicon added
- [ ] Sitemap created
- [ ] Tested on mobile devices
- [ ] Tested on different browsers

### Marketing

- [ ] Social media links added
- [ ] Meeting scheduler connected
- [ ] Email signature updated with website
- [ ] Business cards printed with URL

---

## 🎯 Marketing Strategy (Post-Launch)

### Week 1: Announce Launch

1. LinkedIn post about new website
2. Email to existing contacts
3. Update all social media bios
4. Add to email signature

### Week 2: Content

1. Write blog post about featured project
2. Share case studies on LinkedIn
3. Post on relevant subreddits (if allowed)

### Week 3: Outreach

1. Send personalized emails to potential clients
2. Comment on relevant LinkedIn posts
3. Join industry Facebook groups

### Ongoing

- Post weekly on LinkedIn
- Share project updates
- Engage with potential clients
- Request testimonials from satisfied clients

---

## 📞 Support & Resources

### Documentation

- Next.js: [nextjs.org/docs](https://nextjs.org/docs)
- Tailwind: [tailwindcss.com/docs](https://tailwindcss.com/docs)

### Common Issues

**Issue: Form not submitting**

- Check browser console for errors
- Verify EmailJS/FormSpree configuration
- Test with simple console.log first

**Issue: Images not loading**

- Ensure images are in `/public` folder
- Check file paths (case-sensitive)
- Use Image component from next/image

**Issue: Build failing**

- Run `npm run build` locally first
- Check for TypeScript errors
- Verify all imports

---

## 🎉 You're Ready!

Your website is **PROFESSIONAL** and **CLIENT-READY**.

### Next Actions (Priority Order):

1. ✅ Update contact info (15 min)
2. ✅ Connect contact form (30 min)
3. ✅ Deploy to Vercel (15 min)
4. ✅ Add custom domain (if you have one)
5. ✅ Test everything on mobile
6. 🚀 **GO LIVE!**

---

**Questions?** Review the code comments in each file for more details.

**Good luck with your projects! 🚀**
