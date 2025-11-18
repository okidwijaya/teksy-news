export default function Layout({ children } : { children: React.ReactNode }) {
    return (
        <>
            <main className="h-screen overflow-hidden">{children}</main>
        </>
    )
}