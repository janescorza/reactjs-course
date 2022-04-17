import React from "react";
// const Todos: React.FC<{items?: string[]}> = (props)=>{ <-- Defines items as optional
// const Todos: React.FC<{items: string[]}> = (props)=>{ <-- FC discouraged
type TodosProps = {
  items: string[];
  num: number;
};

// const Todos: React.FC<{items: string[]}> = (props)=>{

const Todos = ({ items, num }: TodosProps) => {
  console.log(num);
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Todos;
