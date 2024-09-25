import styles from "@/styles/pages/about.module.scss";
import AboutSectionMobile from "@/components/AboutSectionMobile";
import AboutSectionDesktop from "@/components/AboutSectionDesktop";


export const metadata = {
  title: "About",
  description: "My primary inspiration to write has always been a collection of colorful friends, family, and acquaintances who have filled my life with joy, wonder, and intrigue.",
};

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