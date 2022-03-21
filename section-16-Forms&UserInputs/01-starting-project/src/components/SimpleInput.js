import { useRef, useState } from "react";

const SimpleInput = (props) => {
  // const namedInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouced, setEnteredNameTouched] = useState(false);

  const validateName = () => {
    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);
  };

  const userNameInputBlurHandler = (event) => {
    console.log("firing on blur");
    validateName();
  };

  const userNameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    if (event.target.value.trim() !== "") {
      setEnteredNameIsValid(true);
    }
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    console.log("firing submission handler");

    validateName();
    console.log(enteredName);
    // console.log("value via ref is: ", namedInputRef.current.value);
    // namedInputRef.current.value = '';//Directly manipulating the DOM, don't do it.
    setEnteredName("");
  };

  const nameInputIsInValid = enteredNameTouced && !enteredNameIsValid;
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
          value={enteredName}
          onBlur={userNameInputBlurHandler}
          onChange={userNameInputChangeHandler}
          // ref={namedInputRef}
        />
        {nameInputIsInValid && (
          <p className="error-text">Name must not be empty!</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

// import React, { useEffect, useRef } from react;

// const MultipleInput = ({ firstName, lastName, Email }) => {
//   const inputRef = useRef({});
//   useEffect(() => {
//     inputRef.current['first_name'].focus()
//     inputRef.current['first_name'].value = firstName;
//     inputRef.current['last_name'].value = lastName;
//     inputRef.current['email'].value = Email;
//   }, []);
//   console.log("Rendering...");
//   return(
//       <form onSubmit={() => {/* inputRef.current.value */}}>
//         <input ref={el => inputRef.current['first_name'] = el} placeholder='First Name'></input>
//         <input ref={el => inputRef.current['last_name'] = el} placeholder='Last Name'></input>
//         <input ref={el => inputRef.current['email'] = el}  placeholder='Email'></input>
//       </form>
//   );
// }

// export default MultipleInput;
