import { useState } from 'react';
import InputTodo from './InputTodo';
import TodosList from './TodosList';
import { v4 as uuidv4 } from "uuid";

const TodosLogic = () => {
  const delTodo = (id) => {
    console.log(todos);
    console.log(...todos);
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      })
    );
  };

  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: 'Do the react tutorial',
      completed: true,
    },
    {
      id: uuidv4(),
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: uuidv4(),
      title: 'Deploy to live server',
      completed: false,
    },
  ]);
  return (
    <div>
      < InputTodo addTodoItem={addTodoItem} />
      < TodosList todosProps={todos} setTodos={setTodos} delTodo={delTodo} setUpdate={setUpdate}/>
      
    </div>
  );
};
export default TodosLogic;
