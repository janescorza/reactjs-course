import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext); //Header button component will be RE-evaluated whenever the context is updated
  const [btnIsHighlighted,setBtnIsHighlighted] =useState(false);

  const {items} = cartContext;
  const numberOfCartItems = items.reduce((total, item) => {
    return total + item.amount;
  }, 0); //<<<<<<<<<<<<<------------------

  let btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ""}`;


   
  useEffect(() => {
    if(cartContext.items.length === 0) return;
    setBtnIsHighlighted(true)
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    },300)

    return () => {
      clearTimeout(timer);
    }
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onShowCart}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
