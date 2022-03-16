import React, { useContext } from "react";
import ReactDOM from "react-dom";
import styles from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const selected_meals = cartContext.items;

  const total = +cartContext.totalAmount;
  const totalformatted = `${total.toFixed(2)} €`;
  const hasItems = cartContext.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartContext.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    const cartItem = { ...item, amount: 1 };
    cartContext.addItem(cartItem);
  };

  const cartItems = selected_meals.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      price={item.price}
      amount={item.amount}
      onAdd={cartItemAddHandler.bind(null, item)}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
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
        <button className={styles["button--alt"]} onClick={props.onCancel}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
