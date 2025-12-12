"use client";
import { X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

type AdCardProps = {
    gradient?: boolean;
};

export default function AdCard({ gradient }: AdCardProps) {
    const [hideBanner, setHideBanner] = useState(false);
    return (
        // ? "bg-gradient-to-r via-[#FF9013] from-[#121212] to-[#ededed]"
        <div
            className={`${hideBanner ? 'hidden' : 'flex'}] relative w-full h-[175px] lg:h-[400px] max-w-full lg:max-w-[240px] ${gradient
                ? "bg-[#673AB7] border border-[#E4E4E4]"
                : "bg-[#121212] border border-[#FF5722]"
                } p-6 flex flex-col items-center justify-between text-white rounded-2xl`}
        >
            <button className='absolute top-1 right-2' onClick={() => setHideBanner(true)}>
                <X className="h-4 w-4 text-white" />
            </button>
            <div className="mb-4 md:mb-0">
                <h2 className="text-xl md:text-2xl font-bold">Space for Advertising</h2>
                <p className="text-sm md:text-base mt-1 opacity-90">
                    Your ad could be here. Reach thousands of potential users!
                </p>
            </div>
            <Link
                href="#"
                className={`font-semibold px-5 py-2 rounded-xl transition duration-300 ${gradient
                    ? "bg-white text-indigo-600 hover:bg-indigo-100"
                    : "text-white hover:text-[#121212] border border-white hover:bg-white bg-[#121212]"
                    }`}
            >
                Advertise Now
            </Link>
        </div>
    );
}