import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card";

export default function TopicCard({
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
            <Card variant="mutedGradient">
                <CardContent className="py-4">
                    <CardTitle className="m-0 mb-2">{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardContent>
            </Card>
        </Link>
    );
}
