import TodoList from "../components/TodoList/TodoList.component";

const initState = {
  todo: "",
  todos: [],
  completeTodos: [],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE_TODO_TEXT":
      return {
        ...state,
        todo: action.todo,
      };
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, { todo: action.todo, id: action.id }],
        todo: "",
      };
    case "MARK_AS_COMPLETE":
      const completeTodo = state.todos.find((todo) => todo.id === action.id);
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
        completeTodos: [...state.completeTodos, completeTodo],
      };
    case "RECOVER_TODO":
      const recoveredTodo = state.completeTodos.find(
        (todo) => todo.id === action.id
      );
      return {
        ...state,
        todos: [...state.todos, recoveredTodo],
        completeTodos: state.completeTodos.filter(
          (todo) => todo.id !== action.id
        ),
      };
    case "DELETE_TODO":
      if (action.listName === "todos") {
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.id),
        };
      } else {
        return {
          ...state,
          completeTodos: state.completeTodos.filter(
            (todo) => todo.id !== action.id
          ),
        };
      }
  }

  return state;
};

export default rootReducer;
