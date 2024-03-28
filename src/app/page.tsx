// Types
import { Todo, TodoListProps } from "./types";
import { NextPage } from "next";

// Components
import TodoList from "@/components/todoList/TodoList";
import NewTodoInput from "@/components/newTodoInput/NewTodoInput";
import "./globals.css";

export default function Home(): NextPage {
  const fakeData: Todo[] = [
    {
      id: 1,
      text: "Yapılacak İş 1",
      isCompleted: false,
    },
    {
      id: 15156,
      text: "Yapılacak İş 1 Yapılacak İş 1 Yapılacak İş 1Yapılacak İş 1  Yapılacak İş 1 Yapılacak İş 1 Yapılacak İş 1 Yapılacak İş 1 ",
      isCompleted: false,
    },
    {
      id: 7,
      text: "Yapılacak İş 1 Yapılacak İş 1 Yapılacak İş 1Yapılacak İş 1  Yapılacak İş 1 Yapılacak İş 1 Yapılacak İş 1 Yapılacak İş 1 ",
      isCompleted: false,
    },
    {
      id: 8,
      text: "Yapılacak İş 1 Yapılacak İş 1 Yapılacak İş 1Yapılacak İş 1  Yapılacak İş 1 Yapılacak İş 1 Yapılacak İş 1 Yapılacak İş 1 ",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Yapılacak İş 2",
      isCompleted: false,
    },
    {
      id: 5,
      text: "Yapılacak İş 2",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Yapılacak İş 3",
      isCompleted: true,
    },
    {
      id: 4,
      text: "Yapılacak İş 4",
      isCompleted: true,
    },
  ];

  return (
    <main className="container text-center p-2 vh-100">
      <div className="row justify-content-center">
        <div className="col-8 border border-black shadow-sm p-4 rounded">
          <header className="d-flex flex-column align-items-center py-3">
            <h1>TODO APP</h1>
          </header>

          <NewTodoInput />

          <TodoList todoData={fakeData} />
        </div>
      </div>
    </main>
  );
}
