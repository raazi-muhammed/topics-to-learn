import HTMLContent from "@/components/HTMLContent";
import MARKDOWN_LINKS from "@/constants/markdownLinks";

async function getReact() {
    const response = await fetch(MARKDOWN_LINKS.react);
    return response.text();
}

export default async function React() {
    const data = await getReact();
    return <HTMLContent content={data} />;
}
