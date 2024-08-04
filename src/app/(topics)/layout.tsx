import Link from "next/link";
import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <main className="container">
            <header>
                <Link href="/">Back</Link>
            </header>
            <article>{children}</article>
        </main>
    );
}
