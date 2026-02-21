import useFetchResource from "../hooks/fetch-resource";

const Todos = () => {
  const { data: todos, loading, error } = useFetchResource("https://jsonplaceholder.typicode.com/todos");

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.title}</strong>
            <p>{todo.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
