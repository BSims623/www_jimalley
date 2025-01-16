"use client";

import { usePathname } from "next/navigation";
import styles from "../styles/components/extendedNavbarMenu.module.scss";
import Link from "next/link";

export default function ExtendedNavbarMenu({ setIsOpen }) {
  const pathname = usePathname();

  return (
    <ul className={styles.nav_links_container}>
      <li>
        <Link
          className={`${styles.nav_link} ${pathname === "/" && styles.nav_link_active}`}
          onClick={() => setIsOpen(false)}
          href="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className={`${styles.nav_link} ${pathname === "/about" && styles.nav_link_active}`}
          onClick={() => setIsOpen(false)}
          href="/about"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          className={`${styles.nav_link} ${pathname === "/mayas-dance" && styles.nav_link_active}`}
          onClick={() => setIsOpen(false)}
          href="/mayas-dance"
        >
          Maya&apos;s Dance
        </Link>
      </li>
      <li>
        <Link
          className={`${styles.nav_link} ${pathname === "/short-stories" && styles.nav_link_active}`}
          onClick={() => setIsOpen(false)}
          href="/short-stories"
        >
          Short Stories
        </Link>
      </li>
      <li>
        <Link
          className={`${styles.nav_link} ${pathname === "/contact" && styles.nav_link_active}`}
          onClick={() => setIsOpen(false)}
          href="/contact"
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}
