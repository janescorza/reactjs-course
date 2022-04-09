// import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const redux = require("redux");
const initialState = {
  counter: 0,
  showCounter: true,
};

createSlice({
  name: "counter",
  initialState, 
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.amount;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const reducerValues = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  INCREASE: "increase",
  TOGGLE: "toggle",
};

const reducerFunction = (state = initialState, action) => {
  switch (action.type) {
    case reducerValues.INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case reducerValues.INCREASE:
      return { ...state, counter: state.counter + action.amount };
    case reducerValues.DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case reducerValues.TOGGLE:
      return { ...state, showCounter: !state.showCounter };
    default:
      return state;
  }
};

const store = redux.createStore(reducerFunction);

export default store;
