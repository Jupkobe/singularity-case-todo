import Image from "next/image";

export default function TodoMain() {
  const fakeData = [
    {
      id: 1,
      text: "Yapılacak İş 1",
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

  const completedTodos = fakeData.filter((todo) => todo.isCompleted);
  const uncompletedTodos = fakeData.filter((todo) => !todo.isCompleted);

  const completedTodosList = completedTodos.map((todo) => (
    <div key={todo.id} className="card m-2  ">
      <div className="card-body p-2">
        <div className="card-text text-start ">
          <s>{todo.text}</s>
        </div>
      </div>
    </div>
  ));

  const uncompletedTodosList = uncompletedTodos.map((todo) => (
    <div key={todo.id} className="card m-2">
      <div className="card-body p-2">
        <div className="card-text text-start ">{todo.text}</div>
      </div>
    </div>
  ));

  return (
    <main className="container text-center p-2">
      <div className="row justify-content-center">
        <div className="col-8 border border-black rounded ">
          <header className="d-flex flex-column align-items-center py-3">
            <h1>TODO APP</h1>
          </header>

          <div className="row">
            <div className="col-10">
              <input type="text" class="form-control" placeholder="Yeni Todo" />
            </div>
            <div className="col-2">
              <button className="btn btn-primary w-100">Ekle</button>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-6  border-end p-0">
              <h5>Tamamlanmamış</h5>
              {uncompletedTodosList}
            </div>
            <div className="col-6 p-0 ">
              <h5>Tamamlanmış</h5>
              {completedTodosList}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
