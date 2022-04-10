import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { cartStatusSliceActions } from "./store/cart";
import { Fragment, useEffect } from "react";
import Notification from "./components/UI/Notification";

function App() {
  const cartStatus = useSelector((state) => state.cartStatus);
  const cart = useSelector((state) => state.cartItems);
  const notification = useSelector(
    (state) => state.cartStatus.cartNotification
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        cartStatusSliceActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending upated cart data",
        })
      );
      const response = await fetch(
        "https://react-js-course-b4b3c-default-rtdb.firebaseio.com/cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
      // const responseData = await response.json();
      dispatch(
        cartStatusSliceActions.showNotification({
          status: "success",
          title: "Success",
          message: "Data sent succesfully!",
        })
      );
    };
    sendCartData().catch((error) => {
      dispatch(
        cartStatusSliceActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    });
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
