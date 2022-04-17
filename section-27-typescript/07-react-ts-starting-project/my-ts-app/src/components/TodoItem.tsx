import React from "react";

import Todo from "../models/todo";


type TodoProps = {
  item: Todo;
};
const TodoItem = ({ item }: TodoProps) => {
    return (
            <li key={item.id}>
              {item.text}
            </li>
          );
        };
export default TodoItem;
