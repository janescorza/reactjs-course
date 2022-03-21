import { useState } from "react";
import useForInput from "../hooks/use-forinput";

const BasicForm = (props) => {
  const {
    
      value: enteredName,
      isValid: nameIsValid,
      hasError: nameHasError,
      valueChangeHandler: nameChangeHandler,
      valueBlurHandler: nameBlurHandler,
      reset: resetName
    
   } = useForInput((value) => value.trim() !== "");

  // const [enteredName, setEnteredName] = useState("");
  // const [nameIsTouched, setNameIsTouched] = useState(false);

  // const nameIsValid = enteredName.trim() !== "";
  // const nameHasError = !nameIsValid && nameIsTouched;

  //-------------------------
  const nameInputClassNames = nameHasError
    ? "form-control invalid"
    : "form-control";
  //-------------------------
  // const nameChangeHandler = (event) => {
  //   console.log("Name changed to: " + event.target.value);
  //   setEnteredName(event.target.value);
  // };
  // const nameBlurHandler = () => {
  //   setNameIsTouched(true);
  // };

  const validateForm = (event) => {
    event.preventDefault();
    // setNameIsTouched(true);

    if (nameHasError) {
      return;
    }
    console.log("The name is: " + enteredName);

    resetName();
    // setNameIsTouched(false);
    // setEnteredName("");
  };

  let formIsValid = false;
  if (nameIsValid) formIsValid = true;

  return (
    <form onSubmit={validateForm}>
      <div className="control-group">
        <div className={nameInputClassNames}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {nameHasError && <p>Name must not be empty</p>}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
