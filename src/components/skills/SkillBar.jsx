import React from "react";
import styles from "./SkillBar.module.css";
const SkillBar = ({ skill, proficiency, color, bgColor }) => {
  return (
    <div className={styles.container}>
      {" "}
      <div className={styles.skillContainer}>
        <div className={styles.skillLabel}>{skill}</div>
        <div className={styles.skillBar}>
          <div
            className={styles.skillFill}
            style={{
              width: `${proficiency}%`,
              color: `${color}`,
              backgroundColor: `${bgColor}`,
            }}
          >
            <p className={styles.para}> {proficiency}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
