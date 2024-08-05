'use client';

import { usePathname } from "next/navigation";
import styles from "../styles/components/extendedNavbarMenu.module.scss";
import Link from "next/link";

export default function ExtendedNavbarMenu({ setIsOpen }) {
    const pathname = usePathname();

  return (
        <ul className={styles.nav_links_container}>
            <Link href="/">
                <li className={`${styles.nav_link} ${pathname === "/" && styles.nav_link_active}`} onClick={() => setIsOpen(false)}>Home</li>
            </Link>
            <Link href="/about">
                <li className={`${styles.nav_link} ${pathname === "/about" && styles.nav_link_active}`} onClick={() => setIsOpen(false)}>About</li>
            </Link>
            <Link href="/tickets-to-salvation">
                <li className={`${styles.nav_link} ${pathname === "/tickets-to-salvation" && styles.nav_link_active}`} onClick={() => setIsOpen(false)}>Tickets to Salvation</li>
            </Link>
            <Link href="/short-stories">
                <li className={`${styles.nav_link} ${pathname === "/short-stories" && styles.nav_link_active}`} onClick={() => setIsOpen(false)}>Short Stories</li>
            </Link>
            <Link href="/contact">
                <li className={`${styles.nav_link} ${pathname === "/contact" && styles.nav_link_active}`} onClick={() => setIsOpen(false)}>Contact</li>
            </Link>
         </ul>
  );
}