import Link from "next/link";
import styles from "@/styles/components/storyCard.module.scss";

export default function StoryCard({ title, date, description, path }) {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{title}</h3>
            <span className={styles.date}>{date}</span>
            <p className={styles.paragraph}>{description}</p>
            <Link href={`/short-stories/${title.split(' ').join('-').toLowerCase()}/page-1`}><button className="btn">Read</button></Link>
        </div>
    )
}