import Link from "next/link";
import React from "react";

export default function Footer() {
    return (
        <footer className="bg-[#E5E7EB] text-[#374151] py-12 px-8 md:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                
                <div className="space-y-6">
                    <div className="text-4xl font-bold">TECHY</div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-sm text-gray-400">
                        <div>
                            <h4 className="font-semibold text-[#374151] mb-2">Pages</h4>
                            <ul className="space-y-1">
                                <li><Link href="#" className="hover:text-[#1C1C1C]">Explore</Link></li>
                                <li><Link href="#" className="hover:text-[#1C1C1C]">News</Link></li>
                                <li><Link href="#" className="hover:text-[#1C1C1C]">Culture</Link></li>
                                <li><Link href="#" className="hover:text-[#1C1C1C]">Sustainability</Link></li>
                                <li><Link href="#" className="hover:text-[#1C1C1C]">Connexions</Link></li>
                                <li><Link href="#" className="hover:text-[#1C1C1C]">Inspire</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-[#374151] mb-2">Socials</h4>
                            <ul className="space-y-1">
                                <li><Link href="#" className="hover:text-[#1C1C1C]">Twitter</Link></li>
                                <li><Link href="#" className="hover:text-[#1C1C1C]">Instagram</Link></li>
                                <li><Link href="#" className="hover:text-[#1C1C1C]">LinkedIn</Link></li>
                                <li><Link href="#" className="hover:text-[#1C1C1C]">Facebook</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-[#374151] mb-2">Contact</h4>
                            <ul className="space-y-1">
                                <li><Link href="#" className="hover:text-[#1C1C1C]">Reach us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-[#374151]">
                        Stay Ahead in Tech. Get the News That Matters.
                    </h2>
                    <p className="text-gray-400">
                        Join thousands of readers who get the latest updates, in-depth reviews, and breakthrough trends in tech — delivered straight to your inbox.
                    </p>
                    <div className="space-y-2">
                        <h4 className="font-medium leading-tight">Subscribe to our newsletter</h4>
                        <div className="flex flex-col flex-wrap lg:flex-nowrap lg:flex-row gap-4 w-full">
                            <form className="flex items-center h-[48px] rounded-2xl bg-[#f4f4fb] overflow-hidden max-w-sm w-full">
                                <input type="email" placeholder="Your email" className="w-full bg-transparent px-4 py-3 text-[#121212] placeholder-gray-400 focus:outline-none" />
                                <button type="submit" className="px-4 text-[#121212]">
                                    <span className="text-xl">→</span>
                                </button>
                            </form>
                            <div className="sm:space-y-0 flex gap-4 items-center justify-center w-full max-w-[195px]">
                                <span className="font-light leading-tight"> Or </span>
                                <button className="bg-[#FF6000] text-[#121212] hover:bg-[#FFA559] hover:!no-underline hover:text-[#454545] h-[48px] uppercase font-semibold px-6 py-3 rounded-xl w-full">Contact Us</button>
                                <button className="hidden border border-white hover:border-gray-400 text-white font-semibold px-6 py-3 rounded-2xl w-full sm:w-auto">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl text-[#374151] mx-auto mt-16 flex flex-col md:flex-row justify-between items-center text-xs px-2">
                <p>©2025 Fueside Creative Studio</p>
                <p>
                    R&amp;D: <span><Link href="https://labs.lusion.co" className="underline hover:text-gray-700">cloudsand.my.id</Link></span>
                </p>
                <p>Built by Me with <span className="text-pink-500">💗</span></p>
            </div>
        </footer>
    );
}