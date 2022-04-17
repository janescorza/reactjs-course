import React from "react";
// const Todos: React.FC<{items?: string[]}> = (props)=>{ <-- Defines items as optional
// const Todos: React.FC<{items: string[]}> = (props)=>{ <-- FC discouraged

//!!We can use the class name as a type
// type TodosProps = {
//   items: string[];
// };
import Todo from "../models/todo";

// const Todos: React.FC<{items: string[]}> = (props)=>{
// const Todos = ({ items }: TodosProps) => {

// const Todos = (items: Todo[]) => {
// const Todos: React.FC<{items: Todo[]}> = (props) => {
//   return (
//     <ul>
//       {props.items.map((item) => (
//         <li key={item.id}>{item.text}</li>
//       ))}
//     </ul>
//   );
// };

type TodosProps = {
  items: Todo[];
};
const Todos = ({ items }: TodosProps) => {
    return (
            <ul>
              {items.map((item) => (
                <li key={item.id}>{item.text}</li>
              ))}
            </ul>
          );
        };
export default Todos;
