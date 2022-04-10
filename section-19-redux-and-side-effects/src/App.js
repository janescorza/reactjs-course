import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { cartStatusSliceActions } from "./store/cart";
import { sendCartData } from "./store/cartItems";
import { Fragment, useEffect } from "react";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const cartStatus = useSelector((state) => state.cartStatus);
  const cart = useSelector((state) => state.cartItems);
  const notification = useSelector(
    (state) => state.cartStatus.cartNotification
  );
  const dispatch = useDispatch();

  useEffect(() => {

    if(isInitial){
      isInitial=false;
      return;
    }

    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
      <Layout>
        {cartStatus.cartDisplayed && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
