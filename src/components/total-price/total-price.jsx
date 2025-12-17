import { memo } from "react";
import { Button } from "ui/button/button";

import styles from "./total-price.module.css";

export const TotalPrice = memo(({ price, onCheckout }) => (
  <div className={styles.priceSection}>
    <div className={styles.totalPrice}>
      <span>Total Price</span>
      <strong>${price.toLocaleString()}</strong>
    </div>
    <Button variant="primary" size="large" onClick={onCheckout}>
      Continue to Checkout
    </Button>
  </div>
));
