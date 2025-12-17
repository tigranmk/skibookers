import { useState } from "react";
import { airlines, classes } from "data/option-data";
import { defaultFlight } from "constants/defaults";
import { Button } from "ui/button/button";
import { Select } from "ui/select/select";
import { mapDataToOptions } from "utils/map-data-to-options";

import styles from "styles/form.module.css";

export const EditFlightForm = ({ flight, onSave, onCancel }) => {
  const [form, setForm] = useState(flight || defaultFlight);

  const classOptions = mapDataToOptions(classes);
  const airlineOptions = mapDataToOptions(airlines);

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
        label="Airline"
        options={airlineOptions}
        value={form.airline}
        onChange={handleChange}
        name="airline"
        required
      />

      <Select
        label="Class"
        options={classOptions}
        value={form.class}
        onChange={handleChange}
        name="class"
        required
      />

      <label>
        Date
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
        />
      </label>

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
