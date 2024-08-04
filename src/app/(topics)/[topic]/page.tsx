import HTMLContent from "@/components/HTMLContent";
import { MARKDOWN_BASE_URL } from "@/constants/env";

async function getMarkDown(topic: string) {
    const response = await fetch(
        `${MARKDOWN_BASE_URL}/content/${topic}-doc.md`
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
