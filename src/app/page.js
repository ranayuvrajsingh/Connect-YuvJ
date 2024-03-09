"use client";
import Image from "next/image";
import styles from "./Page.module.css";
import Link from "next/link";
import dynamic from "next/dynamic";
const Typewriter = dynamic(() => import("@/components/typewriter/TypeWriter"));
const Page = () => {
  const name = "Rana Yuvraj Singh";
  const work = "Full Stack And Frontend Developer";

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.h1}>
          {" "}
          Hi ,I am{" "}
          <p className={styles.name}>
            <Typewriter
              text={name}
              loop={false} // Set loop to false
              typeSpeed={80}
              deleteSpeed={100000}
              delaySpeed={200}
            />
          </p>{" "}
        </h1>
        <h1 className={styles.work} style={{ width: "100%" }}>
          {" "}
          <Typewriter
            text={work}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={200}
          />
        </h1>

        <div className={styles.desc}>
          A Passionate MERN Stack Developer dedicated to transforming your ideas
          into stunning online realities. With a creative flair and expert
          knowledge of MongoDB, Express.js, React.js, Node.js, HTML, CSS,
          Bootstrap, and JavaScript, I craft web applications that captivate,
          inspire, and engage. Let’s embark on a journey to create a web
          experience that’s not just visually appealing but also user-friendly
          and responsive. Explore my portfolio and let’s collaborate to make
          your online presence shine!"
        </div>
        <div className={styles.buttons}>
          <Link
            href="https://drive.google.com/file/d/1yor_fmtDlowKZiMRG7H0m-rizJSLurT1/view"
            target="_blank"
          >
            {" "}
            <button className={styles.button}>Downlord Resume</button>
          </Link>

          <Link href="tel:+918445847591" target="_blank">
            {" "}
            <button className={styles.button}>Contact Me</button>
          </Link>
        </div>
        <div className={styles.brands}>
          <Link href="https://github.com/ranayuvrajsingh" target="_blank">
            <Image
              className={styles.brandImg1}
              src="/Github1.png"
              width={108}
              height={58}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/rana-yuvraj-singh-1a081418a/"
            target="_blank"
          >
            <Image
              className={styles.brandImg2}
              src="/linkdin1.png"
              width={108}
              height={58}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
