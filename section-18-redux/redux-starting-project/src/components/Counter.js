import classes from "./Counter.module.css";
import { useSelector, useDispatch, connect } from "react-redux";
import store, { reducerValues } from "../store/index";
import { Component } from "react";

// const Counter = () => {
//   console.log(reducerValues);
//   const toggleCounterHandler = () => {};
//   const counter = useSelector(state => state.counter)
//   const dispatch = useDispatch();

//   const incrementHandler = () =>{
//     dispatch({type: reducerValues.INCREMENT})
//   }

//   const decrementHandler = () =>{
//     dispatch({type: reducerValues.DECREMENT})
//   }
//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{counter}</div>
//       <div>
//         <button onClick={incrementHandler}>Increment</button>
//         <button onClick={decrementHandler}>Decrement</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

class Counter extends Component {
  incrementHandler() {
    console.log(this.props);
    this.props.increment();
  }
  decrementHandler() {
    this.props.decrement();
  }
  toggleCounterHandler() {}

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: reducerValues.INCREMENT }),
    decrement: () => dispatch({ type: reducerValues.DECREMENT }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// export default Counter;
