import clsx from "clsx";
import styles from "./button.module.css";

/**
 * Button component
 * @param {string} variant - "primary" | "secondary" | "danger"
 * @param {string} size - "small" | "medium" | "large"
 */

export const Button = ({
  variant = "primary",
  size = "medium",
  disabled = false,
  onClick,
  children,
  type = "button",
  style,
  ...rest
}) => {
  return (
    <button
      type={type}
      className={clsx(
        styles[`${variant}Btn`],
        styles[size]
      )}
      disabled={disabled}
      onClick={onClick}
      style={style}
      {...rest}
    >
      {children}
    </button>
  );
};