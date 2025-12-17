import { memo } from "react";
import { Button } from "ui/button/button";

import styles from "./ai-recommendation.module.css";

export const AiRecommendation = memo(({ onAiRecommendation }) => {
  return (
    <div className={styles.aiBanner}>
      <span role="img" aria-label="sparkles">
        ✨
      </span>
      AI recommends: Upgrade to Premium Skipass (+$89) for access to black
      diamond zones
      <Button size="small" variant="secondary" onClick={onAiRecommendation}>
        Add →
      </Button>
    </div>
  );
});
