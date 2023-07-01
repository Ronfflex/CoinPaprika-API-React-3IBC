import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>Bienvenue sur Mon Application</h1>
      <p className={styles.description}>
        Ceci est la page d'accueil de mon application.
      </p>
    </div>
  );
};

export default Home;
