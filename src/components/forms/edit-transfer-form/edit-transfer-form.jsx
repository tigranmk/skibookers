import { useState } from "react";
import { transferTypes, airports } from "data/option-data";
import { Button } from "ui/button/button";
import { Select } from "ui/select/select";
import { mapDataToOptions } from "utils/map-data-to-options";

import styles from "styles/form.module.css";

export const EditTransferForm = ({ transfer, onSave, onCancel }) => {
  const [form, setForm] = useState({
    type: transfer.type,
    from: transfer.from,
    time: transfer.time,
  });

  const typeOptions = mapDataToOptions(transferTypes);
  const airportsOptions = mapDataToOptions(airports);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Select
        label="Type"
        options={typeOptions}
        value={form.type}
        onChange={handleChange}
        name="type"
        required
      />

      <Select
        label="From"
        options={airportsOptions}
        value={form.from}
        onChange={handleChange}
        name="from"
        required
      />

      <label>
        Time
        <input
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
        />
      </label>

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
