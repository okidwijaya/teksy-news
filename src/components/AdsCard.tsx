import Link from "next/link";
import React from "react";

type AdCardProps = {
    gradient?: boolean;
};

export default function AdCard({ gradient }: AdCardProps) {
    return (
        <div
            className={`w-full h-[175px] lg:h-[400px] max-w-full lg:max-w-[240px] ${gradient
                    ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                    : "bg-[#121212]"
                } p-6 flex flex-col items-center justify-between text-white rounded-2xl`}
        >
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