import React from "react";
import styles from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";
import Modal from '../UI/Modal';

const Cart = (props) => {

    const DUMMY_MEALS = [
        {
          id: 'm1',
          name: 'Sushi',
          description: 'Finest fish and veggies',
          price: 22.99,
          amount: 1
        },
        {
          id: 'm2',
          name: 'Schnitzel',
          description: 'A german specialty!',
          price: 16.5,
          amount: 2
        },
        {
          id: 'm3',
          name: 'Barbecue Burger',
          description: 'American, raw, meaty',
          price: 12.99,
          amount: 3
        },
        {
          id: 'm4',
          name: 'Green Bowl',
          description: 'Healthy...and green...',
          price: 18.99,
          amount: 5
        },
      ];

      const you_clicked = () => {
          console.log("yay you clicked");
      }


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
    <Modal onClick={you_clicked}>
      <ul className={styles["cart-items"]}>
          {cartItems}
          </ul>
      <div className={styles.total}>
        <h2>Total amount</h2>
        <h2>{totalformatted}</h2>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
