import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {reducerValues} from '../store/index';

const Counter = () => {
  console.log(reducerValues);
  const toggleCounterHandler = () => {};
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch();

  const incrementHandler = () =>{
    dispatch({type: reducerValues.INCREMENT})
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
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
