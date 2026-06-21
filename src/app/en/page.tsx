import type { Metadata } from "next";
import { professionalServiceSchema, breadcrumbSchema } from "@/lib/schema";
import Navbar from "@/components/LandingPageLts/components/Navbar";
import Hero from "@/components/LandingPageLts/components/Hero";
import Brands from "@/components/LandingPageLts/components/Brands";
import Services from "@/components/LandingPageLts/components/Services";
import ERPSection from "@/components/LandingPageLts/components/ERPSection";
import Pricing from "@/components/LandingPageLts/components/Pricing";
import WhyUs from "@/components/LandingPageLts/components/WhyUs";
import CTA from "@/components/LandingPageLts/components/CTA";
import Footer from "@/components/LandingPageLts/components/Footer";
import JsonLd from "@/components/LandingPageLts/components/JsonLd";
import HeroEN from "@/components/LandingPageLts/components/HeroEN";
import CapabilityStrip from "@/components/LandingPageLts/components/CapabilityStrip";
import WhyUsEN from "@/components/LandingPageLts/components/WhyUsEN";
import CTAEN from "@/components/LandingPageLts/components/CTAEN";

export const metadata: Metadata = {
  title: "Freelance Shopify Developer & Custom ERP Builder",
  description:
    "We build commerce and operations systems for businesses that have outgrown off-the-shelf software. Shopify storefronts, custom ERP systems, and web applications.",
  keywords: [
    "freelance shopify developer",
    "shopify developer for hire",
    "custom ERP development",
    "freelance web developer indonesia",
    "shopify expert",
    "ERP software developer",
  ],
  alternates: {
    canonical: "/en",
    languages: {
      id: "/",
      en: "/en",
    },
  },
  openGraph: {
    title: "KitaDevelopers — Freelance Shopify Developer & Custom ERP Builder",
    description:
      "We build commerce and operations systems for businesses that have outgrown off-the-shelf software.",
    url: "https://www.kitadevelopers.com/en",
    siteName: "KitaDevelopers",
    locale: "en_US",
    type: "website",
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "https://www.kitadevelopers.com/en" },
]);

export default function EnglishHome() {
  return (
    <main>
      <JsonLd schema={professionalServiceSchema} />
      <JsonLd schema={breadcrumbs} />
      <Navbar />
      <HeroEN />
      <CapabilityStrip />
      <Brands />
      <Services />
      <Pricing />
      <WhyUsEN />
      <CTAEN />
      <Footer />
    </main>
  );
}
