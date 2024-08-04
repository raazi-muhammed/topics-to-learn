import Link from "next/link";
import React from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function NavBar() {
    return (
        <header className="sticky top-0 mb-8 bg-accent/20 py-4 backdrop-blur-xl">
            <section className="container flex justify-between align-middle">
                <Link href="/" className="mt-1">
                    <h1 className="m-0 font-display text-2xl font-bold text-primary">
                        Topics to Learn
                    </h1>
                </Link>
                <ThemeSwitcher />
            </section>
        </header>
    );
}
