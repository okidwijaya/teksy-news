import type { Metadata } from "next";
import PageHeader from "@/components/LandingPageLts/components/PageHeader";
import PortoContent from "@/components/LandingPageLts/components/PortoContent";
import Brands from "@/components/LandingPageLts/components/Brands";
import CTA from "@/components/LandingPageLts/components/CTA";
import JsonLd from "@/components/LandingPageLts/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import PublicLayout from "@/components/PublicLayout";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Studi kasus proyek Shopify, ERP custom, dan sistem backend yang pernah dikerjakan — dari produk internal hingga pengalaman profesional di fintech dan e-commerce.",
  alternates: {
    canonical: "/porto",
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Beranda", url: "https://www.kitadevelopers.com" },
  { name: "Portfolio", url: "https://www.kitadevelopers.com/porto" },
]);

export default function Page() {
  return (
    <PublicLayout>
      <JsonLd schema={breadcrumbs} />
      <PageHeader
        eyebrow="PORTFOLIO"
        title="Proyek yang menunjukkan cara kami berpikir, bukan hanya hasil akhirnya."
        description="Beberapa proyek dikerjakan sebagai produk internal KitaDevelopers, sebagian lain sebagai bagian dari pengalaman profesional sebelumnya — keduanya membentuk cara kami mendekati masalah."
      />
      <PortoContent />
      <Brands />
      <CTA />
    </PublicLayout>
  );
}