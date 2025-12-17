import { useState } from "react";
import { insuranceTypes } from "data/option-data";
import { Button } from "ui/button/button";
import { Select } from "ui/select/select";
import { mapDataToOptions } from "utils/map-data-to-options";

import styles from "styles/form.module.css";

export const EditInsuranceForm = ({ insurance, onSave, onCancel }) => {
  const [type, setType] = useState(insurance.type);

  const handleSave = () => {
    onSave({ type, included: type !== "None" });
  };

  const handleChange = (e) => {
    setType(e.target.value);
  };

  const insuranceOptions = mapDataToOptions(insuranceTypes);

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        handleSave();
      }}
    >
      <Select
        label="Insurance"
        options={insuranceOptions}
        value={type}
        onChange={handleChange}
        name="insurance"
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
