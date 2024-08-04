import Link from "next/link";
import React from "react";

export default function Footer() {
    return (
        <footer className="container flex flex-col rounded-t border bg-muted py-8 align-middle">
            <p className="text-center text-sm text-muted-foreground">
                You can also contribute
            </p>
            <Link
                href="https://github.com/raazi-muhammed/topics-to-learn"
                className="mx-auto text-center text-primary underline decoration-2">
                Github - Topics to Learn
            </Link>
        </footer>
    );
}
