import styles from "@/styles/pages/home.module.scss";
// import landingImage from "/public/images/landing/landing_image.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.landing_image_container}>
          <img src={"/images/landing/landing_image.jpg"} className={`${styles.landing_image} ${styles.desktop_image}`} /> 
        </div>
        <div className={styles.content_container}>
          <div className={styles.title_container}>
            <h1 className={styles.title}>Jim Alley</h1>
            <h2 className={styles.subtitle}>Creative Writer</h2>
          </div>
          <img src={"/images/landing/landing_image.jpg"} className={`${styles.landing_image} ${styles.mobile_image}`} />
          <p className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. 
          </p>
          <Link href="/about" className="btn landing_btn">Read More</Link>
        </div>
      </section>
    </main>
  );
}