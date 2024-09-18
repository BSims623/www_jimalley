import styles from "@/styles/pages/shortStories.module.scss";
import StoryCard from "@/components/StoryCard";
import { shortStories } from "@/utils/shortStories";
import DesktopPhotoDisplay from "@/components/DesktopPhotoDisplay";
import Slider from "@/components/Slider";

export default function ShortStories() {
  const photos = [
    {
      src: "/images/short-stories/jim_by_tree.jpg",
      alt: "Jim Alley standing next to a tree."
    },
    {
      src: "/images/short-stories/palm_tree.jpg",
      alt: "A picture of a tall, bushy palm tree."
    },
    {
      src: "/images/short-stories/deborah.jpg",
      alt: "A portrait of Jim Alley's wife Deborah."
    }
  ];

  return (
    <main className={styles.main}>
      <div className={styles.content_container}>
        <h1 className={styles.title}>Short Stories</h1>
        <div className="paragraph_container">
          <p>My primary motivation to write has always been the many interesting, colorful characters
            I&apos;ve met during my journey through life. I&apos;ve had close relationships with some unique,
            and sometimes cantankerous friends, not just by dumb luck, but because I gravitate
            toward that kind of person. They have amused and inspired me and kept life interesting.
            And I am especially gratified that a few of those who are no longer with us will live on in
            my stories.</p>
          <p>I&apos;ve discovered after the fact that my stories can be grouped into three different
            categories: One, character-driven; two, family affairs; and three, the Catchall group
            which includes humor, horror, conjectural, and even some fantasy. Six short stories and
            one essay are included here for your reading pleasure. Enjoy!</p>
        </div>
        <DesktopPhotoDisplay photos={photos} />
        <Slider photos={photos} />
        <h2 className={styles.genre}>Character-based:</h2>
        <div className={styles.short_stories_container}>
          {shortStories.map((story, index) => {
            return story.genre === "character-based" && <StoryCard key={index} title={story.title} date={story.date} description={story.description} path={story.path} />
          })}
        </div>
        <h2 className={styles.genre}>Family Matters:</h2>
        <div className={styles.short_stories_container}>
          {shortStories.map((story, index) => {
            return story.genre === "family-matters" && <StoryCard key={index} title={story.title} date={story.date} description={story.description} path={story.path} />
          })}
        </div>
        <h2 className={styles.genre}>Humor/Horror:</h2>
        <div className={styles.short_stories_container}>
          {shortStories.map((story, index) => {
            return story.genre === "catchall" && <StoryCard key={index} title={story.title} date={story.date} description={story.description} path={story.path} />
          })}
        </div>
        <h2 className={styles.genre}>Essay:</h2>
        <div className={styles.short_stories_container}>
          {shortStories.map((story, index) => {
            return story.genre === "essay" && <StoryCard key={index} title={story.title} date={story.date} description={story.description} path={story.path} />
          })}
        </div>
      </div>
    </main>
  );
}