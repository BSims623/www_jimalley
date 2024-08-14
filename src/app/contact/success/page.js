import Link from "next/link";
import styles from "@/styles/pages/contactStatus.module.scss"

export default function Success() {
    return (
        <main className={styles.main}>
            <h1 className={styles.message}>Message sent successfully!</h1>
            <Link className="btn" href="/">Back Home</Link>
        </main>
    )
}