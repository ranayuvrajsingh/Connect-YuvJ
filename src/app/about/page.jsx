import React from "react";
import styles from "./about.module.css";
import Image from "next/image";
import Link from "next/link";
import SkillBar from "@/components/skills/SkillBar";
const about = () => {
  const skillsData = [
    // Frontend
    { skill: "HTML", proficiency: 90, color: "white", bgColor: "#2c3e50" },
    { skill: "CSS", proficiency: 85, color: "white", bgColor: "#34495e" },
    {
      skill: "JavaScript",
      proficiency: 80,
      color: "white",
      bgColor: "#f39c12",
    },
    { skill: "React", proficiency: 85, color: "white", bgColor: "#8e44ad" },

    // Backend
    { skill: "Node.js", proficiency: 80, color: "white", bgColor: "#27ae60" },
    {
      skill: "Express.js",
      proficiency: 75,
      color: "white",
      bgColor: "#3498db",
    },
    { skill: "MongoDB", proficiency: 85, color: "white", bgColor: "#f39c12" },

    // DSA
    {
      skill: "Data Structures",
      proficiency: 90,
      color: "white",
      bgColor: "#2c3e50",
    },
    {
      skill: "Algorithms",
      proficiency: 85,
      color: "white",
      bgColor: "#34495e",
    },

    // System Design
    {
      skill: "System Design",
      proficiency: 80,
      color: "white",
      bgColor: "#6c3483",
    },
    {
      skill: "Microservices",
      proficiency: 75,
      color: "white",
      bgColor: "#d35400",
    },
    {
      skill: "RESTful APIs",
      proficiency: 85,
      color: "white",
      bgColor: "#f39c12",
    },

    // ... (add more skills as needed)
  ];

  return (
    <div className={styles.infoContainer}>
      <div className={styles.textContainer}>
        {/* <h1 className={styles.nameh}>RanaYuvrajSingh</h1> */}
        <h2 className={styles.workh}>
          FULL STACK DEVELOPER || FRONTEND DEVELOPER
        </h2>
        <p className={styles.para}>
          Dedicated Full Stack Developer with 2 years of experience seeking an
          R&D Engineer position to contribute expertise in Formal Verification,
          Algorithm Design, and collaborative problem-solving.
        </p>

        <h2 className={styles.exp}>E X P E R I E N C E</h2>
        <div className={styles.liner}>
          <h3 className={styles.comp}>FULL STACK DEVELOPER | CITYSCOPE</h3>
          <Link href="https://www.cityscope.media/" target={"_blank"}>
            {" "}
            <Image src="/ChainLink.png" width={40} height={40} />
          </Link>
        </div>
        <p className={styles.para}>
          <ul>
            <li>
              Designed REST calls using React to streamline user interface
              performance.
            </li>
            <li>
              Led Full-Stack Development: Spearheaded startup website
              development, boosting user engagement by 75% with React and Redux
              Toolkit.
            </li>
            <li>
              Enhanced Code Quality: Implemented TypeScript, reducing errors by
              50% and ensuring top-tier performance.
            </li>
            <li>
              Optimized Backend: Engineered Node.js backend, resulting in a 60%
              faster server response time and 40% quicker website loading.
            </li>
            <li>
              Cross-Functional Teamwork: Collaborated with a 5-member team,
              aligning website functionality with strategic goals.
            </li>
            <li>
              Achieved High Performance: Website scored 90/100 on Google
              PageSpeed, ensuring rapid, responsive user experience.
            </li>
            <li>
              Collaborated with cross-functional teams to align website
              functionality with strategic goals. - Implemented innovative
              solutions, ensuring top-tier performance and quality of software.
            </li>
          </ul>
        </p>
        {/* {-------------} */}
        <h3 className={styles.comp}>JAVA FULL STACK DEVELOPER | STL</h3>
        {/* <Link href="https://www.cityscope.media/" target={"_blank"}>
          {" "}
          <Image src="/ChainLink.png" width={40} height={40} />
        </Link> */}
        <p className={styles.para}>
          <ul>
            <li>
              Database Mastery: Implemented robust MySQL database solutions,
              ensuring efficient storage and retrieval of data critical for
              seamless user experiences.
            </li>
            <li>
              Microservices Architecture: Utilized diverse microservices,
              reducing workload by an impressive 70%. Achieved a loosely coupled
              service structure for enhanced scalability and flexibility.
            </li>
            <li>
              Backend Excellence: Applied Java with Spring Boot to develop a
              responsive backend and RestFul APIs, optimizing work processes by
              nearly 50%. Proficient in crafting efficient and reliable
              server-side solutions.
            </li>
            <li>
              Security Innovation: Implemented JWT Token Web Security for both
              User and Admin logins, ensuring top-notch data protection and user
              authentication.
            </li>
            <li>
              Frontend Brilliance: Leveraged Angular alongside HTML, CSS, and
              JavaScript to create visually appealing and highly interactive
              user interfaces, enhancing user engagement.
            </li>
            <li>
              Tools Proficiency: Skilled in utilizing Hibernate, Git, DevOps,
              Docker, and Kubernetes, ensuring seamless integration and
              deployment processes.
            </li>
          </ul>
        </p>
        {/* {-------------} */}
        <h3 className={styles.comp}>SYSTEM ENGINEER INTERN | INFOSYS</h3>
        {/* <Link href="https://www.cityscope.media/" target={"_blank"}>
          {" "}
          <Image src="/ChainLink.png" width={40} height={40} />
        </Link> */}
        <p className={styles.para}>
          <ul>
            <li>
              Multi-Functional App: Developed a Template Generator for Collage,
              Advertisement, and Calendar templates, streamlining diverse
              creative needs into one application.
            </li>
            <li>
              Efficiency Enhancement: Integrated three features in a single app,
              saving users 75% effort, and time, boosting productivity
              significantly.
            </li>
            <li>
              Secure & User-Friendly: Implemented robust security for template
              visibility based on user roles, ensuring data confidentiality, and
              user satisfaction.
            </li>
          </ul>
        </p>
      </div>
      <div className={styles.sidecontainer}>
        <div className={styles.image}>
          <Image
            src="/logo.jpg"
            className={styles.heroImg}
            width={200}
            height={200}
          />
        </div>

        <div className={styles.skillsContainer}>
          {skillsData.map((skillData, index) => (
            <SkillBar key={index} {...skillData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default about;
