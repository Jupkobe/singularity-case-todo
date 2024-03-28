"use client";

// Components
import Actions from "./actions/Actions";
import Search from "./search/Search";

export default function TodoList({ todoData }) {
  function handleEdit(e) {
    e.preventDefault();

    console.log("Test");
  }

  function handleDelete(e) {
    e.preventDefault();
  }

  // Seperating completed/uncompleted todos
  const completedTodos = todoData.filter((todo) => todo.isCompleted);
  const uncompletedTodos = todoData.filter((todo) => !todo.isCompleted);

  // Mapping todo arrays to jsx elements
  const uncompletedTodosList = uncompletedTodos.map((todo) => (
    <div key={todo.id} className="card m-2">
      <div className="card-body p-2 d-flex justify-content-end">
        <div className="card-text text-start ">{todo.text}</div>
        <Actions handleEdit={handleEdit} handleDelete={handleDelete} />
      </div>
    </div>
  ));

  const completedTodosList = completedTodos.map((todo) => (
    <div key={todo.id} className="card m-2">
      <div className="card-body p-2 d-flex justify-content-end">
        <div className="card-text text-start ">
          <s>{todo.text}</s>
        </div>
        <Actions handleEdit={handleEdit} handleDelete={handleDelete} />
      </div>
    </div>
  ));

  return (
    <>
      <div className="row mt-4">
        <Search />

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
    </>
  );
}
