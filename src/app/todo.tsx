import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

type Todo = {
  id: string;
  title: string;
};

export default function TodoPage() {
  const { data: session } = useSession();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    if (session) {
      fetch("/api/todos")
        .then((res) => res.json())
        .then((data) => setTodos(data));
    }
  }, [session]);

  const addTodo = async () => {
    const res = await fetch("/api/todos/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTodo }),
    });
    const todo = await res.json();
    setTodos((prev) => [...prev, todo]);
    setNewTodo("");
  };

  const updateTodo = async (id: string, title: string) => {
    const res = await fetch("/api/todos/update", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, title }),
    });
    const updatedTodo = await res.json();
    setTodos((prev) =>
      prev.map((t) => (t.id === updatedTodo.id ? updatedTodo : t))
    );
  };

  const deleteTodo = async (id: string) => {
    await fetch("/api/todos/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  if (!session) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">My Todos</h1>
      <div className="mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="New todo"
          className="px-2 py-1 border rounded mr-2"
        />
        <button onClick={addTodo} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center mb-2">
            <input
              type="text"
              value={todo.title}
              onChange={(e) => updateTodo(todo.id, e.target.value)}
              className="px-2 py-1 border rounded mr-2"
            />
            <button onClick={() => deleteTodo(todo.id)} className="bg-red-500 text-white px-4 py-2 rounded">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
