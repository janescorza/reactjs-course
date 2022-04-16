import { useEffect, useState } from "react";

//Variables available throughout the file
let globalState = {},
  listeners = [],
  actions = {};

export const useStore = () => {
  const setState = useState(globalState)[1]; //Get jsut teh second value

const dispatch = (actionIdentifier,payload) =>{
    //Calling one of the stored possible actions to alter the state
    //The actions are identified by id and here we run it ->()
    const newState = actions[actionIdentifier](globalState,payload);
    globalState={...globalState, ...newState}
    for(const listener of listeners){
        listener(globalState);
    }
}

  useEffect(() => {
    listeners.push(setState); 
    //Register a listener for the componenent when it mounts
    //The value of set state is captured here as a closure for 
    //that component that's using my custom hook and there for will be the same when the component unmounts
    return () => {
      listeners = listeners.filter((li) => li !== setState);
    };
  }, [setState]);
  return [globalState, dispatch]
};

export const initStore = (userActions, initialState)=>{
    if(initialState){
        globalState = {...globalState, ...initialState}
    }
    actions = {...actions, ...userActions};

}

