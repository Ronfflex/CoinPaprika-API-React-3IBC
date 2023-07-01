import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <h2>Page non trouvée</h2>
    </div>
  );
}

export default NotFound;
