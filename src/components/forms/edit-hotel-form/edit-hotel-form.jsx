import { useState } from "react";
import { hotelOptions } from "data/option-data";
import { Button } from "ui/button/button";
import { Select } from "ui/select/select";

import styles from "styles/form.module.css";

export const EditHotelForm = ({ hotel, onSave, onCancel }) => {
  const [hotelName, setHotelName] = useState(hotel.name);

  const selectedHotel = hotelOptions.find((h) => h.name === hotelName);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      name: selectedHotel.name,
      location: selectedHotel.location,
    });
  };

  const hotelOptionsForSelect = hotelOptions.map((h) => ({
    value: h.name,
    label: `${h.name} (${h.location}) (+$${h.price})`,
  }));

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Select
        label="Hotel"
        options={hotelOptionsForSelect}
        value={hotelName}
        onChange={(e) => setHotelName(e.target.value)}
        name="hotel"
        required
      />

      <div className={styles.actions}>
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" variant="primary">
          Save
        </Button>
      </div>
    </form>
  );
};
