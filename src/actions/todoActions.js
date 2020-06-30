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

export const markAsComplete = (id) => {
  return {
    type: "MARK_AS_COMPLETE",
    id,
  };
};

export const recoverTodo = (id) => {
  return {
    type: "RECOVER_TODO",
    id,
  };
};

export const deleteTodo = (id, listName) => {
  return {
    type: "DELETE_TODO",
    id,
    listName,
  };
};
