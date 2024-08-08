import { shortStories } from "@/utils/shortStories";
import MarkdownDisplay from "@/components/MarkdownDisplay";
import styles from "@/styles/pages/shortStoriesSlug.module.scss";
import Link from "next/link";

export default function Page({ params }) {
  const { slug } = params;
  
  const getStoryBySlug = (slug) => {
    return shortStories.find(
      (story) => story.title.split(' ').join('-').toLowerCase() === slug
    );
  };  

  const story = getStoryBySlug(slug);
  
    return (
        <main>
            <div className={styles.container}>
              <h1>{story.title}</h1>
              <MarkdownDisplay path={story.path} />
              <Link href={`/short-stories`} className="btn">Back To All Stories</Link>
            </div>
        </main>
    )
  }

  export async function generateStaticParams() {    
   
    return shortStories.map((story) => ({
      slug: story.title.split(' ').join('-').toLowerCase(),
    }))
  }