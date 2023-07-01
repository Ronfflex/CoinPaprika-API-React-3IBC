import React from "react";
import styles from "./Footer.module.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className={styles.footer}>
        <p>Ceci est mon footer</p>
      </footer>
    );
  }
}

export default Footer;
