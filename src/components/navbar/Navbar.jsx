"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
const Links = dynamic(() => import("@/components/navbar/links/Links"));
const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/logo.jpg"
          style={{ backgroundColor: "crimson", borderRadius: "50%" }}
          width={48}
          height={48}
          alt="LogoImage"
        />
      </Link>
      <div className={styles.links}>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
