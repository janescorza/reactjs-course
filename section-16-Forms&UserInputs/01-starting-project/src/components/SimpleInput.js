import {useState, useEffect } from "react";

const SimpleInput = (props) => {
  // const namedInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  //This will rexecute every time a new value is entred so ti always has the latest value
  const enteredNameIsValid = enteredName.trim() !=='';
  const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched;

  useEffect(() => {
    if (enteredNameIsValid){
      setFormIsValid(true);
    }else{
      setFormIsValid(false);
    }
  },[enteredNameIsValid])


  const userNameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const userNameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };


  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if(!enteredNameIsValid){
      return;
    }
    console.log(enteredName);
    
    setEnteredName("");
    setEnteredNameTouched(false);
  };

  const nameInputClasses = nameInputIsInValid
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
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

