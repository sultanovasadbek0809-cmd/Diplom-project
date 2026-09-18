
import { useEffect, useState } from "react";
import styles from "./Londing.module.scss";

function Londing() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className={styles.londing}>
      <div className={styles.londing__content}>
        <div className={styles.londing__logo}>
          &lt;/&gt;
        </div>

        <h2 className={styles.londing__title}>
          Sultanov Asadbek
        </h2>

        <p className={styles.londing__text}>
          Front-end developer
        </p>

        <div className={styles.londing__loader}>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Londing;