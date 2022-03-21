import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
    console.log("time to switch");
  switch (action.type) {
    case "INPUT":
        console.log("The new value is: "+action.value);
      return { value: action.value, isTouched: state.isTouched };
    case "BLUR":
      return { ...state, isTouched: true };
    case "RESET":
      return { value: "", isTouched: false };
    default:
      return initialInputState;
  }
};

const useForInput = (validator) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );
  //   const [enteredValue, setEnteredValue] = useState("");
  //   const [valueIsTouched, setValueIsTouched] = useState(false);

  const valueIsValid = validator(inputState.value);
  const valueHasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
    // setEnteredValue(event.target.value);
  };
  const valueBlurHandler = () => {
    dispatch({ type: "BLUR" });
    // setValueIsTouched(true);
  };
  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError: valueHasError,
    valueChangeHandler,
    valueBlurHandler,
    reset,
  };
};

export default useForInput;
