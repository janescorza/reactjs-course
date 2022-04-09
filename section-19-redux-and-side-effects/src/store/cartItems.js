import { createSlice } from "@reduxjs/toolkit";

const initialCartItems = {
  products: [],
};
const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState: initialCartItems,
  reducers: {
    addItem(state, action) {
        
              console.log("I'm here!");
              console.log(
                "🚀 ~ file: cartItems.js ~ line 14 ~ addItem ~ action.payload",
                action.payload
              );
        state.products.push({
            id:action.payload.id,
            title:action.payload.title,
            price:action.payload.price,
            quantity:1,
            total: action.payload.price
        })
    },
    removeItem(state, action) {},
  },
});
export const cartItemsSliceActions = cartItemsSlice.actions;
export default cartItemsSlice.reducer;
