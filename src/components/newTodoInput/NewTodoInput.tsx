"use client";

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
  editTodo: Object;
  setEditTodo: VoidFunction;
}) {
  const [newTodoValue, setNewTodoValue] = useState("");

  // Handles input changes
  const handleChange = (e: Event) => {
    if (editTodo) {
      // If edit exists, edit todo mode
      setEditTodo((prevEditTodo) => ({
        ...prevEditTodo,
        text: e.target.value,
      }));
    } else {
      // If edit do not exists, new todo mode
      setNewTodoValue(e.target.value);
    }
  };

  // Handles form submition as saving current input
  const handleSubmit = async (e: Event) => {
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
