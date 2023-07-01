import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <h1 className={styles.title}>À propos</h1>
      <p className={styles.description}>
        Ceci est la page À propos de mon application.
      </p>
    </div>
  );
};

export default About;
