import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <main className="container mb-16">
            <article>{children}</article>
        </main>
    );
}
