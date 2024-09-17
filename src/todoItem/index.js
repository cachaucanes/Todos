import "./todoItem.css";
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function TodoItem({ ...item }) {
  const ButtonCompletedTodo = () => {
    return (
      <button
        type="button"
        title={item.completed ? "Desmarcar" : "Marcar"}
        style={{
          border: "none",
          backgroundColor: "transparent",
          fontSize: "18px",
          cursor: "pointer",
        }}
        onClick={() => item.completedTodo(item.text, item.completed)}
      >
        {item.completed ? <FaCheck color="green" /> : <FaCheck color="gray" />}
      </button>
    );
  };

  return (
    <li className="ItemTodo">
      <span style={{ marginRight: "4px" }}>
        <ButtonCompletedTodo />
      </span>
      <p className={`${item.completed ? "TitleTodoCompleted" : ""}`}>
        {item.text}
      </p>
      <button
        className="buttonDeleteTodo"
        type="button"
        title="Eliminar"
        style={{
          marginLeft: "10px",
          position: "absolute",
          right: "0",
          top: "0",
          color: "red",
          borderRadius: "4px",
          border: "none",
          backgroundColor: "transparent",
          fontSize: "18px",
          zIndex: 2,
          cursor: "pointer",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          padding: "2px",
        }}
        onClick={() => item.removeTodo(item.text)}
      >
        <MdDelete />
      </button>
    </li>
  );
}

export { TodoItem };
