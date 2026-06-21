import type { Metadata } from "next";
import PageHeader from "@/components/LandingPageLts/components/PageHeader";
import ContactContent from "@/components/LandingPageLts/components/ContactContent";
import JsonLd from "@/components/LandingPageLts/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import PublicLayout from "@/components/PublicLayout";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi KitaDevelopers untuk konsultasi proyek Shopify, ERP custom, atau web application. Respon dalam 1–2 hari kerja.",
  alternates: {
    canonical: "/kontak",
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Beranda", url: "https://www.kitadevelopers.com" },
  { name: "Kontak", url: "https://www.kitadevelopers.com/kontak" },
]);

export default function KontakPage() {
  return (
    <PublicLayout>
      <JsonLd schema={breadcrumbs} />
      <PageHeader
        eyebrow="KONTAK"
        title="Ceritakan apa yang sedang Anda bangun."
        description="Tidak ada formulir panjang yang harus diisi. Kirim email atau pesan WhatsApp, dan kita mulai dari sana."
      />
      <ContactContent />
    </PublicLayout>
  );
}