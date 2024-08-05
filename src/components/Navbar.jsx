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
      <Link href="/"><h1 className={styles.title}>Jim Alley</h1></Link>
      <ul className={styles.nav_links_container}>
          <Link href="/">
            <li className={`${styles.nav_link} ${pathname === "/" && styles.nav_link_active}`}>Home</li>
          </Link>
          <Link href="/about">
            <li className={`${styles.nav_link} ${pathname === "/about" && styles.nav_link_active}`}>About</li>
          </Link>
          <Link href="/tickets-to-salvation">
            <li className={`${styles.nav_link} ${pathname === "/tickets-to-salvation" && styles.nav_link_active}`}>Tickets to Salvation</li>
          </Link>
          <Link href="/short-stories">
            <li className={`${styles.nav_link} ${pathname === "/short-stories" && styles.nav_link_active}`}>Short Stories</li>
          </Link>
          <Link href="/contact">
            <li className={`${styles.nav_link} ${pathname === "/contact" && styles.nav_link_active}`}>Contact</li>
          </Link>
      </ul>
      {isOpen ? <i aria-hidden className={`fa-solid fa-x ${styles.nav_button}`} onClick={() => handleClick()}></i> :
      <i aria-hidden className={`fa-solid fa-bars ${styles.nav_button}`} onClick={() => handleClick()}></i>
      }
      {isOpen && <ExtendedNavbarMenu setIsOpen={setIsOpen}/>}
    </nav>
  );
}