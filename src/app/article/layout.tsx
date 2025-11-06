import PublicLayout from "@/components/PublicLayout";
import type { Metadata } from "next";

import { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Kickstart Ideas, Transform Applications",
  description: "Article",
  icons: {
    icon: 'logo.svg'
  }
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <PublicLayout>
        <main>{children}</main>
      </PublicLayout>
    </>
  )
}