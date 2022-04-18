import React, { useRef, useContext } from "react";
import styles from './NewTodo.module.css';
import {TodosContext} from '../store/todos-context';

// type newTodo ={
//     onAddTodo: (text: string) => void;
// }

const NewTodo = () => {
  const todosCtx = useContext(TodosContext);
      const textvalue = useRef<HTMLInputElement>(null);
  const newTodoHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textvalue.current!.value
    if(enteredText?.trim().length === 0){
        return;
    }
    todosCtx.addTodo(enteredText);
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
