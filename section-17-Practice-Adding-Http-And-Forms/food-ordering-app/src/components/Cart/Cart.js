import React, { useContext, useState } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CheckOut from "./CheckOut";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [checkOutState, setCheckOutState] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const [error, setError] = useState("");

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const emptyCartHandler = (item) => {
    cartCtx.emptyCart();
  };

  const orderHandler = () => {
    setCheckOutState((prevState) => !prevState);
  };

  const submitForm = async (checkoutData) => {
    setIsSubmitting(true);
    console.log("The data to upload is: ", checkoutData);
    try {
      const response = await fetch(
        "https://react-js-course-b4b3c-default-rtdb.firebaseio.com/orders.json",
        {
          method: "POST",
          body: JSON.stringify({
            user: checkoutData,
            orderedItems: cartCtx.items,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Request failed!");
      } else {
        emptyCartHandler();
        setDidSubmit(true);
      }
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsSubmitting(false);
    setCheckOutState(false);
    console.log("hello");
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {checkOutState && (
        <CheckOut onSubmit={submitForm} onCancel={props.onClose} />
      )}

      <div className={classes.actions}>
        {!checkOutState && (
          <button className={classes["button--alt"]} onClick={props.onClose}>
            Close
          </button>
        )}
        {!checkOutState && hasItems && (
          <button
            type="button"
            className={classes.button}
            onClick={orderHandler}
          >
            Order
          </button>
        )}
      </div>
    </React.Fragment>
  );

  const isSubmittingModalContent = <p>Senging order data...</p>;

  const didSubmitModalContent = (
    <React.Fragment>
      <p>Succesfully sent the order!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      {error && <p>{error}</p>}
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
