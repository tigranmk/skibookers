import { memo } from "react"
import { Button } from "ui/button/button";

import {
  FiMapPin,
  FiHome,
  FiUser,
  FiCreditCard,
  FiTruck,
  FiShield,
  FiPlusCircle,
} from "react-icons/fi";
import { MdFlight } from "react-icons/md";

import styles from "./trip-card.module.css";

const ICONS = {
  resort: <FiMapPin />,
  hotel: <FiHome />,
  room: <FiUser />,
  skipass: <FiCreditCard />,
  flight: <MdFlight />,
  transfer: <FiTruck />,
  insurance: <FiShield />,
  addons: <FiPlusCircle />,
};

export const TripCard = memo(
  ({ type, title, summary, onEdit, isDisabled, children }) => (
    <div className={styles.card}>
      <div className={styles.cardIcon}>{ICONS[type]}</div>
      <div className={styles.cardContent}>
        <div className={styles.cardTitle}>{title}</div>
        <div className={styles.cardSummary}>{summary}</div>
        {children}
      </div>
      <div className={styles.cardActions}>
        {onEdit && (
          <Button onClick={onEdit} disabled={isDisabled} aria-label="Edit">
            Edit
          </Button>
        )}
      </div>
    </div>
  )
);
