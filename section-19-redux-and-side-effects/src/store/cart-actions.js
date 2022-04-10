import { cartStatusSliceActions } from "./cart";
import { cartItemsSliceActions } from "./cartItems";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-js-course-b4b3c-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }
      const data = await response.json;
      return data;
    };
    try {
      const cartData = await fetchData();
      console.log(
        "🚀 ~ file: cart-actions.js ~ line 21 ~ return ~ cartData",
        cartData
      );
      dispatch(cartItemsSliceActions.replaceCart(cartData));
    } catch (error) {
      dispatch(
        cartStatusSliceActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Could not fetch cart data!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      cartStatusSliceActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending upated cart data",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-js-course-b4b3c-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            products: cart.products,
            totalProducts: cart.totalProducts,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };
    try {
      await sendRequest();

      dispatch(
        cartStatusSliceActions.showNotification({
          status: "success",
          title: "Success",
          message: "Data sent succesfully!",
        })
      );
    } catch (error) {
      dispatch(
        cartStatusSliceActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
