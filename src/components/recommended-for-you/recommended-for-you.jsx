import styles from "./recommended-for-you.module.css";

export const RecommendedForYou = ({ logic }) => (
  <div className={styles.recommendation}>
    <h3>Recommended for You</h3>
    <p>Based on your preferences: <strong>{logic}</strong></p>
  </div>
);
