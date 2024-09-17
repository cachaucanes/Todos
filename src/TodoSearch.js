import React from "react";
import { TodoContext } from "./TodoContext";

function TodoSearch() {
  const { search, setSearch, totalTodos } = React.useContext(TodoContext);

  const onChange = ({ target: { value } }) => {
    if(!totalTodos) return false
    setSearch(value);
  };  
  return (
    <div style={{ textAlign: "center", marginTop: "-15px" }}>
      <input
        title={!totalTodos ? 'Aún no hay Todos para filtrar' : ''}
        disabled={!totalTodos}
        name="search"
        style={{
          padding: "5px 10px",
          borderRadius: "8px",
          width: "350px",
        }}
        type="text"
        placeholder="🔎 Buscar todo..."
        value={search || ""}
        onChange={onChange}
      />
    </div>
  );
}

export { TodoSearch };
