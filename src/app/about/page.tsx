import type { Metadata } from "next";
import PageHeader from "@/components/LandingPageLts/components/PageHeader";
import AboutContent from "@/components/LandingPageLts/components/AboutContent";
import CTA from "@/components/LandingPageLts/components/CTA";
import JsonLd from "@/components/LandingPageLts/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import PublicLayout from "@/components/PublicLayout";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "KitaDevelopers menggabungkan pengalaman fintech perbankan dan e-commerce Shopify menjadi satu studio yang fokus pada sistem commerce dan operasional custom.",
  alternates: {
    canonical: "/tentang",
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Beranda", url: "https://www.kitadevelopers.com" },
  { name: "Tentang Kami", url: "https://www.kitadevelopers.com/tentang" },
]);

export default function TentangPage() {
  return (
    <PublicLayout>
      <JsonLd schema={breadcrumbs} />
      <PageHeader
        eyebrow="TENTANG KAMI"
        title="Studio kecil yang dibangun dari dua dunia yang jarang bertemu."
        description="Fintech perbankan mengajarkan kehati-hatian. E-commerce mengajarkan kecepatan. KitaDevelopers ada di persimpangan keduanya."
      />
      <AboutContent />
      <CTA />
    </PublicLayout>
  );
}``