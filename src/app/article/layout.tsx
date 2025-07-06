import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

import { ReactNode } from "react"

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}