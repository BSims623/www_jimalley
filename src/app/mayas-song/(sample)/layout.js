import styles from '@/styles/pages/sample.module.scss';
import Link from 'next/link';

export const metadata = {
    title: {
        default: "Jim Alley",
        template: "%s | Maya's Song | Jim Alley"
    }
};

export default function SampleLayout({ children }) {
    return (
        <main className={`${styles.main}`}>
            {children}
            <div className={styles.chapter_btn_container}>
                <Link href="/mayas-song/chapter-1/page-1"><button className="btn">Chapter 1</button></Link>
                <Link href="/mayas-song/chapter-2/page-1"><button className="btn">Chapter 2</button></Link>
                <Link href="/mayas-song/chapter-3/page-1"><button className="btn">Chapter 3</button></Link>
            </div>
        </main>
    )
}