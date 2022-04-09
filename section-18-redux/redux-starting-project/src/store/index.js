// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const redux = require("redux");

const initialLoginState = {
  loggedIn: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState: initialLoginState,
  reducers: {
    login(state) {
      state.loggedIn = true;
    },
    logout(state) {
      state.loggedIn = false;
    },
  },
});

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

// export const reducerValues = {
//   INCREMENT: "increment",
//   DECREMENT: "decrement",
//   INCREASE: "increase",
//   TOGGLE: "toggle",

// };

// const reducerFunction = (state = initialState, action) => {
//   switch (action.type) {
//     case reducerValues.INCREMENT:
//       return { ...state, counter: state.counter + 1 };
//     case reducerValues.INCREASE:
//       return { ...state, counter: state.counter + action.amount };
//     case reducerValues.DECREMENT:
//       return { ...state, counter: state.counter - 1 };
//     case reducerValues.TOGGLE:
//       return { ...state, showCounter: !state.showCounter };
//     default:
//       return state;
//   }
// };

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    login: loginSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const loginActions = loginSlice.actions;
export default store;
