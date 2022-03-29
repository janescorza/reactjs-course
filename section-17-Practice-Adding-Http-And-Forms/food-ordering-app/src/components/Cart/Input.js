import React from 'react'
import styles from './Input.module.css'

function Input(props) {
  return (
      <section id={props.input.id} className={styles.input}>
          <label htmlFor={props.input.id}>{props.label}</label>
              <input id={props.input.id} {...props.input}/>
      </section>
  )
}

export default Input