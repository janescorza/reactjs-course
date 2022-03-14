import React, { useState } from "react";
import Button from "../UI/Button/Button.js";
import styles from "./UserForm.module.css";
import Card from "../UI/Card/Card.js";
import ErrorModal from "../UI/ErrorModal/ErrorModal.js";

const UserForm = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [errorObject, setErrorObject] = useState();

  const unsetError = () => {
    setErrorObject(null);
  }
  const formSubmitHandler = (event) => {
    event.preventDefault();
    //Checking conditions to launch alert dialog
    if (enteredUsername.trim().length === 0 && enteredAge.trim().length === 0) {
      setErrorObject({ title: "fields are empty", alertMessage: "both empty" });
    } else if (enteredUsername.trim().length === 0) {
      setErrorObject({ title: "username empty", alertMessage: "both empty" });
    } else if (enteredAge.trim().length === 0 || +enteredAge < 1) {
      setErrorObject({ title: "Invalid age", alertMessage: "both empty" });
    } else {
      setErrorObject();
    }
    if (errorObject !== undefined) {
      setEnteredUsername("");
      setEnteredAge("");
      return;
    }
    const newUser = {
      name: enteredUsername,
      age: enteredAge,
    };
    setEnteredUsername("");
    setEnteredAge("");
    console.log(newUser);
    props.addUser(newUser);
  };

  const userNameInputChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageInputChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <div>
      {errorObject && <ErrorModal title={errorObject.title} message={errorObject.alertMessage} onClick={unsetError}/>}
      <Card className={styles.input}>
        <form onSubmit={formSubmitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={userNameInputChangeHandler}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageInputChangeHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default UserForm;
