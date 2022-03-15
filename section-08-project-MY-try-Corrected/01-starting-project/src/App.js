import React, { useState } from "react";

import "./App.css";
import UserList from "./UsersList/UsersList";
import UserForm from "./Form/UserForm";

function App() {
  const [usersList, setUsersList] = useState([
    {
      id: 1,
      name: "Paco",
      age: 28,
    },
    {
      id: 2,
      name: "Jan",
      age: 22,
    },
    {
      id: 3,
      name: "Joan",
      age: 25,
    },
  ]);

  const addUserToList = newUser => {
    setUsersList(prevList => {
      const updatedUsersList = [...prevList];
      updatedUsersList.unshift({
        name: newUser.name,
        age: newUser.age,
        id: Math.random().toString(),
      });
      return updatedUsersList;
    });
  };

  return (
    <div>
      <section id="user-form">
        <UserForm addUser={addUserToList}></UserForm>
      </section>
      <section id="user-list">
          <UserList users={usersList} ></UserList>
      </section>
    </div>
  );
}

export default App;
