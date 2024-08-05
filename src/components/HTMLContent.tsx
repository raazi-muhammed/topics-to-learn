"use client";

import MarkdownPreview from "@uiw/react-markdown-preview";

export default function HTMLContent({ content }: { content: string }) {
    return (
        <MarkdownPreview
            source={content}
            style={{
                background: "var(--background)",
                color: "var(--foreground)",
                lineHeight: "1.4em",
            }}
        />
    );
}
