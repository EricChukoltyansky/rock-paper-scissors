import React from "react";

interface Itodos {
  name: string;
  completed: boolean;
  onClick: () => void;
}

function Todos({ name, completed, onClick }: Itodos) {
  return (
    <>
      <h1>{name}</h1>
      <h2>{completed}</h2>
      <button onClick={onClick}>Click</button>
    </>
  );
}

export default Todos;
