import React, { useReducer, useRef, useState } from "react";
import Input from "./Input";
import classes from "./CheckOut.module.css";

const ACTIONS = {
  addName: "add-name",
  addStreet: "add-street",
  addPostal: "add-postal",
  addCity: "add-city",
};

const initState = {
  name: "",
  street: "",
  postal: "",
  city: "",
};

const isEmpty = (value) => value.trim().length === 0;
const isFiveChars = (value) => value.trim().length === 5;

const CheckOut = (props) => {
  //For form validation
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    postal: true,
  }); //Should be false from start and add a touched handler

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const nameIsValid = !isEmpty(state.name);
    const streetIsValid = !isEmpty(state.street);
    const postalIsValid = isFiveChars(state.postal);
    const cityIsValid = !isEmpty(state.city);

    setFormInputValidity({
      name: nameIsValid,
      street: streetIsValid,
      postal: postalIsValid,
      city: cityIsValid,
    });

    const formIsValid =
      nameIsValid && streetIsValid && postalIsValid && cityIsValid;
    if (!formIsValid) {
      return;
    }
    props.onSubmit({
      name: state.name,
      street: state.street,
      postal: state.postal,
      city: state.city
    });
  };

  const stateReducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.addName:
        return { ...state, name: nameInputRef.current.value };
      case ACTIONS.addStreet:
        return { ...state, street: streetInputRef.current.value };
      case ACTIONS.addPostal:
        return { ...state, postal: postalInputRef.current.value };
      case ACTIONS.addCity:
        return { ...state, city: cityInputRef.current.value };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(stateReducer, initState);

  return (
    <form>
      <div className={classes.control}></div>
      <Input
        label="Name"
        input={{
          id: "name",
          ref: nameInputRef,
          value: state.name,
          type: "text",
          errormessage: formInputValidity.name ? "" : "Add a correct name",
          onChange: dispatch.bind(null, { type: ACTIONS.addName }),
        }}
      />
      <Input
        label="Street"
        input={{
          id: "street",
          ref: streetInputRef,
          value: state.street,
          type: "text",
          errormessage: formInputValidity.street ? "" : "Add a correct street",
          onChange: dispatch.bind(null, { type: ACTIONS.addStreet }),
        }}
      />
      <Input
        label="Postal Code"
        input={{
          id: "postal",
          ref: postalInputRef,
          value: state.postal,
          type: "text",
          errormessage: formInputValidity.postal ? "": "Add a correct postal code",
          onChange: dispatch.bind(null, { type: ACTIONS.addPostal }),
        }}
      />
      <Input
        label="City"
        input={{
          id: "city",
          ref: cityInputRef,
          value: state.city,
          type: "text",
          errormessage: formInputValidity.city ? "" : "Add a correct city",
          onChange: dispatch.bind(null, { type: ACTIONS.addCity }),
        }}
      />
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCancel}>
          Cancel
        </button>
        <button
          type="submit"
          className={classes.button}
          onClick={confirmHandler}
        >
          Confirm
        </button>
      </div>
    </form>
  );
};

export default CheckOut;
