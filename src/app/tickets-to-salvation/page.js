import styles from "@/styles/pages/currentProject.module.scss";
import Link from "next/link";

export const metadata = {
  title: "Tickets to Salvation",
  description: "Tickets to Salvation stems from my experiences as a Spanish-speaking welfare worker in Santa Barbara, California. The novel careens through the traps and pitfalls of the welfare system, the tyranny of living with a mentally disturbed parent, and the efforts of a naïve young welfare worker to make a name for himself by rescuing an at-risk child."
}

export default function TicketsToSalvation() {
  return (
    <main className={styles.main}>
      <div className={styles.content_container}>
        <h1>Tickets to Salvation</h1>
        <div className="paragraph_container">
          <p>Fourteen-year-old Maya Pareto is about to achieve a life-long dream by performing as a
            flamenco dancer in Santa Barbara&apos;s annual historical parade, <Link className={styles.link} href="https://www.santabarbara.com/activities/events/fiesta/historical-parade/">
            <em>El Desfíle Histórico</em></Link>. But as she is climbing victoriously aboard a float before the parade, she is abruptly yanked to the
            ground by her mother, Simpática, then before stunned onlookers, led back to their bleak
            apartment building where Simpática burns Maya&apos;s flamenco dress and cuts up her dancing
            shoes. Such outbursts are nothing new from this troubled and unstable mother, but this
            one hurt, confirming what Maya has always suspected: happy endings were never meant
            for her.
          </p>
          <p>The family&apos;s welfare worker Mike Stanning has been scrambling to rescue Maya for a long
            time with little success. Then something amazing happens. Maya quietly gathers her
            courage and embarks on a magical journey to re-define herself and resurrect her dreams.
            As she does, Mike&apos;s life spirals out of control, but soon the two will be drawn together,
            consolidate their efforts, and look deeply inside themselves for courage and direction.
          </p>
          <p><em>Tickets to Salvation</em> stems from my experiences as a Spanish-speaking welfare worker in{" "}
            <Link className={styles.link} href="https://www.google.com/search?q=santa+barbara+california&sca_esv=4d75a1f392f2e349&sca_upv=1&udm=2&biw=1680&bih=852&sxsrf=ADLYWIJ0GrgZL_72-1k2zYbkRVdrT3Y37Q%3A1726860353531&ei=QcztZs2MIMLj0PEP68nQiAM&oq=santa+barbara%2C+cal&gs_lp=Egxnd3Mtd2l6LXNlcnAiEnNhbnRhIGJhcmJhcmEsIGNhbCoCCAAyCBAAGIAEGLEDMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESO4gUOYKWNoPcAF4AJABAJgBSaABzgKqAQE1uAEDyAEA-AEBmAIGoALjAsICBBAjGCfCAg0QABiABBixAxhDGIoFwgIKEAAYgAQYQxiKBZgDAIgGAZIHATagB7ce&sclient=gws-wiz-serp">
            Santa Barbara, California</Link>. The novel careens through the traps and pitfalls of the welfare
            system, the tyranny of living with a mentally disturbed parent, and the efforts of a naïve
            young welfare worker to make a name for himself by rescuing an at-risk child.
          </p>
          <p>The original draft was sprawling, 1,100 pages, with too many primary characters and
            story lines. I submitted it to several publishing houses, and though one major house asked
            to see more, there were in the end no takers and the manuscript was tucked away in a
            dusty box in the garage for many years. But I was haunted by that manuscript and
            convinced there was a good story lurking within.
          </p>
          <p>When I was able to retire several years ago, I wrote about fifty short stories and many
            essays over seven years. Then, impulsively, I decided to pull out that old yellowing
            manuscript and transcribe it from hardcopy to electronic. A year later, I began editing and
            came up with a good solid draft, but it was still 500 pages. After a professional editorial
            assessment, I revised it again, this time boiling it down to 280 pages. And now I think I
            have a fast-moving and inspirational tale.
          </p>
          <p>The story is rich in detail and steeped in Santa Barbara&apos;s history, local color and Mexican
            heritage. It explores the welfare system, the protagonist&apos;s complex family history, and the
            origins of flamenco dancing. It is literary (and contemporary and coming-of-age) fiction
            and character-driven. It is currently in the final editing stage. Once available to the public,
            I will provide more specifics on this site. Meanwhile, please enjoy a sampling of the first
            three chapters.
          </p>
        </div>
        <Link href="/tickets-to-salvation/chapter-1/page-1"><button className={`btn ${styles.btn}`}>tickets to salvation</button></Link>
      </div>
    </main>
  );
}