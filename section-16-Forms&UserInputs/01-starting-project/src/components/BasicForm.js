import useForInput from "../hooks/use-forinput";

//----------------------------------------------------------------
//--Aux functions for validations
//----------------------------------------------------------------
const validateEmail = (email) => {
  console.log("validating");
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const isNotEmpty = (value) => value.trim() != "";
//----------------------------------------------------------------

const BasicForm = (props) => {
  //----------------------------------------------------------------
  //--Name form field
  //----------------------------------------------------------------
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useForInput(isNotEmpty);

  const nameInputClassNames = nameHasError
    ? "form-control invalid"
    : "form-control";
  //----------------------------------------------------------------
  //--Last Name form field
  //----------------------------------------------------------------
  const {
    value: enteredLastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useForInput(isNotEmpty);

  const lastNameInputClassNames = lastNameHasError
    ? "form-control invalid"
    : "form-control";

  //----------------------------------------------------------------
  //--Email form field
  //----------------------------------------------------------------
  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useForInput(validateEmail);

  const emailInputClassNames = emailHasError
    ? "form-control invalid"
    : "form-control";
  //----------------------------------------------------------------
  //--Full form validation
  //----------------------------------------------------------------

  const validateForm = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log(
      "The name is: " +
        enteredName +
        " the last name is: " +
        enteredLastName +
        " the email is: " +
        enteredEmail
    );
    //Resetting fields
    resetName();
    resetLastName();
    resetEmail();
  };

  let formIsValid = false;
  if (nameIsValid && lastNameIsValid && emailIsValid) formIsValid = true;
  //----------------------------------------------------------------

  return (
    <form onSubmit={validateForm}>
      <div className="control-group">
        <div className={nameInputClassNames}>
          <label htmlFor="name" className="required-field"  >First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
            
          />
          {nameHasError && <p className="error-text">Name must not be empty</p>}
        </div>

        <div className={lastNameInputClassNames}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
          {lastNameHasError && <p className="error-text">Last name must not be empty</p>}
        </div>
      </div>
      <div className={emailInputClassNames}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailHasError && <p className="error-text">Email must be valid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
