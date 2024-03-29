export interface Todo {
  id: string;
  text: string;
  createdAt: Object;
  isCompleted: boolean;
}

export interface TodoListProps {
  todoData: Todo[];
}
