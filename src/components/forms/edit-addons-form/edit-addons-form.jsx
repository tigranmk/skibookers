import { useState } from "react";
import { allAddons } from "data/option-data";
import { Button } from "ui/button/button";

import styles from "styles/form.module.css";

export const EditAddonsForm = ({ addons, onSave, onCancel }) => {
  const [selectedAddons, setSelectedAddons] = useState(addons);

  const handleToggle = (addon) => {
    setSelectedAddons((prev) =>
      prev.includes(addon) ? prev.filter((a) => a !== addon) : [...prev, addon]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(selectedAddons);
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <label>Add-ons</label>
      <div>
        {allAddons.map((addon) => (
          <label key={addon} style={{ display: "block", marginBottom: "6px" }}>
            <input
              type="checkbox"
              checked={selectedAddons.includes(addon)}
              onChange={() => handleToggle(addon)}
            />
            {addon}
          </label>
        ))}
      </div>
      <div className={styles.actions}>
        <Button type="button" onClick={onCancel} variant="secondary">
          Cancel
        </Button>
        <Button type="submit" variant="primary">
          Save
        </Button>
      </div>
    </form>
  );
};
