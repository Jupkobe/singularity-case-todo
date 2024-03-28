import { Todo } from "/types";

export function filterTodos(todoData: Todo[], searchValue: String) {
  const filteredTodos = todoData.filter((todo) =>
    todo.text.includes(searchValue)
  );

  return filteredTodos;
}
