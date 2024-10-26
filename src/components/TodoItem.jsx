import React from 'react';

/**
 * A component to render a single todo item.
 * 
 * @param {{text: string, id: number}} todo - The todo item to render
 * @param {function(number)} removeTodo - A function to remove the todo item
 */
function TodoItem({ todo, removeTodo }) {
  return (
    <div>
      {/* Render the todo item text */}
      <span>{todo.text}</span>
      {/* Render a button to delete the todo item */}
      <button id="delete" onClick={() => removeTodo(todo.id)}>Delete</button>
    </div>
  );
}

export default TodoItem;