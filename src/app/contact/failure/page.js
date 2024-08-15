import Link from "next/link";
import styles from "@/styles/pages/contactStatus.module.scss"

export default function EmailError() {
    return (
        <main className={styles.main}>
            <h1 className={styles.message}>There was an error sending your message try again later.</h1>
            <Link href="/"><button className="btn">Back Home</button></Link>
        </main>
    )
}