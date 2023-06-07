import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

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
        <TodoItem
          key={todo.id}
          itemProp={todo}
          setTodos={setTodos}
          delTodo={delTodo}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
};

TodosList.propTypes = {
  todosProps: PropTypes.arrayOf(
    PropTypes.shape({
      completed: PropTypes.bool.isRequired,
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  setTodos: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default TodosList;
