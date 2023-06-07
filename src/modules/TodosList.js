import TodoItem from "./TodoItem";

const TodosList = (props) => {
  // console.log(props);
  const { todosProps } = props;
  // console.log(todosProps);
  const { setTodos } = props; 
  // console.log(setTodos);
  const { delTodo } = props; 

  const { setUpdate } = props;
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem key={todo.id} itemProp={todo} setTodos={setTodos} delTodo={delTodo} setUpdate={setUpdate}/>
      ))}
    </ul>
  );
};
export default TodosList;
  