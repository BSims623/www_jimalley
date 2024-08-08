'use client';

import Link from "next/link";
import styles from "@/styles/components/navbar.module.scss";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ExtendedNavbarMenu from "./ExtendedNavbarMenu";
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
            <li className={`${styles.nav_link} ${pathname.includes("/short-stories") && styles.nav_link_active}`}>Short Stories</li>
          </Link>
          <Link href="/contact">
            <li className={`${styles.nav_link} ${pathname === "/contact" && styles.nav_link_active}`}>Contact</li>
          </Link>
      </ul>
      { isOpen ? <FontAwesomeIcon icon={faX} className={styles.nav_button} onClick={() => handleClick()} /> :
        <FontAwesomeIcon icon={faBars} className={styles.nav_button} onClick={() => handleClick()} />
      }
      {isOpen && <ExtendedNavbarMenu setIsOpen={setIsOpen}/>}
    </nav>
  );
}