import { useState } from 'react';
import PantryList from '../components/PantryList';
import AddItemForm from '../components/AddItemForm';

export default function Home() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const updateItem = (updatedItem) => {
    setItems(items.map(item => item.id === updatedItem.id ? updatedItem : item));
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 p-4">
      <h1 className="text-4xl font-bold text-white text-center mb-6">Pantry Tracker</h1>
      <div className="max-w-3xl mx-auto">
        <AddItemForm addItem={addItem} />
        <PantryList items={items} updateItem={updateItem} deleteItem={deleteItem} />
      </div>
    </div>
  );
}
