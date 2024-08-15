import MarkdownDisplay from "@/components/MarkdownDisplay"

export default function Sample() {
    return (
        <main>
            <div className="markdown-container"></div>
            <MarkdownDisplay path={'/stories/tickets_to_salvation.md'}/>
        </main>
    )
}