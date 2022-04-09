const redux = require("redux");
export const reducerValues = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  INCREASE: "increase",
  TOGGLE: "toggle"
};

const reducerFunction = (state = { counter: 0, showCounter: true }, action) => {
  switch (action.type) {
    case reducerValues.INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case reducerValues.INCREASE:
      return { ...state, counter: state.counter + action.amount };
    case reducerValues.DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case reducerValues.TOGGLE:
    return {...state, showCounter: !state.showCounter}
    default:
      return state;
  }
};

const store = redux.createStore(reducerFunction);

export default store;
