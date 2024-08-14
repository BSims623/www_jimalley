import styles from "@/styles/pages/contact.module.scss";
import ContactMe from "@/components/ContactMe";

export default function Contact() {
  return (
    <main className={styles.main}>
      <div className={styles.main_container}>
        <h1 className={styles.title}>Contact</h1>
        <img className={styles.image} src="/images/contact/contact_image.jpg" alt="Contact Image" />
        {/* <h2>Send me an email</h2> */}
        <ContactMe />
      </div>
    </main>
  );
}