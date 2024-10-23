import React from 'react';

function TodoItem({ todo, removeTodo }) {
  return (
    <div>
      <span>{todo.text}</span>
      <button id="delete" onClick={() => removeTodo(todo.id)}>Delete</button>
    </div>
  );
}

export default TodoItem;