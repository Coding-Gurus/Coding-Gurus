import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://codinggurus.in'),
  title: {
    default: "Coding Gurus | Professional Tech Solutions",
    template: "%s | Coding Gurus"
  },
  description:
    "Hackathon-winning developers delivering real-world web, AI & blockchain solutions. From idea to impact. Expert in web development, AI/ML, blockchain, and GovTech solutions.",
  keywords: [
    "web development",
    "AI development",
    "blockchain development",
    "hackathon winners",
    "SIH 2024 winners",
    "SIH 2025 winners",
    "Mumbai Hacks winners",
    "React development",
    "Next.js development",
    "Django development",
    "Python development",
    "smart contracts",
    "GovTech solutions",
    "startup development",
    "MVP development",
    "custom software development",
    "India software company",
    "tech consulting",
    "AI ML solutions",
    "machine learning",
    "deep learning"
  ],
  authors: [{ name: "Coding Gurus", url: "https://codinggurus.in" }],
  creator: "Coding Gurus",
  publisher: "Coding Gurus",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/CG-Logo.png", sizes: "any" },
      { url: "/CG-Logo.png", sizes: "32x32", type: "image/png" },
      { url: "/CG-Logo.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/CG-Logo.png",
    apple: [
      { url: "/CG-Logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://codinggurus.in",
    siteName: "Coding Gurus",
    title: "Coding Gurus | Professional Tech Solutions",
    description: "Hackathon-winning developers delivering real-world web, AI & blockchain solutions. From idea to impact.",
    images: [
      {
        url: "/CG-Logo.png",
        width: 1200,
        height: 630,
        alt: "Coding Gurus Logo"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coding Gurus | Professional Tech Solutions",
    description: "Hackathon-winning developers delivering real-world web, AI & blockchain solutions.",
    images: ["/CG-Logo.png"],
    creator: "@codinggurus",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://codinggurus.in",
  },
  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Coding Gurus",
              "url": "https://codinggurus.in",
              "logo": "https://codinggurus.in/CG-Logo.png",
              "description": "Hackathon-winning developers delivering real-world web, AI & blockchain solutions.",
              "sameAs": [
                "https://linkedin.com/company/codinggurus",
                "https://twitter.com/codinggurus",
                "https://github.com/codinggurus"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "contact@codinggurus.in",
                "contactType": "Customer Service"
              },
              "areaServed": "IN",
              "founder": {
                "@type": "Person",
                "name": "Coding Gurus Team"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
