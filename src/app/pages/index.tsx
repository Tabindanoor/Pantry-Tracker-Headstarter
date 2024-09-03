// src/pages/index.tsx
import { TodoForm, TodoList } from "../components/TodoForm";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

const Home = () => {
  const { data: session } = useSession();
  const [todos, setTodos] = useState<any[]>([]);

  useEffect(() => {
    if (session) {
      // Fetch todos
    }
  }, [session]);

  const handleAddTodo = async (todo: { title: string }) => {
    // Add todo
  };

  const handleUpdateTodo = async (todo: any) => {
    // Update todo
  };

  const handleDeleteTodo = async (id: string) => {
    // Delete todo
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onSubmit={handleAddTodo} />
      <TodoList todos={todos} onUpdate={handleUpdateTodo} onDelete={handleDeleteTodo} />
    </div>
  );
};

export default Home;
