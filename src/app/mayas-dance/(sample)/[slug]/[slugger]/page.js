import { getChapters, countPagesTwo, getPageTwo } from "@/utils/paginate.mjs";
import MarkdownDisplayPage from "@/components/MarkdownDisplayPage";
import Pagination from "@/components/Pagination";
import styles from '@/styles/pages/sample.module.scss';

// Dynamically generate metadata
export async function generateMetadata({ params }) {
    const { slug, slugger } = params;

    const chapter = `${slug.split('-')[0][0].toUpperCase() + slug.split('-')[0].slice(1)} ${slug.split('-')[1]}`;
    const pageNumber = `${slugger.split('-').join(' ')}`

    return {
        title: chapter,
        description: `Read ${chapter.toLowerCase()}, ${pageNumber} of "Maya's Dance".`,
    };
}

export default async function Page({ params }) {
    const { slug, slugger } = params;
    const chapters = await getChapters('/stories/mayas_dance.md');
    const pageNumber = Number(slugger.split('-')[1]);
    const chapter = Number(slug.split('-')[1]);
    const chapterContent = chapters[chapter - 1];


    const numberOfPages = countPagesTwo(chapterContent, 3070);
    const pageContent = getPageTwo(chapterContent, 3070, pageNumber);



    return (
        <div className={styles.main_container}>
            <MarkdownDisplayPage content={pageContent} />
            {numberOfPages > 1 && <Pagination numberOfPages={numberOfPages} currentPage={pageNumber} story={slug} thePath={'/mayas-dance'} />}
        </div>
    )
}

export async function generateStaticParams() {
    const chapters = await getChapters('/stories/mayas_dance.md');
    const slugs = chapters.map((_, index) => `chapter-${index + 1}`);

    const sluggers = await chapters.reduce(async (accPromise, chapter, index) => {
        const acc = await accPromise;
        const numberOfPages = countPagesTwo(chapter, 3070);

        acc[`chapter-${index + 1}`] = Array.from(
            { length: numberOfPages },
            (_, index) => 'page-' + String(index + 1)
        );

        return acc
    }, Promise.resolve({}));

    const paths = slugs.flatMap((slug) =>
        sluggers[slug].map((slugger) => ({
            slug,
            slugger,
        }))
    );

    return paths
}