import classes from "./CartButton.module.css";
import { useSelector, useDispatch } from "react-redux";
import { cartStatusSliceActions } from '../../store/cart';


const CartButton = (props) => {
  // const cartStatus = useSelector((state) => state.cartStatus);
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();
  const toggleCartHandler = () => dispatch(cartStatusSliceActions.toogleCart());

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItems.totalProducts}</span>
    </button>
  );
};

export default CartButton;
