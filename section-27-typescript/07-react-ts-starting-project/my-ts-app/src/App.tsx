import React, {useState} from "react";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";


function App() {
  const todos = [new Todo("LearnREAct"), new Todo("lerolero")];

  return (
    <div>
      {/* <Todos items={['Learn React','Learn yeash']}/> */}
      <Todos items={todos} />
    </div>
  );
}

export default App;
