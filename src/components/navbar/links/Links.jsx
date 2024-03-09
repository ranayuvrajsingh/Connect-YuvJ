"use client";
import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navlink/navLink";
import Image from "next/image";
import { FaHamburger } from "react-icons/fa";
const Links = () => {
  const [open, setOpen] = useState(false);
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Work",
      path: "/work",
    },
    {
      title: "AboutMe",
      path: "/about",
    },
    // {
    //   title: "BlogPage",
    //   path: "/blog",
    // },
  ];

  // const session = true;
  // const isAdmin = true;

  const handleLinkClick = () => {
    setOpen(false); // Close the sidebar when a link is clicked
  };

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} onClick={handleLinkClick} />
        ))}

        {/* {session ? (
          isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} onClick={handleLinkClick} />
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} onClick={handleLinkClick} />
        )}
        {session && <button className={styles.logout}>Logout</button>} */}
      </div>

      <button className={styles.btn} onClick={() => setOpen((prev) => !prev)}>
        {/* <Image className={styles.menu} src="/menu.png" width={38} height={39} /> */}
        <div style={{ backgroundColor: "white" }}>
          {" "}
          <FaHamburger style={{ color: "black", fontSize: "24px" }} />
        </div>
      </button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} onClick={handleLinkClick} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
