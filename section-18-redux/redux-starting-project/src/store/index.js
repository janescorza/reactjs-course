// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter';
import authReducer from './auth';

const redux = require("redux");


const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: authReducer,
  },
});

export default store;
