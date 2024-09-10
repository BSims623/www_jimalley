import { shortStories } from "@/utils/shortStories";
import MarkdownDisplay from "@/components/MarkdownDisplay";
import styles from "@/styles/pages/shortStoriesSlug.module.scss";
import Link from "next/link";

export default function Page({ params }) {
  const { slug } = params;
  
  const getStoryBySlug = (slug) => {
    return shortStories.find(
      (story) => story.title.split(' ').join('-').toLowerCase() === slug.replace(/\,/g, "")
    );
  };  

  const story = getStoryBySlug(slug);
  
    return (
        <main className={styles.main}>
              <h1>{story.title}</h1>
              <MarkdownDisplay path={story.path} />
              <Link href={`/short-stories`}><button className="btn">Back To All Stories</button></Link>
        </main>
    )
  }

  export async function generateStaticParams() {    
   
    return shortStories.map((story) => ({
      slug: story.title.replace(/\,/g, "").split(' ').join('-').toLowerCase(),
    }))
  }