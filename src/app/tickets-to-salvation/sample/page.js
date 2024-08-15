import MarkdownDisplay from "@/components/MarkdownDisplay";
import Link from "next/link";
import styles from "@/styles/pages/sample.module.scss"

export default function Sample() {
    return (
        <main className={styles.main}>
            <h1>Tickets to Salvation</h1>
            <ul className={styles.sub_nav}>
                <li><Link className={styles.sub_nav_link} href="#chapter-1">Chapter 1</Link></li>
                <li><Link className={styles.sub_nav_link} href="#chapter-2">Chapter 2</Link></li>
                <li><Link className={styles.sub_nav_link} href="#chapter-3">Chapter 3</Link></li>
            </ul>
            <MarkdownDisplay path={'/stories/tickets_to_salvation.md'}/>
            <Link className="btn" href="/tickets-to-salvation">Back</Link>
        </main>
    )
}