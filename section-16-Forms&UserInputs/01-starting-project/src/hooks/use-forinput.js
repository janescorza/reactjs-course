import { useState } from "react";

const useForInput = (validator) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [valueIsTouched, setValueIsTouched] = useState(false);

  const valueIsValid = validator(enteredValue);
  const valueHasError = !valueIsValid && valueIsTouched;

  const valueChangeHandler = (event) => {
    console.log("Name changed to: " + event.target.value);
    setEnteredValue(event.target.value);
  };
  const valueBlurHandler = () => {
    setValueIsTouched(true);
  };
  const reset = () => {
    setValueIsTouched(false);
    setEnteredValue("");
  }

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError: valueHasError,
    valueChangeHandler,
    valueBlurHandler,
    reset
  };
};

export default useForInput;
