import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";
import Modal from "../UI/Modal";





const Cart = (props) => {
  const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
      amount: 1,
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
      amount: 2,
    },
  ];


  const total = 13;
  const totalformatted = `${total} €`;
  const cartItems = DUMMY_MEALS.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      price={item.price}
      amount={item.amount}
    />
  ));
  return (
    // <div className={props.className}>
    <Modal onCancel={props.onCancel}>
          <ul className={styles["cart-items"]}>{cartItems}</ul>
          <div className={styles.total}>
            <span>Total amount</span>
            <span>{totalformatted}</span>
          </div>
          <div className={styles.actions}>
            <button className={styles["button--alt"]} onClick={props.onCancel}>Close</button>
            <button className={styles.button}>Order</button>
          </div>
    </Modal>
  );
};

export default Cart;
