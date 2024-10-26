import React from 'react';
import TodoItem from './TodoItem';

/**
 * A component to render a list of todo items.
 * @param {Array.<Object>} todos - The list of todo items to render
 * @param {function(number)} removeTodo - A function to remove a todo item
 */
function TodoList({ todos, removeTodo }) {
  return (
    <div>
      {/* Render each todo item in the list */}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
