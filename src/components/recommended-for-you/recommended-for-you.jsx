import { memo } from "react";
import styles from "./recommended-for-you.module.css";

export const RecommendedForYou = memo(({ logic }) => {
  return (
    <div className={styles.recommendationReason}>
      <h3 className={styles.header}>Recommended for you</h3>
      <div className={styles.chips}>{logic}</div>
    </div>
  );
});
