import type { Metadata } from "next";

import { ReactNode } from "react"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

export const metadata: Metadata = {
  title: "Teksy News",
  description: "Article",
  icons:{
    icon: 'logo.svg'
  }
};

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}