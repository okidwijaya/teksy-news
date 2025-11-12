import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import './globals.css';
// import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kickstart Ideas, Transform Applications",
  description: "KITADevelopers. Stay Updated and Catch it up with KITA Developers",
  icons: {
    icon: 'final-logo.svg'
  },
  verification: {
    google: 'YOUR_GOOGLE_SITE_VERIFICATION_ID',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Teksy',
    url: 'https://www.kitadevelopers.com',
    description: 'KITA Developers - Stay Updated and Catch it up',
    publisher: {
      '@type': 'Organization',
      name: 'Teksy',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.kitadevelopers.com/final-logo.svg'
      }
    }
  };
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} cz-shortcut-listen="true">
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4774376429155227"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
