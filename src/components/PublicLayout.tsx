import '../app/globals.css';
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Props = { children: React.ReactNode };

export const metadata: Metadata = {
  title: {
    default: "Blog | Teksy",
    template: "%s | Teksy Blog",
  },
  description:
    "Read the latest articles, tutorials, and insights from Teksy about web development, design, and software ideas.",
  openGraph: {
    title: "Teksy Blog",
    description:
      "Discover articles and guides on modern web development, SaaS, and startup ideas from Teksy.",
    url: "https://www.kitadevelopers.com/blog",
    type: "website",
    images: [
      {
        url: "https://www.kitadevelopers.com/blog-og.jpg",
        width: 1200,
        height: 630,
        alt: "Teksy Blog Cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teksy Blog",
    description:
      "Stay updated with Teksy — web development, SaaS, and startup insights.",
    images: ["https://www.kitadevelopers.com/blog-og.jpg"],
  },
  alternates: {
    canonical: "https://www.kitadevelopers.com/blog",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function PublicLayout({ children }: Props) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Teksy Blog",
    url: "https://www.kitadevelopers.com/blog",
    description:
      "Teksy Blog covers the latest in software development, web design, and digital business ideas.",
    publisher: {
      "@type": "Organization",
      name: "Teksy",
      logo: {
        "@type": "ImageObject",
        url: "https://www.kitadevelopers.com/final-logo.svg",
      },
    },
  };
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
