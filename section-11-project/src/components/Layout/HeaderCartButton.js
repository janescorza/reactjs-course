import React , {useContext} from "react";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContext from '../../store/cart-context';


const HeaderCartButton = (props) => {


  const cartContext = useContext(CartContext);//Header button component will be RE-evaluated whenever the context is updated

  const numberOfCartItems = cartContext.items.reduce((total, item) => {return total + item.amount},0)//<<<<<<<<<<<<<------------------
    
  return (
    <button className={styles.button} onClick={props.onShowCart}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>
        {cartContext.totalAmount}
      </span>
    </button>
  );
};

export default HeaderCartButton;
