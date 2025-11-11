import Link from "next/link";
import React, { useEffect } from "react";

declare global {
    interface Window {
        adsbygoogle: (Record<string, unknown> | undefined)[];
    }
}

type AdCardProps = {
    gradient?: boolean;
};

export default function AdCardGoogle({ gradient }: AdCardProps) {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error("Adsense error:", e);
        }
    }, []);

    return (
        <div
            className={`w-full h-[175px] lg:h-[400px] max-w-full lg:max-w-[240px] ${gradient
                ? "bg-gradient-to-r via-[#FF9013] from-[#121212] to-[#ededed]"
                : "bg-[#121212]"
                } p-6 flex flex-col items-center justify-between text-white rounded-2xl`}
        >
            <div className="mb-4 md:mb-0">
                <ins
                    className="adsbygoogle"
                    style={{ display: "block" }}
                    data-ad-client="ca-pub-XXXXXXX"
                    data-ad-slot="YYYYYYY"
                    data-ad-format="auto"
                    data-full-width-responsive="true"
                ></ins>
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