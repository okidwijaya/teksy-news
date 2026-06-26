import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import './globals.css';
import { Plus_Jakarta_Sans, Inter, Space_Grotesk } from 'next/font/google';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-jakarta',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space',
})

export const metadata: Metadata = {
  title: "kitadevelopers",
  description: "Kickstart Ideas, Transform Applications. Stay Updated and Catch it up with KITA Developers",
  keywords: [
    "Shopify Developer",
    "web developer",
    "POS free",
    "ERP free",
    "ecommerce developer",
    "shopify expert",
    "pos system",
    "erp solutions"
  ],
  icons: {
    icon: 'final-logo.svg'
  },
  openGraph: {
    title: 'KITA Developers — Shopify & Web Developer',
    description: 'Shopify Developer, Web Developer, POS and ERP solutions that are easy and affordable — KITA Developers',
    url: 'https://www.kitadevelopers.com',
    siteName: 'KITA Developers',
    images: [
      {
        url: 'https://www.kitadevelopers.com/final-logo.svg',
        width: 800,
        height: 600,
        alt: 'KITA Developers'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KITA Developers — Shopify & Web Developer',
    description: 'Find expert Shopify development, web development, free POS and ERP guidance at KITA Developers.'
  },
  verification: {
    google: 'rhYVoimb4tFcrPTTQQut7vJGFtQYPo1rNiqwzGgISRc',
    other: {
      'baidu': 'YOUR_BAIDU_VERIFICATION_ID',
      'yandex': 'YOUR_YANDEX_VERIFICATION_ID',
    }
  },
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
};
// google-site-verification=rhYVoimb4tFcrPTTQQut7vJGFtQYPo1rNiqwzGgISRc

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'KITA Developers',
    url: 'https://www.kitadevelopers.com',
    description: 'KITA Developers - Stay Updated and Catch it up',
    publisher: {
      '@type': 'Organization',
      name: 'KITA Developers',
      url: 'https://www.kitadevelopers.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.kitadevelopers.com/final-logo.svg'
      },
      sameAs: [
        'https://www.linkedin.com/company/kitadevelopers',
        'https://twitter.com/kitadevelopers'
      ]
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.kitadevelopers.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable} ${jakarta.variable} ${spaceGrotesk.variable} ${inter.variable} antialiased`} cz-shortcut-listen="true">
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4774376429155227"
          crossOrigin="anonymous"></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
