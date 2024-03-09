// App.js
"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./data.module.css";

const QuoteComponent = () => {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        setAdvice(response.data.slip.advice);
      })
      .catch((e) => console.log(e));
  };

  // ("https://api.adviceslip.com/advice");
  return (
    <div className={styles.app}>
      <div className={styles.card}>
        <h1 className={styles.heading}>{advice}</h1>
        <button className={styles.button} onClick={fetchData}>
          <span>Give Me Advice</span>
        </button>
      </div>
    </div>
  );
};

export default QuoteComponent;
