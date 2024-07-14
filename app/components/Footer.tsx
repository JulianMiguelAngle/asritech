import { getLocalTime } from "./../lib/utils";

import Image from "next/image";

import Logo from "@assets/Logo.svg";

import Instagram from "@assets/Instagram icon.svg";
import Whatsapp from "@assets/Whatsapp icon.svg";
import Gmail from "@assets/Gmail icon.svg";
import Link from "next/link";

export function Footer() {
    const localTime = getLocalTime();

    return (
        <footer className={`
            py-6 px-[60px] bg-neutral-0 border-t border-solid border-neutral-white-200
            flex flex-col sm:flex-row gap-12 items-center sm:justify-between
        `}>
            <section className="text-neutral-600 text-body-small sm:text-body-medium tracking-body">
                <p>{ localTime }</p>
                <p>Western Indonesian Time</p>
            </section>

            <section className="flex gap-2.5 justify-center">
                <Link href={"https://www.instagram.com/asritech.id/"}>
                    <Image 
                        src={Instagram}
                        alt="Instagram icon"
                    />
                </Link>

                <Link href={"https://api.whatsapp.com/send?phone=6285956235320&text=Hi%20Asri%20Tech%20Team,%20I%20am%20interested%20in%20website%20creation%20services.%20Can%20we%20discuss%20further?"}>
                    <Image 
                        src={Whatsapp}
                        alt="Whatsapp icon"
                    />
                </Link>

                <Link href={"mailto:asriitech@gmail.com"}>
                    <Image 
                        src={Gmail}
                        alt="Gmail icon"
                    />
                </Link>

            </section>

            <Image 
                src={Logo}
                alt="Asri Tech Logo"
                className="w-[140px]"
            />            
        </footer>
    );
}