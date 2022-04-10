import { createSlice } from "@reduxjs/toolkit";
import { cartStatusSliceActions } from "./cart";

const initialCartItems = {
  products: [],
  totalProducts: 0,
};
const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState: initialCartItems,
  reducers: {
    addItem(state, action) {
      const productIndex = state.products.findIndex(
        (prod) => prod.id === action.payload.id
      );
      state.totalProducts++;
      if (productIndex !== -1) {
        state.products[productIndex].quantity++;
        //in list
        state.products[productIndex].total +=
          state.products[productIndex].price;
      } else {
        //Not in list
        state.products.push({
          id: action.payload.id,
          title: action.payload.title,
          price: action.payload.price,
          quantity: 1,
          total: action.payload.price,
        });
      }
    },
    removeItem(state, action) {
      const productIndex = state.products.findIndex(
        (prod) => prod.id === action.payload
      );
      --state.totalProducts;
      if (state.products[productIndex].quantity > 1) {
        //substract one
        state.products[productIndex].quantity--;
        state.products[productIndex].total -=
          state.products[productIndex].price;
      } else {
        //delete item from array
        state.products = state.products.filter(
          (prod) => prod.id !== state.products[productIndex].id
        );
      }
    },
  },
});

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
        { method: "PUT", body: JSON.stringify(cart) }
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

export const cartItemsSliceActions = cartItemsSlice.actions;
export default cartItemsSlice.reducer;
