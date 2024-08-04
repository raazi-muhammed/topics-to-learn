import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card";

function TopicCard({
    title,
    description,
    href,
}: {
    title: string;
    description: string;
    href: string;
}) {
    return (
        <Link href={href}>
            <Card>
                <CardContent className="py-4">
                    <CardTitle className="m-0 mb-2">{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardContent>
            </Card>
        </Link>
    );
}

export default function Home() {
    return (
        <main className="grid-auto container grid grid-cols-3 gap-8">
            <TopicCard
                href="/react"
                title="React"
                description="Docs for React"
            />
            <TopicCard
                href="/graphql"
                title="GraphQl"
                description="Docs for GraphQL"
            />
        </main>
    );
}
