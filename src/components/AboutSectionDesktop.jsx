import styles from "@/styles/components/aboutSectionDesktop.module.scss";
import ExportedImage from "next-image-export-optimizer";

export default function AboutSectionDesktop () {
    return (
        <div className={styles.content_container}>
            <section className={styles.upper_about_section}>
                <div className="paragraph_container">
                    <p>During my teens, I would dream, quite literally, of holding in my hands a hard-bound
                        book that I had written. I would write poetry and short stories that no one would ever see.
                        And during college, over a period of two or three years, I wrote a full-length coming-of-
                        age novel set in a hot LA summer about a young man trapped between the waning days
                        of a carefree childhood and looming adulthood with all its stresses and expectations.
                        Though that novel would not see the light of day, it did preserve a snapshot of a
                        transitional time of my life and confirmed that I undeniably had a passion to write.
                    </p>
                    <p>I learned early on that my writing royalties would not pay the rent, or even the phone bill,
                        so I did like millions of others and joined the work force. Over the years, I was
                        occasionally able to structure my hours to accommodate writing time, focusing on short
                        stories because of their smaller time commitment. From time to time I made small
                        headway, producing more than 100 stories that generated an occasional publication and a
                        small check in the mail.
                    </p>
                </div>
                <div className={`img_container ${styles.upper_img_container}`}>
                    <ExportedImage src={"/images/contact/contact_image.jpg"} fill={true} alt="About image." />
                </div>
            </section>
            <section className="paragraph_container">
                <p>When a few years ago I was relieved of the obligation to work, my writing passion soared
                    and my creativity flourished. I wrote a novella and 50 more short stories. And then, most
                    significantly, I resurrected a dusty old draft of a novel started years ago and this time
                    worked it into a good, coherent story, <em>Tickets to Salvation</em>.
                </p>
                <p>In all, I&apos;ve had short stories published in True Romance, Hustler Letters, BUF, several
                    other men&apos;s magazines, WORK online magazine, local literary magazine The Yolo Crow,
                    and have produced a poetry anthology chap book, River City Convergence, containing
                    poetry provided by myself and five other Sacramento area writers. And the happy ending
                    is that even though I&apos;m old now, I&apos;m finally able to write full time as I&apos;ve wanted to all
                    my life.
                </p>
            </section>
            <div className={styles.images_container}>
                <div className={`img_container ${styles.img_container}`}>
                    <ExportedImage src={"/images/about/about_image_2.jpg"} fill={true} alt="About image." />
                </div>
                <div className={`img_container ${styles.img_container}`}>
                    <ExportedImage src={"/images/about/about_image_3.jpg"} fill={true} alt="About image." />
                </div>
                <div className={`img_container ${styles.img_container}`}>
                    <ExportedImage src={"/images/about/about_image_4.jpg"} fill={true} alt="About image." />
                </div>
            </div>
        </div>
    )
}