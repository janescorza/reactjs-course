import React, { Fragment } from "react";
import styles from "./MealItem.module.css";
import MealItemForm from './MealItemForm'

const MealItem = (props) => {
  const formatedPrice = `${props.price.toFixed(2)} €`
  const addToCartManager = (event) => {
    event.preventDefault();
    console.log("button pressed: ",event);
  }
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{formatedPrice}</div>
      </div>
      <div>
        <MealItemForm id ={props.id} onSubmit={addToCartManager}/>
      </div>
    </li>
  );
};

export default MealItem;
