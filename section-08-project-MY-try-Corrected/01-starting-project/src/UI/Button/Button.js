import React from "react";
import styles from "./Button.module.css"; //To use css modules

const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      className={styles.button}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
