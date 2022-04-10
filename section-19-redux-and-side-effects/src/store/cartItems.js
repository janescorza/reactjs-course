import { createSlice } from "@reduxjs/toolkit";

const initialCartItems = {
  products: [],
  totalProducts: 0,
  changed: false,
};
const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState: initialCartItems,
  reducers: {
    replaceCart(state, action) {
      state.totalProducts = action.payload.totalProducts || 0;
      state.products = action.payload.products || [];
    },
    addItem(state, action) {
      const productIndex = state.products.findIndex(
        (prod) => prod.id === action.payload.id
      );
      state.changed = true;
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
      state.changed = true;
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

export const cartItemsSliceActions = cartItemsSlice.actions;
export default cartItemsSlice.reducer;
