import { TodoCounter } from "../todoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../todoItem";
import { TodosLoading } from "../todosLoading/TodoLoading";
import { TodoContext } from "../TodoContext";
import React from "react";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

const AppUI = () => {
  const {
    todosSearch,
    removeTodo,
    completedTodo,
    loading,
    error,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && <TodosLoading />}
        {error && <span>Ups' Hubo un error</span>}
        {!loading && !todosSearch.length && <span>¡Crea tu primer ToDo!</span>}
        {todosSearch.map((item, i) => (
          <TodoItem
            {...item}
            key={i}
            removeTodo={removeTodo}
            completedTodo={completedTodo}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
      {openModal && (
        <Modal>
          <TodoForm />
          
        </Modal>
      )}
    </>
  );
};

export { AppUI };
