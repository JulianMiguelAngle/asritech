'use client'

import { useState } from "react";

import Image from "next/image";

import Logo from "@assets/Logo.svg";
import Menu from "@assets/Menu icon.svg";
import Close from "@assets/Close icon.svg";

export function Navbar() {
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    return (
        <nav className="px-4 py-[10px] h-[80px] w-full bg-neutral-0 flex items-center justify-between rounded-2xl border-[1px] border-solid border-neutral-white-100 sticky top-[48px] z-30">
            <Image
                src={Logo}
                alt="Asri Tech Logo"
            />

            {!isMenuOpened ? (
                <Image
                    src={Menu}
                    alt="Menu icon"
                    onClick={() => setIsMenuOpened(true)}
                />
            ) : (
                <Image
                    src={Close}
                    alt="Close icon"
                    onClick={() => setIsMenuOpened(false)}
                />
            )}

            {isMenuOpened && (
                <aside className="absolute left-0 right-0 top-[80px] py-4 px-6 flex flex-col gap-6 backdrop-blur-[4px] text-neutral-500 bg-[rgba(255,255,255,0.8)]">
                    <a href="" className="label-small sm:label-medium hover:text-neutral-700">Home</a>
                    <a href="" className="label-small sm:label-medium hover:text-neutral-700">We make</a>
                    <a href="" className="label-small sm:label-medium hover:text-neutral-700">What have we done?</a>
                </aside>
            )}
        </nav>
    );
}