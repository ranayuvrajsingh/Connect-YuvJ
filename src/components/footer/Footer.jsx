import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}></div>
      <div className={styles.text}>
        {" "}
        &copy; 2024 Hover.com. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
