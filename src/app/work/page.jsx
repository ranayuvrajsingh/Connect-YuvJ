import React from "react";
import styles from "./work.module.css";
import Link from "next/link";

const Work = () => {
  // const data = [
  //   {
  //     ProjectName: "IShowSpeed",
  //     Img: "/iShowSpeed.png",
  //     Link: "https://ishowspeed-ten.vercel.app/?limit=20",
  //   },
  //   {
  //     ProjectName: "E-Commerce DashBoard",
  //     Img: "/Ecommerce Dashboard.png",
  //     Link: "https://ecommercebyyuvj.netlify.app/",
  //   },
  //   {
  //     ProjectName: "Apple-vision Clone",
  //     Img: "/Apple-vision Clone.png",
  //     Link: "https://apple-vision-pro-clone.vercel.app/",
  //   },
  // ];

  return (
    <>
      <div className={styles.imgContainer}>
        <div className={`${styles["div"]} ${styles["content-overlay"]}`}>
          <h1 className={styles.text}>Stellar Styles</h1>
          <Link href="https://stellarstyles.netlify.app/" target={"_blank"}>
            {" "}
            <img className={styles.img3} src="/Ecoom.jpg" alt="Image" />
          </Link>
          <div
            className={`${styles["content-details"]} ${styles["fadeIn-top"]} ${styles["fadeIn-right"]}`}
          ></div>
        </div>
        <div className={`${styles["div"]} ${styles["content-overlay"]}`}>
          <h1 className={styles.text}>CityScope Media Light Mode</h1>
          <Link href="https://www.cityscope.media/" target={"_blank"}>
            {" "}
            <img
              className={styles.img3}
              src="/Cityscopelight.png"
              alt="Image"
            />
          </Link>
          <div
            className={`${styles["content-details"]} ${styles["fadeIn-top"]} ${styles["fadeIn-right"]}`}
          ></div>
        </div>
        <div className={`${styles["div"]} ${styles["content-overlay"]}`}>
          <h1 className={styles.text}>CityScope Media Dark Mode</h1>
          <Link href="https://www.cityscope.media/" target={"_blank"}>
            {" "}
            <img className={styles.img3} src="/Cityscope.png" alt="Image" />
          </Link>
          <div
            className={`${styles["content-details"]} ${styles["fadeIn-top"]} ${styles["fadeIn-right"]}`}
          ></div>
        </div>
        <div className={`${styles["div"]} ${styles["content-overlay"]}`}>
          <h1 className={styles.text}>I Show Speed</h1>
          <Link
            href="https://ishowspeed-ten.vercel.app/?limit=20"
            target={"_blank"}
          >
            {" "}
            <img className={styles.img1} src="/iShowSpeed.png" alt="Image" />
          </Link>
          <div
            className={`${styles["content-details"]} ${styles["fadeIn-top"]} ${styles["fadeIn-right"]}`}
          ></div>
        </div>
        <div className={`${styles["div"]} ${styles["content-overlay"]}`}>
          <h1 className={styles.text}>E-Commerce DashBoard</h1>
          <Link href="https://ecommercebyyuvj.netlify.app/" target={"_blank"}>
            {" "}
            <img
              className={styles.img2}
              src="/Ecommerce Dashboard.png"
              alt="Image"
            />
          </Link>
          <div
            className={`${styles["content-details"]} ${styles["fadeIn-top"]} ${styles["fadeIn-right"]}`}
          ></div>
        </div>
        <div className={`${styles["div"]} ${styles["content-overlay"]}`}>
          <h1 className={styles.text}>Apple Vision Clone</h1>
          <Link
            href="https://apple-vision-pro-clone.vercel.app/"
            target={"_blank"}
          >
            {" "}
            <img className={styles.img3} src="Apple Clone.png" alt="Image" />
          </Link>
          <div
            className={`${styles["content-details"]} ${styles["fadeIn-top"]} ${styles["fadeIn-right"]}`}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Work;
