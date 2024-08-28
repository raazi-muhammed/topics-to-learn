import Link from "next/link";
import React from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import Image from "next/image";

export default function NavBar() {
    return (
        <header className="sticky top-0 mb-8 border bg-muted py-4 backdrop-blur-xl">
            <section className="container flex justify-between align-middle">
                <Link href="/" className="mt-1 flex gap-1">
                    <div>
                        <Image
                            src="/logo.webp"
                            width={35}
                            height={35}
                            alt="logo"
                        />
                    </div>
                    <h1 className="m-0 my-auto text-2xl font-bold font-sans text-primary">
                        Topics to Learn
                    </h1>
                </Link>
                <ThemeSwitcher />
            </section>
        </header>
    );
}
