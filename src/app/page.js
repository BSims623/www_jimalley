import styles from "@/styles/pages/home.module.scss";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

export default function Home() {

  return (
    <main className={styles.main}>
      <div className={styles.title_container}>
        <h1 className={styles.title}>WELCOME TO<br className={styles.mobile_break}></br> JIM ALLEY&apos;S WEBSITE!!</h1>
      </div>
      <section className={styles.hero}>
        <div className={"img_container"}>
          <ExportedImage className={`${styles.landing_image} ${styles.desktop_image}`} src={"/images/landing/jim_with_horse.jpg"} fill={true} alt="A picture of Jim Alley with a horse."/> 
        </div>
        <div className={styles.content_container}>
          <div className={`${styles.mobile_img_container} img_container`}>
            <ExportedImage className={`${styles.landing_image} ${styles.mobile_image}`} src={"/images/landing/jim_with_horse.jpg"} fill={true} alt="A picture of Jim Alley with a horse."/>
          </div>
          <div className="paragraph_container">
            <p className={styles.paragraph}>I&apos;m a veteran short story writer living in West Sacramento, California with Deborah, my
              wife of many years. Most writers will tell you the reason they write is that it is an
              obsession they can&apos;t shake. It&apos;s just what they do. And I think at some point, everyone
              wants to write their story, capture a remarkable memory, the sum of their life experiences,
              or the magic of intriguing people they&apos;ve known. For me, that passion came early, around
              age seven or eight, when I wrote several simple childhood stories about football heroes or
              insightful young people, handwritten on plain blank pages.</p>
            <p className={styles.paragraph}>Now, a lifetime later, I&apos;ve written probably 150 short stories, many essays, and three
              novel drafts. My short stories have appeared in several national magazines and local
              literary magazines; my essays in an on-line journal, and my debut novel, Tickets to
              Salvation, is in final editing and will soon be available to the public.</p>
            <p>Please learn more about <Link className={styles.link} href="/about">me</Link>, read an excerpt from my upcoming novel, <Link className={styles.link} href="tickets-to-salvation">Tickets to
              Salvation</Link>, or read several of my <Link className={styles.link} href="short-stories">short stories</Link> on this site. 
            </p>
          </div>
          <Link href="/about"><button className="btn">Read More</button></Link>
        </div>
      </section>
    </main>
  );
}