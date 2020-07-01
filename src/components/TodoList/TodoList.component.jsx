import React from "react";

import Todo from "../Todo/Todo.component";

const TodoList = ({ todos }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => {
        return <Todo key={todo.id} id={todo.id} todo={todo.todo} />;
      })}
    </div>
  );
};

export default TodoList;
