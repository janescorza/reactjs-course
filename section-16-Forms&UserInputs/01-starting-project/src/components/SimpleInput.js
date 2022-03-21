import {useState } from "react";

const SimpleInput = (props) => {
  // const namedInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  //This will rexecute every time a new value is entred so ti always has the latest value
  const enteredNameIsValid = enteredName.trim() !=='';
  const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched;


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
