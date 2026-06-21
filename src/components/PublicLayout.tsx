import '../app/globals.css';
import type { Metadata } from "next";
import Navbar from "@/components/LandingPageLts/components/Navbar";
import Footer from "@/components/LandingPageLts/components/Footer";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

type Props = { children: React.ReactNode };

export const metadata: Metadata = {
  title: {
    default: "Blog | Kita Developers",
    template: "%s | Kita Developers Blog",
  },
  description:
    "Read the latest articles, tutorials, and insights from Kita Developers about web development, design, and software ideas.",
  openGraph: {
    title: "Kita Developers Blog",
    description:
      "Discover articles and guides on modern web development, SaaS, and startup ideas from Kita Developers.",
    url: "https://www.kitadevelopers.com/blog",
    type: "website",
    images: [
      {
        url: "https://www.kitadevelopers.com/blog-og.jpg",
        width: 1200,
        height: 630,
        alt: "Kita Developers Blog Cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kita Developers Blog",
    description:
      "Stay updated with Kita Developers — web development, SaaS, and startup insights.",
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
    name: "Kita Developers Blog",
    url: "https://www.kitadevelopers.com/blog",
    description:
      "Kita Developers Blog covers the latest in software development, web design, and digital business ideas.",
    publisher: {
      "@type": "Organization",
      name: "Kita Developers",
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
