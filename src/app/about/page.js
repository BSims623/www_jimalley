import styles from "@/styles/pages/about.module.scss";
import AboutSectionMobile from "@/components/AboutSectionMobile";
import AboutSectionDesktop from "@/components/AboutSectionDesktop";


export default function About() {
  return (
    <main className={styles.main}>
      <div className={styles.content_container}>
        <h1 className={styles.title}>About Jim</h1>
        <AboutSectionMobile />
        <AboutSectionDesktop />
      </div>
    </main>
  );
}