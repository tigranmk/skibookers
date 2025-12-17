import { useState } from "react";
import { resortOptions } from "data/option-data";
import { Button } from "ui/button/button";
import { Select } from "ui/select/select";

import styles from "styles/form.module.css";

export const EditResortForm = ({ resort, onSave, onCancel }) => {
  const [selectedResort, setSelectedResort] = useState(resort.name);

  const handleSave = () => {
    const resortObj = resortOptions.find((r) => r.name === selectedResort);
    onSave(resortObj);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave();
  };

  const handleChange = (e) => {
    setSelectedResort(e.target.value);
  };

  const resortOptionsForSelect = resortOptions.map((r) => ({
    value: r.name,
    label: `${r.name} (${r.description})`,
  }));

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Select
        label="Resort"
        options={resortOptionsForSelect}
        value={selectedResort}
        onChange={handleChange}
        name="resort"
        required
      />
      <div className={styles.actions}>
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </div>
    </form>
  );
};
