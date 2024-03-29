// Components
import Todos from "@/components/Todos";
import "./globals.css";

export default function Home() {
  return (
    <main className="container text-center p-2 vh-100">
      <div className="row justify-content-center">
        <div className="col-8 border border-black shadow-sm p-4 rounded">
          <header className="d-flex flex-column align-items-center py-3">
            <h1>TODO APP</h1>
          </header>

          <Todos />
        </div>
      </div>
    </main>
  );
}
