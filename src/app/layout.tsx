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
  icons: {
    icon: 'final-logo.svg'
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
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.kitadevelopers.com/final-logo.svg'
      }
    }
  };
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        {/* for new landing page v3 */}
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
          />
      </head>
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

{/* for new landing page v3 */}
// export const metadata: Metadata = {
//   title: "KitaDevelopers — Sistem Digital untuk Bisnis yang Tumbuh Serius",
//   description:
//     "Shopify commerce, ERP custom build untuk UMKM, dan web app — semua dari satu tangan. Bukan sekadar jasa website.",
//   keywords: ["Shopify developer Indonesia", "ERP custom UMKM", "jasa web app", "KitaDevelopers"],
//   openGraph: {
//     title: "KitaDevelopers — Sistem Digital untuk Bisnis yang Tumbuh Serius",
//     description:
//       "Shopify commerce, ERP custom build untuk UMKM, dan web app dari satu tangan.",
//     url: "https://www.kitadevelopers.com",
//     siteName: "KitaDevelopers",
//     locale: "id_ID",
//     type: "website",
//   },
// };
