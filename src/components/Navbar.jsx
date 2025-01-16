'use client';
import Link from "next/link";
import styles from "@/styles/components/navbar.module.scss";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ExtendedNavbarMenu from "./ExtendedNavbarMenu";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    
    const handleClick = () => {
        console.log(!isOpen);
        setIsOpen(!isOpen);
    }

  return (
    <nav className={styles.navbar}>
      <Link href="/"><span className={styles.title}>Jim Alley</span></Link>
      <ul className={styles.nav_links_container}>
        <li><Link className={`${styles.nav_link} ${pathname === "/" && styles.nav_link_active}`} href="/">Home</Link></li>
        <li><Link className={`${styles.nav_link} ${pathname === "/about" && styles.nav_link_active}`} href="/about">About</Link></li>
        <li><Link className={`${styles.nav_link} ${pathname.includes("/tickets-to-salvation") && styles.nav_link_active}`} href="/tickets-to-salvation">Tickets to Salvation</Link></li>
        <li><Link className={`${styles.nav_link} ${pathname.includes("/short-stories") && styles.nav_link_active}`} href="/short-stories">Short Stories</Link></li>
        <li><Link className={`${styles.nav_link} ${pathname === "/contact" && styles.nav_link_active}`} href="/contact">Contact</Link></li>
      </ul>
      { isOpen ? <svg className={styles.nav_button} onClick={() => handleClick()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg> :
        <svg className={styles.nav_button} onClick={() => handleClick()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
      }
      {isOpen && <ExtendedNavbarMenu setIsOpen={setIsOpen}/>}
    </nav>
  );
}