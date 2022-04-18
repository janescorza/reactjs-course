import React, { useState } from "react";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodods) => {
      return prevTodods.concat(newTodo);
    });
  };

const removeTodoHandler=(todoId: string)=>{
setTodos((prevTodos)=>{
  return prevTodos.filter(todo => todo.id !== todoId);
})

};

  return (
    <div>
      {/* <Todos items={['Learn React','Learn yeash']}/> */}
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} removeHandler={removeTodoHandler} />
    </div>
  );
}

export default App;
