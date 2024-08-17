import styles from "@/styles/pages/about.module.scss";
import ExportedImage from "next-image-export-optimizer";

export default function About() {
  return (
    <main className={styles.main}>
      <div className={styles.content_container}>
        <h1 className={styles.title}>About Me</h1>
        <section className={`${styles.content_section_right_image} ${styles.content_section}`}>
          <p className={styles.content_paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
          </p>
          <div className={`img_container ${styles.img_container} ${styles.about_image_right}`}>
            <ExportedImage src={"/images/contact/contact_image.jpg"} fill={true} />
          </div> 
        </section>
        <section className={`${styles.content_section} ${styles.content_section_left_image}`}>
          <div className={`img_container ${styles.img_container}`}>
            <ExportedImage src={"/images/about/about_image_2.jpg"} fill={true} />
          </div>
          <p className={''}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
          </p>
        </section>
        <section className={`${styles.content_section_right_image} ${styles.content_section}`}>
          <p className={styles.content_paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
          </p>
          <div className={`img_container ${styles.img_container} ${styles.about_image_right}`}>
            <ExportedImage src={"/images/about/about_image_3.jpg"} fill={true} />
          </div>
        </section>
        <section className={`${styles.content_section} ${styles.content_section_left_image}`}>
          <div className={`img_container ${styles.img_container}`}>
            <ExportedImage src={"/images/about/about_image_4.jpg"} fill={true} />
          </div>
          <p className={''}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
          </p>
        </section>
      </div>
    </main>
  );
}