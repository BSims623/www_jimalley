import styles from "@/styles/components/aboutSectionMobile.module.scss";
import ExportedImage from "next-image-export-optimizer";

export default function AboutSectionMobile () {
    return (
        <>
            <section className={styles.content_section}>
                <div className={`img_container ${styles.img_container}`}>
                    <ExportedImage src={"/images/about/jim_and_deb.jpg"} fill={true} alt="About image." />
                </div>
                <p>My primary inspiration to write has always been a collection of colorful friends, family, 
                    and acquaintances who have filled my life with joy, wonder, and intrigue. And, like all writers, 
                    I&apos;ve drawn from my life experiences, especially diverse jobs from stable boy, gardener, and construction 
                    laborer to teacher, welfare worker, and government analyst. But maybe the most seductive draw has 
                    been the belief that there is a purpose to life, something greater than us, a reason, a rationale, 
                    a symmetry that makes this experience on earth gratifying and complete.
                </p> 
            </section>
            <section className={`${styles.content_section}`}>
                <div className={`img_container ${styles.img_container}`}>
                    <ExportedImage src={"/images/about/sunset.jpg"} fill={true} alt="About image." />
                </div>
                <p>During my teens, I would dream, quite literally, of holding a hard-bound book that I had written in my 
                    hands. I wrote some poetry and short stories that no one would ever see. During college, I wrote a full-length 
                    coming-of-age novel set in a hot LA summer about a young man trapped between the waning days of his carefree 
                    youth and the stresses and expectations of looming adulthood. Though that novel would not see the light of day, 
                    it did preserve a snapshot of a transitional time in my life and convinced me that I had a passion to write.
                </p>
            </section>
            <section className={`${styles.content_section}`}>
                <div className={`img_container ${styles.img_container}`}>
                    <ExportedImage src={"/images/about/jim_at_computer.jpg"} fill={true} alt="About image." />
                </div>
                <p>But I learned early on that my writing royalties would not pay the rent, or even the phone bill, so I did like 
                    a million others and joined the work force. Over the years, I was occasionally able to structure my hours to 
                    accommodate writing time, focusing on short stories because of their smaller time commitment. From time to time 
                    I made small headway, producing more than 100 stories that generated an occasional publication and a small check in the mail.
                </p>
            </section>
            <section className={`${styles.content_section}`}>
                <div className={`img_container ${styles.img_container}`}>
                    <ExportedImage src={"/images/about/trail.jpg"} fill={true} alt="About image." />
                </div>
                <p>When a few years ago I was relieved of the obligation to work, my writing passion soared and my creativity flourished. 
                    I wrote a novella and 50 more short stories, and several dozen essays. And then, most significantly, I resurrected a 
                    dusty old draft of a novel started years ago and this time worked it into a good, coherent story, <em>Tickets to Salvation</em>.
                </p>
                <p>In all, I&apos;ve had short stories published in <em>True Romance</em>, <em>Hustler Letters</em>, <em>BUF</em>, several other men&apos;s magazines, <em>WORK</em> online magazine, 
                    local literary magazine <em>The Yolo Crow</em>, and have produced a poetry anthology chap book, <em>River City Convergence</em>, containing poetry 
                    provided by myself and five other Sacramento area writers. And the happy ending is that even though I&apos;m old now, I&apos;m finally able 
                    to write full time as I&apos;ve wanted to all my life.
                </p>
            </section>
        </>
    )
}