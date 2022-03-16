import React from "react";
import styles from "./CartItem.module.css";

const CartItem = (props) => {
    const formattedPrice = `${props.price} €`;
    const formattedAmount = `x ${props.amount}`;
  return (
    <li className={styles["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={styles.summary}>
            <div className={styles.price}>{formattedPrice}</div>
            <div className={styles.amount}>{formattedAmount}</div>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
