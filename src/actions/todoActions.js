export const updateTodoText = (todo) => {
  return {
    type: "UPDATE_TODO_TEXT",
    todo,
  };
};

export const addTodo = (todo, id) => {
  return {
    type: "ADD_TODO",
    todo,
    id,
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    id,
  };
};

export const recoverTodo = (id) => {
  return {
    type: "RECOVER_TODO",
    id,
  };
};
