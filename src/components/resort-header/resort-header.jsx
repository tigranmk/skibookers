import { useEffect, useState, memo } from "react";

import styles from "./resort-header.module.css";

export const ResortHeader = memo(({ resort }) => {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${styles.header} ${shrink ? styles.shrunk : ""}`}
      style={{ backgroundImage: `url(${resort.image})` }}
    >
      <div className={styles.overlay}>
        <h1 className={styles.name}>{resort.name}</h1>
        <p className={styles.description}>{resort.description}</p>
      </div>
    </div>
  );
});
