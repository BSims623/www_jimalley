import styles from "@/styles/components/aboutSectionDesktop.module.scss";
import ExportedImage from "next-image-export-optimizer";
import DesktopPhotoDisplay from "./DesktopPhotoDisplay";

export default function AboutSectionDesktop () {
    const photos = [
        {
            src: "/images/about/sunset.jpg",
            alt: "A picture of a sunset."
        },
        {
            src: "/images/about/jim_at_computer.jpg",
            alt: "A picture of Jim Alley writing on his computer."
        },
        {
            src: "/images/about/trail.jpg",
            alt: "A picture of a dirt walking trail with green grass on both sides."
        }
    ];


    return (
        <div className={styles.content_container}>
            <section className={styles.upper_about_section}>
                <div className="paragraph_container">
                    <p>My primary inspiration to write has always been a stable of colorful friends, family, and
                        acquaintances who have filled my life with joy, wonder, and intrigue. And, like all
                        writers, I&apos;ve drawn from my life experiences, especially diverse jobs from stable boy,
                        gardener, and construction laborer to teacher, welfare worker, and government analyst.
                        But maybe the most seductive draw is the belief that there a is purpose to life, something
                        greater than us, a reason, a rationale, a symmetry that makes life gratifying and complete.
                    </p>
                    <p>During my teens, I would dream, quite literally, of holding in my hands a hard-bound
                        book that I had written, and wrote poetry and short stories that no one would ever see.
                        And during college, over a period of two or three years, I wrote a full-length coming-of-
                        age novel set in a hot LA summer about a young man trapped between the waning days
                        of carefree youth and looming adulthood with all its stresses and expectations. Though
                        that novel would not see the light of day, it did preserve a snapshot of a transitional time
                        in my life and confirmed that I undeniably had a passion to write.
                    </p>
                </div>
                <div className={`img_container ${styles.upper_img_container}`}>
                    <ExportedImage src={"/images/about/jim_and_deb.jpg"} fill={true} alt="About image." />
                </div>
            </section>
            <section className="paragraph_container">
                <p>But I learned early on that my writing royalties would not pay the rent, or even the phone
                    bill, so I did like millions of others and joined the work force. Over the years, I was
                    occasionally able to structure my hours to accommodate writing time, focusing on short
                    stories because of their smaller time commitment. From time to time I made small
                    headway, producing more than 100 stories that generated an occasional publication and a
                    small check in the mail.
                </p>
                <p>When a few years ago I was relieved of the obligation to work, my writing passion soared
                    and my creativity flourished. I wrote a novella and 50 more short stories, and several
                    dozen essays. And then, most significantly, I resurrected a dusty old draft of a novel
                    started years ago and this time worked it into a good, coherent story, <em>Tickets to Salvation</em>.
                </p>
                <p>In all, I&apos;ve had short stories published in <em>True Romance</em>, <em>Hustler Letters</em>, <em>BUF</em>, several
                    other men&apos;s magazines, <em>WORK</em> online magazine, local literary magazine <em>The Yolo Crow</em>,
                    and have produced a poetry anthology chap book, <em>River City Convergence</em>, containing
                    poetry provided by myself and five other Sacramento area writers. And the happy ending
                    is that even though I&apos;m old now, I&apos;m finally able to write full time as I&apos;ve wanted to all
                    my life.
                </p>
            </section>
            <DesktopPhotoDisplay photos={photos}/>
            {/* <div className={styles.images_container}>
                <div className={`img_container ${styles.img_container}`}>
                    <ExportedImage src={"/images/about/sunset.jpg"} fill={true} alt="About image." />
                </div>
                <div className={`img_container ${styles.img_container}`}>
                    <ExportedImage src={"/images/about/jim_at_computer.jpg"} fill={true} alt="About image." />
                </div>
                <div className={`img_container ${styles.img_container}`}>
                    <ExportedImage src={"/images/about/trail.jpg"} fill={true} alt="About image." />
                </div>
            </div> */}
        </div>
    )
}