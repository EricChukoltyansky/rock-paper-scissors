import React, { useState } from "react";
import Todos from "./Components/TodosList/Todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoName, setTodoName] = useState("");
  const [todoCompleted, setTodoCompleted] = useState(false);

  const handleName = () => {
    setTodoName("Eric");
  };

  return (
    <>
      <Todos
        name={todoName}
        completed={todoCompleted}
        onClick={() => handleName()}
      ></Todos>
    </>
  );
}

export default App;
