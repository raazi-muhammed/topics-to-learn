import TopicCard from "@/components/TopicCard";
import { topics } from "@/constants/topicsList";

export default function Home() {
    return (
        <main className="grid-auto container grid grid-cols-3 gap-8 pb-16">
            {topics.map((topic) => (
                <TopicCard key={topic.href} {...topic} />
            ))}
        </main>
    );
}
