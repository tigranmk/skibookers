import clsx from "clsx";

import styles from "./button.module.css";

export const Button = ({
  variant = "edit",
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
        disabled && styles.disabledBtn
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
