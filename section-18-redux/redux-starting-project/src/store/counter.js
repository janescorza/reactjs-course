// import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const redux = require("redux");

const initialCounterState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
        console.log("🚀 ~ file: index.js ~ line 34 ~ increment ~ state", state)
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
      console.log("🚀 ~ file: index.js ~ line 44 ~ toggle ~ state.showCounter", state.showCounter)
    },
  },
});
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
