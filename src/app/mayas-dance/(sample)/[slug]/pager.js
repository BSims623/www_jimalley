import { getChapters } from "@/utils/paginate.mjs";

export default function Pager({ params }) {
    const { slug } = params;
    return (
        <>
        </>
    )
}

export async function generateStaticParams() {
    const slugs = await getChapters('/stories/mayas_dance.md');

    return slugs.map((_, index) => `chapter-${index + 1}`)
}