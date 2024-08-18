import { shortStories } from "@/utils/shortStories";
import { countPages, getPage } from "@/utils/paginate.mjs";
import MarkdownDisplayPage from "@/components/MarkdownDisplayPage";
import styles from "@/styles/pages/shortStoriesSlug.module.scss";
import Link from "next/link";
import Pagination from "@/components/Pagination";

export default async function Pager({params}) {
    const { slug, slugger } = params;
    const pageNumber = Number(slugger.split('-')[1]);

    const getStoryBySlug = (slug) => {
        return shortStories.find(
          (story) => story.title.split(' ').join('-').toLowerCase() === slug
        );
      };  
    
    const story = getStoryBySlug(slug);

    const numberOfPages = await countPages(story.path, 3070);
    const content = await getPage(story.path, 3070 , pageNumber);

    return (
        <main className={styles.main}>
            {pageNumber === 1 && <h1>{story.title}</h1>}
            <MarkdownDisplayPage content={content} />
            <Pagination numberOfPages={numberOfPages} currentPage={pageNumber} story={slug} />
            <Link href={`/short-stories`}><button className="btn">Back To All Stories</button></Link>
        </main>
    )
}

export async function generateStaticParams() {
    const slugs = shortStories.map((story) => story.title.split(' ').join('-').toLowerCase()); // Example slug values
   
    const sluggers = await shortStories.reduce(async (accPromise, story) => {
        const acc = await accPromise; // Await the accumulated object
        const numberOfPages = await countPages(story.path, 3070);
      
        // Create the key based on the story title and add it to the accumulator
        acc[story.title.split(' ').join('-').toLowerCase()] = Array.from(
          { length: numberOfPages },
          (_, index) => 'page-' + String(index + 1)
        );
      
        return acc;
      }, Promise.resolve({})); // Start with an empty object
        
    // Generate all combinations of slug and slugger
    const paths = slugs.flatMap((slug) =>
        sluggers[slug].map((slugger) => ({
        slug,
        slugger,
      }))
    );
  
    return paths;
}