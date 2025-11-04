import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import './globals.css'
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

export const metadata: Metadata = {
  title: "Kickstart Ideas, Transform Applications",
  description: "Stay Updated and Catch it up",
  icons: {
    icon: 'final-logo.svg'
  },
  verification: {
    google: 'YOUR_GOOGLE_SITE_VERIFICATION_ID', // Replace this with your actual verification ID from Google Search Console
    other: {
      'baidu': 'YOUR_BAIDU_VERIFICATION_ID', // Optional: for Baidu search
      'yandex': 'YOUR_YANDEX_VERIFICATION_ID', // Optional: for Yandex search
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
    description: 'Stay Updated and Catch it up',
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
    <html lang="en" suppressHydrationWarning>
        return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
