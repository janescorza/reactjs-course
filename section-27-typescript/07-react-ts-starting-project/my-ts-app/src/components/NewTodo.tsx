import React, { useRef } from "react";

const NewTodo = () => {
  const textvalue = useRef<HTMLInputElement>(null);
  const newTodoHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textvalue.current?.value
    if(enteredText?.trim().length === 0){
        return;
    }
  };

  return (
    <form onSubmit={newTodoHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={textvalue} />
      <button>Add todo</button>
    </form>
  );
};

export default NewTodo;
