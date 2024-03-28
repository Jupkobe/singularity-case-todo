export default function NewTodoInput() {
  return (
    <>
      <div className="row border-bottom pb-4">
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="Yeni Todo"
            aria-label="Yeni Todo"
            aria-describedby="button-addon2"
          />
          <button
            class="btn btn-primary px-4 "
            type="button"
            id="button-addon2"
          >
            Ekle
          </button>
        </div>
      </div>
    </>
  );
}
