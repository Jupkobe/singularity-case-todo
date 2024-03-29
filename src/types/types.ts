export interface Todo {
  id: string;
  text: string;
  createdAt: {
    seconds: Int32Array;
    nanoseconds: Int32Array;
  };
  isCompleted: boolean;
}

export interface TodoListProps {
  todoData: Todo[];
}

export interface ActionHandlers {
  handleEdit: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
