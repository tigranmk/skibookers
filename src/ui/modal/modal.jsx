import { Button } from "ui/button/button";
import styles from "./modal.module.css";
import { FiX } from "react-icons/fi";

export const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>{title}</h2>
          <Button variant="secondary" size="small" onClick={onClose}>
            <FiX size={24} color="#888" />
          </Button>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
