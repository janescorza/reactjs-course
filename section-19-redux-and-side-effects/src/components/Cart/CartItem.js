import classes from './CartItem.module.css';
import {  useDispatch } from "react-redux";
import {cartItemsSliceActions} from "../../store/cartItems";
import { cartStatusSliceActions } from '../../store/cart';


const CartItem = (props) => {
  const { id, title, quantity, total, price } = props.item;
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(cartItemsSliceActions.addItem({id,title,price}));
     
    dispatch(cartStatusSliceActions.addItem(price));
  };
  const removeFromCartHandler = () => {
    dispatch(cartItemsSliceActions.removeItem(id));
    dispatch(cartStatusSliceActions.removeItem(price));
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeFromCartHandler}>-</button>
          <button onClick={addToCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
