import TopicCard from "@/components/TopicCard";

export default function Home() {
    const topics = [
        { href: "/react", title: "React", description: "Docs for React" },
        { href: "/graphql", title: "GraphQl", description: "Docs for GraphQL" },
    ];

    return (
        <main className="grid-auto container grid grid-cols-3 gap-8">
            {topics.map((topic) => (
                <TopicCard {...topic} />
            ))}
        </main>
    );
}
