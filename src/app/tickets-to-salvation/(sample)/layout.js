import styles from '@/styles/pages/sample.module.scss';
import Link from 'next/link';

export default function SampleLayout({ children }) {
    return (
        <main className={styles.main}>
            {/* <ul className={styles.sub_nav}>
                <li><Link className={styles.sub_nav_link} href="#chapter-1">Chapter 1</Link></li>
                <li><Link className={styles.sub_nav_link} href="#chapter-2">Chapter 2</Link></li>
                <li><Link className={styles.sub_nav_link} href="#chapter-3">Chapter 3</Link></li>
            </ul> */}
            {children}
            <div className={styles.chapter_btn_container}>
                <Link href="/tickets-to-salvation/chapter-1/page-1"><button className="btn">Chapter 1</button></Link>
                <Link href="/tickets-to-salvation/chapter-2/page-1"><button className="btn">Chapter 2</button></Link>
                <Link href="/tickets-to-salvation/chapter-3/page-1"><button className="btn">Chapter 3</button></Link>
            </div>
        </main>
    )
}