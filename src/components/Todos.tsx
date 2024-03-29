"use client";

// Libraries
import { useState, useEffect } from "react";

// Components
import TodoList from "@/components/todoList/TodoList";
import NewTodoInput from "@/components/newTodoInput/NewTodoInput";

// Functions
import { getData } from "@/lib/apiFunctions";

export default function Todos() {
  const [todoData, setTodoData] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  // Refreshes
  const refreshData = async () => {
    const todoData = await getData();
    setTodoData(todoData);
  };

  useEffect(() => {
    refreshData();
  }, []);

  return (
    <>
      <NewTodoInput
        refreshData={refreshData}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />

      <TodoList
        todoData={todoData}
        setTodoData={setTodoData}
        setEditTodo={setEditTodo}
      />
    </>
  );
}
