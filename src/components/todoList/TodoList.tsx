"use client";

// Types
import { Todo } from "./types";

// Libraries
import React, { useState, useEffect } from "react";

// Components
import Actions from "./actions/Actions";
import Search from "./search/Search";

// Functions
import { filterTodos, sortByCreatedAt } from "@/lib/util";
import { deleteData, patchData } from "@/lib/apiFunctions";

export default function TodoList({
  todoData,
  setTodoData,
  setEditTodo,
}: {
  todoData: Todo[];
  setTodoData: VoidFunction;
  setEditTodo: VoidFunction;
}): React.FC {
  const [searchValue, setSearchValue] = useState(""); // Search bar value

  const sortedTodoData = todoData.sort(sortByCreatedAt); // Sorting from new to old
  const filteredTodoData = filterTodos(sortedTodoData, searchValue); // Filtering according to the search value

  // Action Functions
  const handleEdit = (todo: Todo): void => {
    // Save the todo as a state so the input field can take as a prop
    setEditTodo(todo);
  };

  const handleDelete = (id: string): void => {
    // Delete from db
    deleteData(id);

    // Delete from local
    setTodoData((prevTodoData) =>
      prevTodoData.filter((todo) => todo.id !== id)
    );
  };

  const handleClick = (todo: Todo): void => {
    // complete/uncomplete in the db
    patchData(todo);

    // complete/uncomplete locally
    setTodoData((prevTodoData) =>
      prevTodoData.map((prevTodo) =>
        prevTodo.id === todo.id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : prevTodo
      )
    );
  };
  // End of Action Functions

  // Seperating completed/uncompleted todos
  const completedTodos = filteredTodoData.filter((todo) => todo.isCompleted);
  const uncompletedTodos = filteredTodoData.filter((todo) => !todo.isCompleted);

  // <--- Mapping todo arrays to jsx elements --->
  const uncompletedTodosList = uncompletedTodos.map((todo) => (
    <div
      key={todo.id + "c"}
      className="card m-2"
      onClick={() => handleClick(todo)}
    >
      <div className="card-body p-2 d-flex justify-content-end">
        <div className="card-text text-start ">{todo.text}</div>
        <Actions
          handleEdit={(e) => {
            e.stopPropagation();
            handleEdit(todo);
          }}
          handleDelete={(e) => {
            e.stopPropagation();
            handleDelete(todo.id);
          }}
        />
      </div>
    </div>
  ));

  const completedTodosList = completedTodos.map((todo) => (
    <div
      key={todo.id + "uc"}
      className="card m-2"
      onClick={() => handleClick(todo)}
    >
      <div className="card-body p-2 d-flex justify-content-end">
        <div className="card-text text-start ">
          <s>{todo.text}</s>
        </div>
        <Actions
          handleEdit={(e) => {
            e.stopPropagation();
            handleEdit(todo);
          }}
          handleDelete={(e) => {
            e.stopPropagation();
            handleDelete(todo.id);
          }}
        />
      </div>
    </div>
  ));
  // <--- End of mapping todo arrays --->

  return (
    <div className="row mt-4">
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />

      <div className="row mt-2">
        <div className="col-lg-6 col-md-12 border-end p-0 ">
          <h5>Tamamlanmamış</h5>
          {uncompletedTodosList}
        </div>
        <div className="col-lg-6 col-md-12 p-0 ">
          <h5>Tamamlanmış</h5>
          {completedTodosList}
        </div>
      </div>
    </div>
  );
}
