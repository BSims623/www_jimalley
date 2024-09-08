import styles from "@/styles/pages/currentProject.module.scss";
import Link from "next/link";

export default function TicketsToSalvation() {
  return (
    <main className={styles.main}>
      <div className={styles.content_container}>
        <h1>Tickets to Salvation</h1>
        <div className="paragraph_container">
          <p>My debut novel, <em>Tickets to Salvation</em>, stems from my experiences as a Spanish&ndash;speaking
            welfare worker in Santa Barbara, California. The novel careens through the traps and
            pitfalls of the welfare system, the tyranny of living with a mentally disturbed parent, and
            the efforts of a naïve young welfare worker to make a name for himself by rescuing an at&ndash;risk
            child on his caseload.
          </p>
          <p>The story was inspired by real people and experiences I observed during my tenure at the
            county welfare department. The first draft was sprawling &mdash; 1,100 pages &mdash; with multiple
            primary characters and story lines. I submitted it to several publishing houses, and though
            one major house asked to see more of the text, in the end, there were no takers and the
            manuscript was tucked away in a dusty box in the garage where it sat for many years. But
            I was haunted by that manuscript and convinced there was a good story lurking within.
          </p>
          <p>When I retired several years ago and resumed writing, I at first wrote about fifty short
            stories over seven years. Then impulsively I decided to pull out that old yellowing
            manuscript and transcribe it from hardcopy to electronic. A year later, I began editing. I
            came up with a good solid draft, but it was still 500 pages. After a professional editorial
            assessment, I revised it again, this time boiling it down to 280 pages. And now I think I
            have an interesting and fast&ndash;moving story about a fourteen&ndash;year&ndash;old girl living with an
            abusive single mother and showing remarkable fortitude and courage as she wends her
            way from under her mother&apos;s yoke and through an unlikely journey to reach the dreams
            she thought were unreachable.
          </p>
          <p>The story is rich in detail and steeped in Santa Barbara&apos;s history, local color and Mexican
            heritage. It explores the welfare system, the protagonist&apos;s complex family history, and the
            origins of flamenco. It is literary (and contemporary, and coming&ndash;of&ndash;age, and
            bildungsroman) fiction, character&ndash;driven and 74,000&ndash;words. It is currently in the final
            editing stage. Once available to the public, I will provide more specifics on this site.
            Meanwhile, please enjoy a sampling of the first three chapters.
          </p>
        </div>
        <Link href="/tickets-to-salvation/sample"><button className="btn">Read Sample</button></Link>
      </div>
    </main>
  );
}