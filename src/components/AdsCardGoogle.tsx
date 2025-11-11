import React, { useEffect, useRef } from "react";
declare global {
    interface Window {
        adsbygoogle: (Record<string, unknown> | undefined)[];
    }
}

type AdCardProps = {
    gradient?: boolean;
};

export default function AdCardGoogle({ gradient }: AdCardProps) {
    const adRef = useRef<HTMLElement | null>(null);
    const initializedRef = useRef(false);

    useEffect(() => {
        if (!adRef.current || initializedRef.current) return;
        if (adRef.current.offsetWidth > 0) {
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
                initializedRef.current = true;
            } catch (e) {
                console.error("Adsense error:", e);
            }
        } else {
            // Try again after a short delay if not visible yet
            const timer = setTimeout(() => {
                if (adRef.current && adRef.current.offsetWidth > 0 && !initializedRef.current) {
                    try {
                        (window.adsbygoogle = window.adsbygoogle || []).push({});
                        initializedRef.current = true;
                    } catch (e) {
                        console.error("Adsense error:", e);
                    }
                }
            }, 500);
            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <div
            className={`w-full min-w-[200px] h-auto max-w-full lg:max-w-[240px] ${gradient
                ? "bg-gradient-to-r via-[#FF9013] from-[#121212] to-[#ededed]"
                : "bg-[#12121224]"
                } p-6 flex flex-col items-center justify-between text-white rounded-2xl`}
            style={{ minWidth: 200 }}
        >
            <div className="mb-4 md:mb-0 w-full">
                <ins className="adsbygoogle"
                    style={{ display: "block" }}
                    data-ad-client="ca-pub-4774376429155227"
                    data-ad-slot="9141606422"
                    data-ad-format="auto"
                    data-full-width-responsive="true"></ins>
            </div>
        </div>
    );
}