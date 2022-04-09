import classes from "./Counter.module.css";
import { useSelector, useDispatch, connect } from "react-redux";
import store, { reducerValues } from "../store/index";
import { Component } from "react";

const Counter = () => {
  const toggleCounterHandler = () => {};
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch();

  const incrementHandler = () =>{
    dispatch({type: reducerValues.INCREMENT})
  }
  const incrementBy5Handler = () =>{
    dispatch({type: reducerValues.INCREASE, amount: 5})
  }

  const decrementHandler = () =>{
    dispatch({type: reducerValues.DECREMENT})
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementBy5Handler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
