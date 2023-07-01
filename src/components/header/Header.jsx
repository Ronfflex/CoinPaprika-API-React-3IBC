import React from "react";
import { Link } from "react-router-dom"; // Si vous utilisez react-router pour la navigation
import styles from "./Header.module.css"; // Assurez-vous que le chemin est correct

const Header = () => {
  return (
    <nav className={styles.header}>
      <h1 className={styles.title}>Mon Application</h1>
      <div className={styles["nav-links"]}>
        <Link className={styles.link} to="/">
          Accueil
        </Link>
        <Link className={styles.link} to="/about">
          À propos
        </Link>
        <Link className={styles.link} to="/list">
          Liste crypto
        </Link>
        <Link className={styles.link} to="/top-crypto-volume24">
          Top Crypto Volume
        </Link>
        <Link className={styles.link} to="/top-marketCap">
          Top Crypto Volume
        </Link>
      </div>
    </nav>
  );
};

export default Header;
