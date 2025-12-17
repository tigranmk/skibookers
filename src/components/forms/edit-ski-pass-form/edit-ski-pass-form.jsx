import { useState } from "react";
import { zoneMultiplier } from "data/option-data";
import { Button } from "ui/button/button";
import { Select } from "ui/select/select";
import { mapDataToOptions } from "utils/map-data-to-options";

import styles from "styles/form.module.css";

export const EditSkipassForm = ({ skipass, onSave, onCancel }) => {
  const [form, setForm] = useState({
    days: skipass.days,
    zone: skipass.zone,
    level: skipass.level,
  });

  const zoneOptions = mapDataToOptions(Object.keys(zoneMultiplier));

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        Days
        <input
          type="number"
          name="days"
          min="1"
          max="14"
          value={form.days}
          onChange={handleChange}
        />
      </label>

      <Select
        label="Zone"
        options={zoneOptions}
        value={form.zone}
        onChange={handleChange}
        name="zone"
        required
      />

      <Select
        label="Level"
        options={zoneOptions}
        value={form.level}
        onChange={handleChange}
        name="level"
        required
      />

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
