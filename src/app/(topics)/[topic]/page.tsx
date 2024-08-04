import HTMLContent from "@/components/HTMLContent";

async function getMarkDown(topic: string) {
    const response = await fetch(
        `http://localhost:3000/content/${topic}-doc.md`
    );
    return response.text();
}

export default async function TopicPage({
    params,
}: {
    params: { topic: string };
}) {
    const data = await getMarkDown(params.topic);
    return <HTMLContent content={data} />;
}
