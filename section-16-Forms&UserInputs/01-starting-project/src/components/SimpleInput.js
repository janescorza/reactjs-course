import { useState, useEffect } from "react";
import useInput from "../hooks/use-input";

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
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valeuChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameInputReset,
  } = useInput(value => value.trim() !== '');

  //Email Address
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valeuChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: emailInputReset,
  } = useInput(value => value.trim() !== "" && validateEmail(value));

 
  //Full form validation
  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();


    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }
    console.log('name: '+enteredName +' email: '+ enteredEmail);
    //name reset
    nameInputReset();

    //email reset
    emailInputReset();

  };

  //name class modification
  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  //email class modification
  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
          // ref={namedInputRef}
        />
        {nameInputHasError && (
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
        {emailInputHasError && (
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
