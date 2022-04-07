import React, { useReducer, useRef } from "react";
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

const CheckOut = (props) => {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const stateReducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.addName:
        console.log("Updating name");
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

  const confirmHandler = (event) => {
    event.preventDefault();
    
  }

  return (
    <form onSubmit={confirmHandler}>
      <div className={classes.control}></div>
      <Input
        label="Name"
        input={{
          id: "name",
          ref: nameInputRef,
          value: state.name,
          type: "text",
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
          onChange: dispatch.bind(null, { type: ACTIONS.addCity }),
        }}
      />
      <button >Confirm</button>
      <button type="button" onClick={props.onCancel}>Cancel</button>
    </form>
  );
};

export default CheckOut;
