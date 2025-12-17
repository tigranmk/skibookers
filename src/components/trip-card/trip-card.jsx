import { Button } from "../button/button";

import styles from "./trip-card.module.css";

export const TripCard = ({ title, summary, onEdit, children, isDisabled }) => (
  <div className={styles.card}>
    <div className={styles.header}>
      <h2>{title}</h2>
      {onEdit && (
        <Button variant="edit" onClick={onEdit} disabled={isDisabled}>
          Edit
        </Button>
      )}
    </div>
    <div className={styles.summary}>{summary}</div>
    {children}
  </div>
);
