import React from 'react'
import Image from 'next/image'
import LoadingLogo from "../../public/loading-logo.svg"

export default function LoadingLogoDefault() {
    return (
        <div className='w-full max-w-[600px] mx-auto'>
            <Image
                src={LoadingLogo}
                alt="Teksy"
                width={100}
                height={100}
                priority
            />
        </div>
    )
}
