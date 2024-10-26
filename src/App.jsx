import './App.css';
import React, { useState } from 'react';
import TodoList from './components/TodoList.jsx';
import TodoForm from './forms/TodoForm.jsx';

function App() {
  const [todos, setTodos] = useState([]);

  /**
   * Adds a new todo to the list.
   * @param {Object} newTodo - the new todo to add
   * @property {number} id - the id of the new todo
   * @property {string} text - the text of the new todo
   */
  const addTodo = (newTodo) => {
    // If the new todo is empty, do nothing
    if (!newTodo.text.trim()) return;

    // Add the new todo to the list
    setTodos([...todos, newTodo]);
  };

  /**
   * Removes a todo from the list.
   * @param {number} id - the id of the todo to remove
   */
  const removeTodo = (id) => {
    // Filter out the todo with the given id
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>My To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
