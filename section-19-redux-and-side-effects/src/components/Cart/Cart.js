import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cart = useSelector((state) => state.cartItems);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cart.products.map((product) => (
          <CartItem
            key = {product.id}
            item={{
              id: product.id,
              title: product.title,
              quantity: product.quantity,
              total: product.total,
              price: product.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
