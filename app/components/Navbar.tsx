'use client'

import { useState } from "react";

import Image from "next/image";

import Logo from "@assets/Logo.svg";
import Menu from "@assets/Menu icon.svg";
import Close from "@assets/Close icon.svg";
import Link from "next/link";

export function Navbar() {
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    return (
        <nav className="px-4 sm:px-12 py-[10px] h-[80px] w-full bg-neutral-0 flex items-center justify-between rounded-2xl border-[1px] border-solid border-neutral-white-200 sticky top-[48px] z-30">
            <Image
                src={Logo}
                alt="Asri Tech Logo"
            />

            {!isMenuOpened ? (
                <Image
                    src={Menu}
                    alt="Menu icon"
                    onClick={() => setIsMenuOpened(true)}
                    className="lg:hidden"
                />
            ) : (
                <Image
                    src={Close}
                    alt="Close icon"
                    onClick={() => setIsMenuOpened(false)}
                    className="lg:hidden"
                />
            )}

            {isMenuOpened && (
                <aside className="flex lg:hidden absolute left-0 right-0 top-[80px] py-4 px-6 flex-col gap-6 backdrop-blur-[4px] text-neutral-500 bg-[rgba(255,255,255,0.8)]">
                    <Link href="#home" className="text-label-small sm:text-label-medium hover:text-neutral-700">Home</Link>
                    <Link href="#what-we-make" className="text-label-small sm:text-label-medium hover:text-neutral-700">What we make</Link>
                    <Link href="#what-have-we-done" className="text-label-small sm:text-label-medium hover:text-neutral-700">What have we done?</Link>
                
                    <section className="flex flex-col gap-y-4">
                        <Link href={"mailto:asriitech@gmail.com"}
                        className={`
                            w-fit py-4 px-5 bg-primary-white-0 text-neutral-600 rounded-3xl
                            border border-solid border-primary-white-200 text-body-small sm:text-body-medium
                            hover:rotate-[-6deg] hover:text-neutral-700 transition-transform duration-200
                        `}>
                            Aye yo, have time?
                        </Link>
                        
                        <Link href={"https://www.fiverr.com/asri_tech"}
                        className={`
                            w-fit py-4 px-5 bg-primary-400 text-neutral-0 rounded-3xl
                            border border-solid border-primary-white-200 text-body-small sm:text-body-medium
                            hover:rotate-[-6deg] hover:text-neutral-700 transition-transform duration-200
                        `}>
                            Check on Fiverr
                        </Link>
                    </section>
                </aside>
            )}

            <section className={`
                hidden lg:flex items-center gap-x-6
                sm:*:text-label-medium text-neutral-600
            `}>
                <Link href="#home" className="hover:text-primary-400">Home</Link>
                <p>✢</p>
                <Link href="#what-we-make" className="hover:text-primary-400">What we make</Link>
                <p>✢</p>
                <Link href="#what-have-we-done" className="hover:text-primary-400">What have we done?</Link>
                
                <section className="flex gap-x-4">
                    <Link href={"mailto:asriitech@gmail.com"}
                    className={`
                            w-fit py-4 px-5 bg-primary-white-0 text-neutral-600 rounded-3xl
                            border border-solid border-primary-white-200 text-body-small sm:text-body-medium
                            hover:rotate-[-6deg] hover:text-neutral-700 transition-transform duration-200
                    `}>
                        Aye yo, have time?
                    </Link>

                    <Link href={"https://www.fiverr.com/asri_tech"}
                    className={`
                            w-fit py-4 px-5 bg-primary-400 text-neutral-0 rounded-3xl
                            border border-solid border-primary-white-200 text-body-small sm:text-body-medium
                            hover:rotate-[-6deg] transition-transform duration-200
                    `}>
                        Check on Fiverr
                    </Link>
                </section>
            </section>
        </nav>
    );
}