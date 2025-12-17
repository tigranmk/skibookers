import React, { useState } from "react";
import { roomOptions } from "data/option-data";
import { Button } from "ui/button/button";
import { Select } from "ui/select/select";

import styles from "styles/form.module.css";

export const EditRoomForm = ({ room, onSave, onCancel }) => {
  const [selectedRoom, setSelectedRoom] = useState(room);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(selectedRoom);
  };

  const roomOptionsForSelect = roomOptions.map((r) => ({
    value: r.name,
    label: `${r.name}${
      r.price !== 0 ? (r.price > 0 ? ` (+${r.price})` : ` (${r.price})`) : ""
    }`,
  }));

  const handleChange = (e) => {
    setSelectedRoom(e.target.value);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Select
        label="Room"
        options={roomOptionsForSelect}
        value={selectedRoom}
        onChange={handleChange}
        name="room"
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
