import React from "react";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import { TodosContextProvider } from "./store/todos-context";

function App() {
  
  return (
    <TodosContextProvider>
      {/* <Todos items={['Learn React','Learn yeash']}/> */}
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
