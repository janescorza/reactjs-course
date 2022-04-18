import React, { useRef } from "react";
import { classicNameResolver } from "typescript";
import styles from './NewTodo.module.css'

type newTodo ={
    onAddTodo: (text: string) => void;
}

const NewTodo = ({onAddTodo}: newTodo) => {
    const textvalue = useRef<HTMLInputElement>(null);
  const newTodoHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textvalue.current!.value
    if(enteredText?.trim().length === 0){
        return;
    }
    onAddTodo(enteredText);
  };

  return (
    <form onSubmit={newTodoHandler} className={styles.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={textvalue} />
      <button>Add todo</button>
    </form>
  );
};

export default NewTodo;
