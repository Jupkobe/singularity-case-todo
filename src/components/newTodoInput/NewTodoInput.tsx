"use client";

// Libraries
import { useState } from "react";

export default function NewTodoInput() {
  const [newTodoValue, setNewTodoValue] = useState("");

  const handleChange = (e: Event) => {
    setNewTodoValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Test Input Submit", newTodoValue);
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
            value={newTodoValue}
            onChange={handleChange}
            required
          />
          <button
            className="btn btn-primary px-4 "
            type="submit"
            id="button-addon2"
          >
            Ekle
          </button>
        </form>
      </div>
    </>
  );
}
