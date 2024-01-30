import { useState } from "react";
import "./App.css";
import { getTodos } from "./utils";

type TodosType = {
  userId: Number;
  id: Number;
  title: String;
  completed: Boolean;
};

function App() {
  const [todos, setTodos] = useState<TodosType[]>([]);

  const handleTodods = async () => {
    return getTodos().then((gotTodos) => {
      const list: any = gotTodos;

      if (list) {
        setTodos(list.data);
      }
    });
  };

  return (
    <div className="App">
      <main>
        <nav
          style={{ height: 50, backgroundColor: "#dedede", marginBottom: 10 }}
        >
          Todos List
        </nav>

        {/* Button to get todos */}
        <button
          onClick={handleTodods}
          style={{
            padding: 10,
            backgroundColor: "#cccccc",
            border: "none",
            cursor: "pointer",
          }}
        >
          Get Todos
        </button>
        <div style={{ width: "50%", margin: "0 auto" }}>
          {todos && (
            <div style={{ textAlign: "left" }}>
              {todos.map((todo: TodosType, index: Number) => (
                <p key={`${index} + ${todo.id}`}>
                  {todo.title}:{" "}
                  <strong>{todo.completed ? "Completed" : "Incomplete"}</strong>
                </p>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
