const redux = require("redux");
export const reducerValues = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  INCREASE: "increase",
};

const reducerFunction = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case reducerValues.INCREMENT:
      return { counter: state.counter + 1 };
    case reducerValues.INCREASE:
      return { counter: state.counter + action.amount };
    case reducerValues.DECREMENT:
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

const store = redux.createStore(reducerFunction);

export default store;
