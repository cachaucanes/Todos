import './todosLoading.css'
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const TodosLoading = () => {
  const textItem = "Cargando...";
  const numberSkeleton = [1,2,3]

  const ButtonCompletedTodo = () => {
    return (
      <button
        type="button"
        style={{
          border: "none",
          backgroundColor: "transparent",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        <FaCheck color="gray" />
      </button>
    );
  };

  return (
    <ul
      style={{
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {numberSkeleton.map((item, i) => (
        <li
          key={i}
          className="SubContainerTodo"
        >
          <span style={{ marginRight: "4px" }}>
            <ButtonCompletedTodo color="gray" />
          </span>
          <p>{textItem}</p>
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
          >
            <MdDelete color="gray" />
          </button>
        </li>
      ))}
    </ul>
  );
};

export { TodosLoading };
