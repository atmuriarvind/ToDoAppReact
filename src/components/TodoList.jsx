import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, removeTodo }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />
      ))}
    </div>
  );
}

export default TodoList;
