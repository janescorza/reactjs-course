import React, { Fragment } from "react";
import styles from "./MealItem.module.css";

const MealItem = (props) => {
  return (
    <li className={styles.meal}>
      <section>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{props.price}</div>
      </section>
      <section>
        <div>
          <span>
            <h3>Amount</h3>
            <input type="number" name="amount"></input>
          </span>
        </div>
        <button>+Add</button>
      </section>
    </li>
  );
};

export default MealItem;
