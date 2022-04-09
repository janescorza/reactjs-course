import classes from "./Counter.module.css";
import { useSelector, useDispatch, connect } from "react-redux";
import store, { reducerValues, counterActions } from "../store/index";
import { Component } from "react";

const Counter = () => {
  const counter = useSelector(state => state.counter)
  const showCounter = useSelector(state => state.showCounter)
  const dispatch = useDispatch();

  const incrementHandler = () =>{
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
