import React, { useReducer } from "react";
import Input from "./Input";
import classes from "./CheckOut.module.css";

const ACTIONS = {
  addName: "add-name",
  addStreet: "add-street",
  addPostal: "add-postal",
  addCity: "add-city"
};

const initState = {
  name: "",
  street: "",
  postal: "",
  city: ""
};

const stateReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.addName:
      return { ...state, name: action.value };
    case ACTIONS.addStreet:
      return { ...state, street: action.value };
    case ACTIONS.addPostal:
      return { ...state, postal: action.value };
      case ACTIONS.addCity:
      return { ...state, city: action.value };
    default:
      return state;
  }
};

const testing = (hello) =>{
    console.log("hello: ",hello," value1: ",hello.value1," value2: ",hello.value2);
}

const CheckOutForm = (props) => {

    const [state, dispatch] = useReducer(stateReducer, initState);

  return (
    <form onSubmit={props.onSubmit}>
      <Input
        label="Name"
        input={{ id: "name", value: state.name, type: "text", onChange: testing.bind(null,{type: ACTIONS.addName})}}
      />
      <Input
        label="Street"
        input={{ id: "street", value: state.street, type: "text" }}
      />
      <Input
        label="Postal Code"
        input={{ id: "postal", value: state.postal, type: "text" }}
      />
      <Input
        label="City"
        input={{ id: "city", value: state.city, type: "text" }}
      />
    </form>
  );
};

export default CheckOutForm;
