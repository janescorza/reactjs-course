import { createSlice } from "@reduxjs/toolkit";

const initialCartStatus = {
  totalProducts: 0,
  totalCost: 0,
  cartDisplayed: false
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
    }
  },
});
export const cartStatusSliceActions = cartStatusSlice.actions;
export default cartStatusSlice.reducer;
