import styles from "./resort-header.module.css";

export const ResortHeader = ({ resort }) => (
  <div className={styles.header} style={{ backgroundImage: `url(${resort.image})` }}>
    <div className={styles.overlay}>
      <h1 className={styles.name}>{resort.name}</h1>
      <p className={styles.description}>{resort.description}</p>
    </div>
  </div>
);
