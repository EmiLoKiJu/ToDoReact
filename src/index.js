import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/index.css';
import TodoApp from './TodoApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
);
