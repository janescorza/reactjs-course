import classes from "./Counter.module.css";
import { useSelector, useDispatch, connect } from "react-redux";
import store, { counterActions } from "../store/counter";
import { Component } from "react";

const Counter = () => {
  const counter = useSelector(state => state.counter.counter)
  const showCounter = useSelector(state => state.counter.showCounter)
  const dispatch = useDispatch();

  const incrementHandler = () =>{
    console.log("🚀 ~ file: Counter.js ~ line 13 ~ incrementHandler ~ counterActions", counterActions)
    dispatch(counterActions.increment());
    // dispatch({type: reducerValues.INCREMENT})
  }
  const incrementBy5Handler = () =>{
    dispatch(counterActions.increase(5))
  }

  const decrementHandler = () =>{
    dispatch(counterActions.decrement())
  }

  const toggleCounterHandler = () =>{
    dispatch(counterActions.toggle())
    console.log("🚀 ~ file: Counter.js ~ line 26 ~ toggleCounterHandler ~ counterActions.toggle()", counterActions.toggle())
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
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
