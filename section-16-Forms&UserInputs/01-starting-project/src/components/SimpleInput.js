import { useState, useEffect } from "react";
const validateEmail = (email) => {
  console.log("validating");
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const SimpleInput = (props) => {
  //Name
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  //Email Address
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  //Name validation
  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched;

  //Email validation
  const enteredEmailIsValid = enteredEmail.trim() !== "" &&  validateEmail(enteredEmail);
  const emailInputIsInValid = !enteredEmailIsValid && enteredEmailTouched;

  //Full form validation
  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }
  //Name state functions
  const userNameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const userNameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  //Email state functions
  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }
    console.log(enteredName + enteredEmail);
    //name reset
    setEnteredName("");
    setEnteredNameTouched(false);

    //email reset
    setEnteredEmail("");
    setEnteredEmailTouched(false);
  };

  //name class modification
  const nameInputClasses = nameInputIsInValid
    ? "form-control invalid"
    : "form-control";

  //email class modification
  const emailInputClasses = emailInputIsInValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={userNameInputChangeHandler}
          onBlur={userNameInputBlurHandler}
          value={enteredName}
          // ref={namedInputRef}
        />
        {nameInputIsInValid && (
          <p className="error-text">Name must not be empty!</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
          // ref={namedInputRef}
        />
        {emailInputIsInValid && (
          <p className="error-text">The entred email must be valid!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
