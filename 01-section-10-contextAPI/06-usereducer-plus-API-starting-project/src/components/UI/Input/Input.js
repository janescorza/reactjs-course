import React from 'react';

import styles from './Input.module.css'

const Input = (props) => {

    return (
        <div
          className={`${styles.control} ${
            props.isValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor={props.name}>{props.displayName}</label>
          <input
            type={props.id}
            id={props.type}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onValidate}
          />
        </div>
    )
}

export default Input;