import React, { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const [todos, setTodos, postTodos, loading, error] = useLocalStorage(
    "TODOS_V1",
    []
  );
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const todosSearch = todos.filter((item) =>
    item.text.toLowerCase().includes(search.toLowerCase())
  );

  const totalTodos = todos.length;
  const totalTodosCompleted = todos.filter((item) => item.completed).length;

  const removeTodo = (text) => {
    const indexTodo = todos.findIndex((item) => item.text === text);
    if (indexTodo !== -1) {
      const newTodos = [...todos];
      newTodos.splice(indexTodo, 1);
      postTodos(newTodos);
    }
  };

  const completedTodo = (text, completed) => {
    //Parece ser la mejor opción
    setTodos((prevTodos) => {
      const indexTodo = prevTodos.findIndex((item) => item.text === text);
      if (indexTodo !== -1) {
        const newTodos = [...prevTodos];
        newTodos[indexTodo] = { ...newTodos[indexTodo], completed: !completed };
        postTodos(newTodos);
        return newTodos;
      }
      return prevTodos;
    });
  };

  const addNewTodo = (newTodo) => {
    const newTodoList = [...todos, newTodo]
    postTodos(newTodoList)
    setOpenModal(false)
    
  }

  return (
    <TodoContext.Provider
      value={{
        search,
        setSearch,
        todos,
        todosSearch,
        removeTodo,
        completedTodo,
        loading,
        error,
        totalTodos,
        totalTodosCompleted,
        openModal,
        setOpenModal,
        addNewTodo        
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
