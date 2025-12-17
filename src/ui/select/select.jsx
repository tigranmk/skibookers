import React from "react";
import styles from "./select.module.css";

export const Select = ({
  label,
  options,
  value,
  onChange,
  name,
  id,
  disabled = false,
  required = false,
  style,
  ...rest
}) => (
  <div className={styles.selectContainer} style={style}>
    {label && (
      <label className={styles.selectLabel} htmlFor={id || name}>
        {label}
      </label>
    )}
    <select
      className={styles.select}
      value={value}
      onChange={onChange}
      name={name}
      id={id || name}
      disabled={disabled}
      required={required}
      {...rest}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
);
