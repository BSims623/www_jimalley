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
          <ExportedImage className={`${styles.landing_image} ${styles.desktop_image}`} src={"/images/landing/landing_image.jpg"} fill={true} alt="Landing image."/> 
        </div>
        <div className={styles.content_container}>
          <div className={`${styles.mobile_img_container} img_container`}>
            <ExportedImage className={`${styles.landing_image} ${styles.mobile_image}`} src={"/images/landing/landing_image.jpg"} fill={true} alt="Landing image."/>
          </div>
          <div className={styles.introduction_container}>
            <p className={styles.paragraph}>I think at some point, everyone wants to write their story. Who doesn&apos;t want to capture a
            remarkable memory, the sum of their life experiences, or the magic of the most intriguing
            people they&apos;ve known? For me, the passion to write came early, around age nine or ten,
            when I wrote several simple childhood stories about football heroes or insightful young
            people, handwritten on plain blank pages.</p>
            <p className={styles.paragraph}>Now, a lifetime later, I&apos;m a veteran West Sacramento, California writer. My short stories
              have appeared in several national magazines and local literary magazines; my essays in
              an on-line journal, and my debut novel, Tickets to Salvation, is in final editing and will
              soon be available to the public.</p>
            <p>My primary inspiration to write has always been a stable of colorful friends, family, and
              acquaintances who have filled my life with joy, wonder, and intrigue. And, like all
              writers, I&apos;ve drawn from my life experiences, especially jobs from stable boy, gardener,
              and construction laborer to teacher, welfare worker, and government analyst. But maybe
              the most seductive draw is a belief that there a is purpose to life, something greater than
              us, a reason, a rationale, a symmetry that in the end makes life gratifying and complete.</p>
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