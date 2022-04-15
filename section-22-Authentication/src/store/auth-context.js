/////////////////////////////////////////
//Over complicated solution, simpler solution below
////////////////////////////////////////
/*
import React, { useState, useEffect, useCallback } from "react";

let logoutTimer; //global variable in this file

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

//Old and over complex
// const calculateRemainingTime = (expirationTime) => {
//   const currentTime = new Date().getTime();
//   const adjExpirationTime = new Date(expirationTime).getTime();
//   const remainingDuration = adjExpirationTime - currentTime;
//   return remainingDuration;
// };

//New an simpler:
const calculateRemainingTime = (expirationTime) => expirationTime - Date.now();

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpirationDate = localStorage.getItem("expirationTime");

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  if (remainingTime <= 60000) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    return null;
  }
  return { token: storedToken, duration: remainingTime };
};

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();
  // const initialToken = localStorage.getItem("token");
  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }
  const [token, setToken] = useState(initialToken);
  const userIsLoggedIn = !!token; //Converts this truthy or falsy value to a true or false boolean
  //if token is empty will return false else it will return true

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);//noneed to add any deps as we don't use anything that changes that's withing the rea
  const loginHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);
    const remainingTime = calculateRemainingTime(expirationTime);
    logoutTimer = setTimeout(logoutHandler, remainingTime); //call log out when time expires
  };

  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
*/


/////////////////////////////////////////
//Far simpler and cleaner auth-context file
////////////////////////////////////////
import React, { useCallback, useEffect, useState } from 'react';
 
let logoutTimer;
 
const AuthContext = React.createContext({
  token: '',
  isLogged: false,
  logIn: token => { },
  logOut: () => { }
});
 
export const AuthContextProvider = props => {
  const initialToken = localStorage.getItem('token');//Will be null if no token is set
  const [token, setToken] = useState(initialToken);
 
  const isLogged = !!token;//Gets true/false value from a truthy/flasy value
 
  const logIn = (token, deadLine) => {
    localStorage.setItem('token', token);
    localStorage.setItem('deadLine', deadLine);
    //Adding both the deadline and the token to the local storage on initial login
    logoutTimer = setTimeout(logOut, deadLine - Date.now());
    //Timer set with the limit date minus the current date which gives us remaining time to set in timeout
    setToken(token);
  };
 
  const logOut = useCallback(() => {
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('deadLine');
    clearTimeout(logoutTimer);
    //Clear both the local storage and the state + running timer for timeout
  }, []);
 
  useEffect(() => {
    if (token) {//if token is valid (won't enter on initial run pre logging in when token is null)
      let timeLeft = localStorage.getItem('deadLine') - Date.now();
      if (timeLeft < 6000) timeLeft = 0;//In case there is less than a minute left for autologout we set inmediate logout
      logoutTimer = setTimeout(logOut, timeLeft);
    }
  }, [token, logOut])//Run on logout or on initial token change
 
  const context = {
    token,
    isLogged,
    logIn,
    logOut
  };
 
  return (
    <AuthContext.Provider value={context} >
      {props.children}
    </AuthContext.Provider>
  );
};
 
export default AuthContext;