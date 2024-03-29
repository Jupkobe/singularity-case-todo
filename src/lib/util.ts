import { Todo } from "/types";

export function filterTodos(todoData: Todo[], searchValue: String) {
  const filteredTodos = todoData.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  return filteredTodos;
}

export function sortByCreatedAt(a: Todo, b: Todo) {
  if (a?.createdAt && b?.createdAt) {
    if (a.createdAt.seconds > b.createdAt.seconds) {
      // Compare the timestamps in seconds
      return -1;
    } else {
      return 1;
    }
  } else return 1;
}
