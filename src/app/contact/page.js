import styles from "@/styles/pages/contact.module.scss";
import ContactMe from "@/components/ContactMe";
import ExportedImage from "next-image-export-optimizer";

export default function Contact() {
  return (
    <main className={styles.main}>
      <div className={styles.main_container}>
        <h1 className={styles.title}>Contact</h1>
        <div className={`img_container ${styles.img}`}>
          <ExportedImage 
          src="/images/contact/contact_image.jpg"
          fill={true}
          sizes="500px" 
          alt="A picture of Jim eating out of a bowl with his cat watching."/>
        </div>
        <ContactMe />
      </div>
    </main>
  );
}