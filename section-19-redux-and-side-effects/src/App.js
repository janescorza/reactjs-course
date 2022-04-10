import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { cartStatusSliceActions } from "./store/cart";

import { fetchCartData, sendCartData } from "./store/cart-actions";

import { Fragment, useEffect } from "react";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cartStatus = useSelector((state) => state.cartStatus);
  const cart = useSelector((state) => state.cartItems);
  const notification = useSelector(
    (state) => state.cartStatus.cartNotification
  );

  useEffect(() => {
    //will only run on first exection as this is the main component and it only renders once
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      //Only send data if local change has happened
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cartStatus.cartDisplayed && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
