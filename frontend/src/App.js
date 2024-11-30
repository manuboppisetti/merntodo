import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const res = await axios.get('http://localhost:5000/api/todos');
    setTodos(res.data);
  };

  const addTodo = async (title) => {
    const res = await axios.post('http://localhost:5000/api/todos', { title });
    setTodos([...todos, res.data]);
  };

  const updateTodo = async (id, updatedTodo) => {
    const res = await axios.put(`http://localhost:5000/api/todos/${id}`, updatedTodo);
    setTodos(todos.map((todo) => (todo._id === id ? res.data : todo)));
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5000/api/todos/${id}`);
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <div>
        {todos.map((todo) => (
          <Todo key={todo._id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        ))}
      </div>
    </div>
  );
};

export default App;
