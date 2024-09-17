import React, { useState } from "react";
import { TodoContext } from "../TodoContext";
import "./todoForm.css";

const TodoForm = () => {
  const { setOpenModal, addNewTodo } = React.useContext(TodoContext);
  const [todo, setTodo] = useState({
    text: "",
    completed: false,
  });

  const handleAddTodo = (e) => {
    try {
      e.preventDefault();
      addNewTodo(todo);      
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="ContainerFormTodo">
      <form onSubmit={handleAddTodo} className="FormTodo">
        <label htmlFor="nameTodo">Escribe tu nuevo TODO</label>
        <textarea
        autoFocus
          value={todo.text || ""}
          name="text"
          id="nameTodo"
          placeholder="Cortar cebolla para el almuerzo"
          rows={4}
          onChange={(e) => setTodo({ ...todo, text: e.target.value })}
        />
        <div className="TodoFormButtonContainer">
          <button
            type="button"
            onClick={() => setOpenModal((prevState) => !prevState)}
          >
            Cancelar
          </button>
          <button type="submit">Añadir ToDo</button>
        </div>
      </form>
    </div>
  );
};

export { TodoForm };
