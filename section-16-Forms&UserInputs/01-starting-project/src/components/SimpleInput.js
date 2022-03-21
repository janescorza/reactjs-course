import {useRef, useState} from 'react';

const SimpleInput = (props) => {
  const namedInputRef = useRef();
   const [enteredName, setEnteredName] = useState('');
   
   const userNameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  }
  
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    console.log(enteredName);
    console.log("value via ref is: ", namedInputRef.current.value);
    namedInputRef.current.value = '';
     
   }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={userNameInputChangeHandler} ref={namedInputRef} />
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
