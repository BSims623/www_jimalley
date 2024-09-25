import Link from 'next/link';
import styles from '@/styles/pages/notFound.module.scss';
 
export default function NotFound() {
  return (
    <main className={styles.main}>
      <h1>Not Found</h1>
      <p>This page does not exist...</p>
      <Link href="/"><button className='btn'>Back Home</button></Link>
    </main>
  )
}