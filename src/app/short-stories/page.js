import styles from "@/styles/pages/shortStories.module.scss";
import StoryCard from "@/components/StoryCard";
import { shortStories } from "@/utils/shortStories";

console.log(shortStories);

export default function ShortStories() {
  return (
    <main className={styles.main}>
      <div className={styles.content_container}>
        <h1 className={styles.title}>Short Stories</h1>
        <div className={styles.short_stories_container}>
          {shortStories.map((story, index) => {
            return <StoryCard key={index} title={story.title} date={story.date} description={story.description} path={story.path} />
          })}
        </div>
      </div>
    </main>
  );
}