import React, { useEffect } from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const { totalTodos, totalTodosCompleted } = React.useContext(TodoContext);  

  function verifyStatusTodos() {
    if (!totalTodos) 
      return "Aún no has creado tu primer Todo";
    if (totalTodos && totalTodosCompleted === totalTodos)
      return "Felicidades has completado todos los ToDos 🤠";
    if (totalTodos && totalTodos > totalTodosCompleted)
      return `Has completado ${totalTodosCompleted} de ${totalTodos} TODOS`;
    return "";
  }

  return (
    <div style={{ height: "10rem", backgroundColor: "#d4eff7" }}>
      <h1>{verifyStatusTodos()}</h1>
    </div>
  );
}

export { TodoCounter };
