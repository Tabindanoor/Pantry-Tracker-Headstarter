import { useState } from "react";

const TodoForm = ({ onSubmit }: { onSubmit: (todo: { title: string }) => void }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New Todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

const TodoList = ({ todos, onUpdate, onDelete }: { todos: any[], onUpdate: (todo: any) => void, onDelete: (id: string) => void }) => (
  <ul>
    {todos.map((todo) => (
      <li key={todo.id}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onUpdate({ ...todo, completed: !todo.completed })}
        />
        {todo.title}
        <button onClick={() => onDelete(todo.id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export { TodoForm, TodoList };
