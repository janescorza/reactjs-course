import {useRef, useState} from 'react';

const SimpleInput = (props) => {
   const [enteredName, setEnteredName] = useState('');
   
   const userNameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  }
  
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    console.log(enteredName);
     
   }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={userNameInputChangeHandler} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
