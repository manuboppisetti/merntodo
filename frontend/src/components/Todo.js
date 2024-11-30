import React from 'react';

const Todo = ({ todo, updateTodo, deleteTodo }) => {
  const handleToggleComplete = () => {
    updateTodo(todo._id, { completed: !todo.completed });
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggleComplete}
      />
      <span>{todo.title}</span>
      <button onClick={() => deleteTodo(todo._id)}>Delete</button>
    </div>
  );
};

export default Todo;
