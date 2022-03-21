import {useState} from 'react';

const BasicForm = (props) => {
  const [enteredName, setEnteredName] = useState('');
  // const [nameIsValid, setNameIsValid] = useState(false);
  const [nameIsTouched, setNameIsTouched] = useState(false);
  

  const nameIsValid = enteredName.trim() !== '';
  const nameHasError = !nameIsValid && nameIsTouched;

  const nameInputClassNames = namehasError ? 'form-control invalid' : 'form-control';

  return (
    <form>
      <div className='control-group'>
        <div className={nameInputClassNames}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' />
          {nameHasError && <p>Name must not be empty</p>}
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' />
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
