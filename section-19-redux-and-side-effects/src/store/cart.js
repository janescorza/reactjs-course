import { createSlice } from "@reduxjs/toolkit";

const initialCartStatus = {
  totalProducts: 0,
  totalCost: 0,
  cartDisplayed: false,
  cartNotification: null
};
const cartStatusSlice = createSlice({
  name: "cartStatus",
  initialState: initialCartStatus,
  reducers: {
    addItem(state, action) {
        state.totalProducts++;
        state.totalCost += action.payload;
    },
    removeItem(state, action) {
        state.totalProducts--;
        state.totalCost -= action.payload;
    },
    toogleCart(state){
        state.cartDisplayed = !state.cartDisplayed;
    },
    showNotification(state, action){
      state.cartNotification = {
        status: action.payload.status,
        title: action.payload.title,
        message:action.payload.message
      }
    }
  },
});
export const cartStatusSliceActions = cartStatusSlice.actions;
export default cartStatusSlice.reducer;
