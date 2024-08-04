import Link from "next/link";
import React from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import Image from "next/image";

export default function NavBar() {
    return (
        <header className="sticky top-0 mb-8 bg-accent/20 py-4 backdrop-blur-xl">
            <section className="container flex justify-between align-middle">
                <Link href="/" className="mt-1 flex gap-1">
                    <Image
                        src="/icon.png"
                        width={12}
                        height={12}
                        alt="logo"
                        className="size-10"
                    />
                    <h1 className="m-0 my-auto font-display text-2xl font-bold text-primary">
                        Topics to Learn
                    </h1>
                </Link>
                <ThemeSwitcher />
            </section>
        </header>
    );
}
