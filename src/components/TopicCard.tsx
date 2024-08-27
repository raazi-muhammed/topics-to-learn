import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function TopicCard({
    title,
    description,
    href,
    icon,
}: {
    icon: string;
    title: string;
    description: string;
    href: string;
}) {
    return (
        <Link href={href}>
            <Card>
                <CardContent className="py-4 flex items-center gap-4">
                    <Image src={icon} alt="logo" width={50} height={50} className="rounded-sm object-cover" />
                    <div>
                        <CardTitle className="m-0 mb-2 font-mono">{title}</CardTitle>
                        <CardDescription>{description}</CardDescription>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}
