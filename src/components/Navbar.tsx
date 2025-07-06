"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import logo from "../../public/logo.svg"
import { Category } from "@/lib/getCategories";

export default function Navbar() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [navbarFixed, setNavbarFixed] = useState(false);
    const [navbarHidden, setNavbarHidden] = useState(false);
    const lastScrollY = useRef(0);
    const [openParents, setOpenParents] = useState<Record<string, boolean>>({});

    const toggleParent = (parentId: number) => {
        setOpenParents((prev) => ({
            ...prev,
            [parentId]: !prev[parentId],
        }));
    };


    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch("/api/categories");
                const result = await res.json();
                setCategories(result.data);
                console.log(result)
            } catch (err) {
                console.error("Failed to load categories", err);
            }
        };

        fetchCategories();
    }, []);


    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setNavbarFixed(currentScrollY > 50);
            setNavbarHidden(currentScrollY > lastScrollY.current && currentScrollY > 50);
            lastScrollY.current = currentScrollY;
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // useEffect(() => {
    //     if (!mobileMenuOpen) setMobileCategoriesOpen(false);
    // }, [mobileMenuOpen]);



    return (
        <nav
            id="navbar"
            className={`bg-[#121212] text-[#E5E7EB] border-b border-b-[#EEEEEE] transition-all duration-300 z-50 ${navbarFixed ? "fixed top-0 left-0 right-0" : "relative"
                }`}
            style={{
                transform: navbarHidden ? "translateY(-100%)" : "translateY(0)",
            }}
        >
            <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex gap-4 flex-row flex-wrap">
                        <Link
                            href="/"
                            className="text-2xl w-fit font-bold text-[#E5E7EB] hover:text-[#F96E2A] transition-colors duration-200"
                        >
                            <Image
                                src={logo}
                                alt="Teksy"
                                width={24}
                                height={24}
                                priority
                            />
                        </Link>
                    </div>

                    {/* Search & CTA */}
                    <div className="hidden md:flex items-center space-x-4">
                        <div className="relative group hover:border border-[#DDDDDD] rounded-2xl">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-4 w-4 text-gray-400 group-hover:stroke-[#F96E2A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input type="text" placeholder="Search..." className="pl-10 pr-4 py-2 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#F96E2A] focus:border-transparent outline-none transition-all duration-200 w-64" />
                        </div>
                        <Link href="#" className="bg-[#FF6000] text-[#121212] px-4 py-2 rounded-2xl hover:bg-[#FFA559] hover:!no-underline hover:text-[#454545] hover:border border-none uppercase font-semibold transition-colors duration-200">Subscribe</Link>
                    </div>
                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button
                            id="mobileMenuBtn"
                            className="text-[#E5E7EB] hover:text-[#F96E2A] transition-colors duration-200"
                            onClick={() => setMobileMenuOpen((v) => !v)}
                            aria-label="Open mobile menu"
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-8 pt-4 pb-6">
                    {/* <Link href="#" className="text-[#E5E7EB] hover:text-[#F96E2A] font-medium transition-colors duration-200">Home</Link>
                            <div className="relative group">
                                <button className="text-[#E5E7EB] hover:text-[#F96E2A] font-medium transition-colors duration-200 flex items-center">
                                    Categories
                                    <svg className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="#F96E2A" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div className="absolute left-0 mt-2 w-48 bg-[#121212] rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-[#F96E2A]">
                                    <div className="py-2">
                                        {categories.map((cat) => (
                                            <Link key={cat} href="#" className="block px-4 py-2 text-sm text-[#E5E7EB] hover:text-[#F96E2A] transition-colors duration-200">{cat}</Link>
                                        ))} 
                                    </div>
                                </div>
                            </div> */}

                    {categories.map((parent) => (
                        <div key={parent.id} className="group relative mx-auto w-full text-center">
                            {/* <Link
                                        href={`/category/${parent.slug}`}
                                        className="block px-4 py-2 text-sm text-[#E5E7EB] hover:text-[#F96E2A] transition-colors duration-200"
                                    >
                                        {parent.name}
                                    </Link> */}

                            {/* <Link href="#" className="text-[#E5E7EB] hover:text-[#F96E2A] font-medium transition-colors duration-200 relative">
                                Trending
                                <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>
                            </Link> */}
                            {Array.isArray(parent.children) && parent.children.length > 0 ?
                                <>
                                    <button className="!text-[13px] text-center text-[#E5E7EB] hover:text-[#F96E2A] font-medium transition-colors duration-200 flex items-center">
                                        {parent.name}
                                        <svg className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="#F96E2A" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    <div className="absolute left-0 mt-2 w-48 bg-[#121212] rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-[#F96E2A]">
                                        <div className="py-2">
                                            {parent.children.map((child) => (
                                                <Link
                                                    key={child.id}
                                                    href={`/category/${child.slug}`}
                                                    className="!text-[13px] text-center block px-4 py-2 text-sm text-[#E5E7EB] hover:text-[#F96E2A] transition-colors duration-200"
                                                >
                                                    {child.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </>
                                : <Link href={`/category/${parent.slug}`} className="!text-[13px] text-center text-[#E5E7EB] hover:text-[#F96E2A] font-medium transition-colors duration-200">{parent.name}</Link>}
                        </div>
                    ))}
                </div>
            </div>
            {/* Mobile Menu */}
            <div id="mobileMenu" className={`lg:hidden ${mobileMenuOpen ? "" : "hidden"} bg-[#121212] border-t border-gray-100`}>
                <div className="px-4 pt-2 pb-3 space-y-1">
                    {/* Mobile Search */}
                    <div className="relative mb-3 group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-4 w-4 text-gray-400 group-hover:stroke-[#F96E2A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input type="text" placeholder="Search" className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F96E2A] focus:border-transparent outline-none transition-all duration-200 w-full" />
                    </div>

                    {categories.map((parent) => (
                        <div key={parent.id} className="group relative mx-auto w-full">
                            {Array.isArray(parent.children) && parent.children.length > 0 ? (
                                <>
                                    <button
                                        className="!text-[13px] flex items-center justify-between w-full px-3 py-2 text-[#E5E7EB] hover:text-[#F96E2A] hover:bg-gray-50 rounded-md transition-colors duration-200"
                                        onClick={() => toggleParent(parent.id)}
                                        aria-label="Toggle category"
                                    >
                                        {parent.name}
                                        <svg
                                            className={`ml-1 h-4 w-4 transition-transform duration-200 ${openParents[parent.id] ? "rotate-180" : ""}`}
                                            fill="none"
                                            stroke="#F96E2A"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    <div className={`${openParents[parent.id] ? "" : "hidden"} pl-6 space-y-1`}>
                                        {parent.children.map((child) => (
                                            <Link
                                                key={child.id}
                                                href={`/category/${child.slug}`}
                                                className="!text-[13px] text-left block px-4 py-2 text-sm text-[#E5E7EB] hover:text-[#F96E2A] transition-colors duration-200"
                                            >
                                                {child.name}
                                            </Link>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <Link
                                    href={`/category/${parent.slug}`}
                                    className="!text-[13px] px-3 py-2 text-[#E5E7EB] hover:text-[#F96E2A] font-medium transition-colors duration-200"
                                >
                                    {parent.name}
                                </Link>
                            )}
                        </div>
                    ))}
                    {/* Mobile CTA */}
                    <div className="pt-3 border-t border-gray-100 mt-3">
                        <Link href="#" className="block w-full bg-[#F96E2A] text-white text-center px-4 py-2 rounded-lg font-medium hover:bg-[#F96E2A] transition-colors duration-200">
                            Subscribe to Newsletter
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}