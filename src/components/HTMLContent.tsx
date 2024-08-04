import ReactMarkdown from "react-markdown";

export default function HTMLContent({ content }: { content: string }) {
    return <ReactMarkdown>{content}</ReactMarkdown>;
}
