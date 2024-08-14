'use client'

import React, { useState, useEffect } from 'react';
import { db } from '../components/firebaseConfig';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { TextField, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Pantry = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', quantity: 0 });

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const querySnapshot = await getDocs(collection(db, 'pantry'));
    const itemsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setItems(itemsList);
  };

  const handleAddItem = async () => {
    if (newItem.name && newItem.quantity) {
      await addDoc(collection(db, 'pantry'), newItem);
      fetchItems();
      setNewItem({ name: '', quantity: 0 });
    }
  };

  const handleUpdateItem = async (id, quantity) => {
    const itemRef = doc(db, 'pantry', id);
    await updateDoc(itemRef, { quantity });
    fetchItems();
  };

  const handleDeleteItem = async (id) => {
    await deleteDoc(doc(db, 'pantry', id));
    fetchItems();
  };

  return (
    <div>
      <h1>Pantry Management</h1>
      <TextField
        label="Item Name"
        value={newItem.name}
        onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
      />  <TextField
      label="Item Name"
      value={newItem.name}
      onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
    />
      <TextField
        label="Quantity"
        type="number"
        value={newItem.quantity}
        onChange={(e) => setNewItem({ ...newItem, quantity: parseInt(e.target.value) })}
      />
      <Button variant="contained" onClick={handleAddItem}>
        Add Item
      </Button>
      <List>
        {items.map(item => (
          <ListItem key={item.id}>
            <ListItemText
              primary={item.name}
              secondary={`Quantity: ${item.quantity}`}
            />
            <TextField
              label="Update Quantity"
              type="number"
              onChange={(e) => handleUpdateItem(item.id, parseInt(e.target.value))}
            />
            <IconButton onClick={() => handleDeleteItem(item.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Pantry;


// src/components/Pantry.tsx
// import React, { useState, useEffect } from 'react';
// import { db } from '../firebaseConfig';
// import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
// import { TextField, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';

// interface Item {
//   id?: string;
//   name: string;
//   quantity: number;
// }

// const Pantry: React.FC = () => {
//   const [items, setItems] = useState<Item[]>([]);
//   const [newItem, setNewItem] = useState<Item>({ name: '', quantity: 0 });

//   useEffect(() => {
//     fetchItems();
//   }, []);

//   const fetchItems = async () => {
//     const querySnapshot = await getDocs(collection(db, 'pantry'));
//     const itemsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Item));
//     setItems(itemsList);
//   };

//   const handleAddItem = async () => {
//     if (newItem.name && newItem.quantity) {
//       await addDoc(collection(db, 'pantry'), newItem);
//       fetchItems();
//       setNewItem({ name: '', quantity: 0 });
//     }
//   };

//   const handleUpdateItem = async (id: string, quantity: number) => {
//     const itemRef = doc(db, 'pantry', id);
//     await updateDoc(itemRef, { quantity });
//     fetchItems();
//   };

//   const handleDeleteItem = async (id: string) => {
//     await deleteDoc(doc(db, 'pantry', id));
//     fetchItems();
//   };

//   return (
//     <div>
//       <h1>Pantry Management</h1>
//       <TextField
//         label="Item Name"
//         value={newItem.name}
//         onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
//       />
//       <TextField
//         label="Quantity"
//         type="number"
//         value={newItem.quantity}
//         onChange={(e) => setNewItem({ ...newItem, quantity: parseInt(e.target.value) })}
//       />
//       <Button variant="contained" onClick={handleAddItem}>
//         Add Item
//       </Button>
//       <List>
//         {items.map(item => (
//           <ListItem key={item.id}>
//             <ListItemText
//               primary={item.name}
//               secondary={`Quantity: ${item.quantity}`}
//             />
//             <TextField
//               label="Update Quantity"
//               type="number"
//               onChange={(e) => handleUpdateItem(item.id!, parseInt(e.target.value))}
//             />
//             <IconButton onClick={() => handleDeleteItem(item.id!)}>
//               <DeleteIcon />
//             </IconButton>
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );
// };

// export default Pantry;
