function TodoList(props) {
  return (
    <ul
      style={{
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {props.children}
    </ul>
  );
}

export { TodoList };
