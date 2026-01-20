const TodoDetail = ({ todo }) => {
  console.log(todo)
  return (
    <div>
      <h2>Todo Detail</h2>
      <p>Name: {todo.title}</p>
      <p>Finalizado: {todo.completed ? 'sim' : 'não'}</p>
    </div>
  );
}

export default TodoDetail;
