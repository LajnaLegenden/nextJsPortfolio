import React, { useEffect, useState } from "react";
import styles from "./../../styles/Home.module.css";
const name = "Linus Jansson";

export default function NameDisplay() {
  const [nameDisplay, setnameDisplay] = useState("");

  useEffect(() => {
    console.log(`initializing interval`);
    const interval = setInterval(() => {
      if (nameDisplay != name) {
        setnameDisplay(nameDisplay + name[nameDisplay.length]);
      } else {
        clearInterval(interval);
      }
    }, 150);
    return () => {
      clearInterval(interval);
    };
  }, [nameDisplay]);
  return (
    <div className={styles.nameDisplay}>
      <h2>
        Hello, my name is&nbsp;
        <span className={styles.name}><b>{nameDisplay}</b></span>
      </h2>
      <h3>I am a fullstack web developer</h3>
    </div>
  );
}
