import React from "react";
import { TodoContext } from "./TodoContext";
import { IoIosAdd } from "react-icons/io";
import './createTodoButton.css'

function CreateTodoButton() {
  const { setOpenModal, totalTodos } = React.useContext(TodoContext);


  return (
    <>
    <button
      title="Crear nuevo TODO"
      className={`CreateTODO ${!totalTodos && 'circular-shadow-button'}`}
      onClick={() => setOpenModal((prevState) => !prevState)}
    >
      <IoIosAdd className="CreateTODOIcon" size={'30px'}/>
    </button>    
    </>
  );
}

export { CreateTodoButton };
