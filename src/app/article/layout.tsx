import type { Metadata } from "next";

import { ReactNode } from "react"

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
            <main>{children}</main>
        </>
    )
}