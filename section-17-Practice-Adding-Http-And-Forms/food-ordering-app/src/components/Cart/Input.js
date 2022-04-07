import React from "react";
import styles from "./Input.module.css";

function Input(props) {
  return (
    <section id={props.input.id} className={` ${styles.control} ${props.input.errormessage && styles.invalid} ${props.inp}`}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input id={props.input.id} {...props.input} />
      {props.input.errormessage && <p>{props.input.errormessage}</p>}
    </section>
  );
}

export default Input;
