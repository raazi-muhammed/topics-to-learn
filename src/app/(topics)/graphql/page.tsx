import HTMLContent from "@/components/HTMLContent";
import MARKDOWN_LINKS from "@/constants/markdownLinks";

async function getGraphQL() {
    const response = await fetch(MARKDOWN_LINKS.graphQl);
    return response.text();
}

export default async function GraphQL() {
    const data = await getGraphQL();
    return <HTMLContent content={data} />;
}
