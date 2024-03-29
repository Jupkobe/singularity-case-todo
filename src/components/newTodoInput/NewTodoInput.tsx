"use client";

// Types
import { Todo } from "@/types/types";
import { FormEvent, ChangeEvent } from "react";

// Libraries
import { useState } from "react";

// Functions
import { postData, putData } from "@/lib/apiFunctions";

export default function NewTodoInput({
  refreshData,
  editTodo,
  setEditTodo,
}: {
  refreshData: VoidFunction;
  editTodo: Todo | null;
  setEditTodo: Function;
}) {
  const [newTodoValue, setNewTodoValue] = useState("");

  // Handles input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (editTodo) {
      // If edit exists, edit todo mode
      setEditTodo((prevEditTodo: Todo) => ({
        ...prevEditTodo,
        text: (e?.target as HTMLInputElement)?.value,
      }));
    } else {
      // If edit do not exists, new todo mode
      setNewTodoValue((e?.target as HTMLInputElement)?.value);
    }
  };

  // Handles form submition as saving current input
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (editTodo) {
      // If edit exists, edit todo mode
      await putData(editTodo);
      setEditTodo(null);
    } else {
      // If edit do not exists, new todo mode
      setNewTodoValue("");
      await postData(newTodoValue);
    }

    refreshData();
  };

  return (
    <>
      <div className="row border-bottom pb-4">
        <form className="input-group" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Yeni Todo"
            aria-label="Yeni Todo"
            aria-describedby="button-addon2"
            value={editTodo ? editTodo.text : newTodoValue}
            onChange={handleChange}
            required
          />
          <button
            className="btn btn-primary px-4 "
            type="submit"
            id="button-addon2"
          >
            {editTodo ? "Düzenle" : "Ekle"}
          </button>
        </form>
      </div>
    </>
  );
}
