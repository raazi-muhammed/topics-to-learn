import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
    return (
        <main className="container">
            <Button variant="ghost">
                <Link href="/react">React</Link>
            </Button>
            <Button variant="ghost">
                <Link href="/graphql">GraphQl</Link>
            </Button>
        </main>
    );
}
