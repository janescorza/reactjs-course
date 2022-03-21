import { useRef, useState } from "react";

const SimpleInput = (props) => {
  // const namedInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  const userNameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);
    console.log(enteredName);
    // console.log("value via ref is: ", namedInputRef.current.value);
    // namedInputRef.current.value = '';//Directly manipulating the DOM, don't do it.
    setEnteredName("");
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={userNameInputChangeHandler}
          // ref={namedInputRef}
        />
        {!enteredNameIsValid && <p className="error-text">Name must not be empty!</p>}
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
