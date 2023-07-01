import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

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
          Top crypto volume 24h
        </Link>
        <Link className={styles.link} to="/top-crypto-marketCap">
          Top crypto marketCap
        </Link>
      </div>
    </nav>
  );
};

export default Header;
