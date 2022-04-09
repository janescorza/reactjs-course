const redux = require("redux");

const reducerFunction = (state = { counter: 0 }, action) => {
  console.log(action);
  switch (action.type) {
    case "increment":
      return {
        counter: state.counter + 1,
      };
    case "decrement":
      return {
        counter: state.counter - 1,
      };

    default:
      return { counter: state.counter };
  }
};

const store = redux.createStore(reducerFunction);

const counterSubscription = () => {
  const latestState = store.getState(); //<-- triggered when state chnges
  console.log(latestState);
};

store.subscribe(counterSubscription);

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
