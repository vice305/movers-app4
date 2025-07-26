import React, { useState, useEffect } from 'react';
import axios from 'axios';

function InventoryChecklist() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', quantity: 1, category: 'Furniture' });
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setMessage('Please log in to view inventory.');
        return;
      }
      const response = await axios.get('http://localhost:5000/api/inventory/list', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.status === 401) {
        localStorage.removeItem('token');
        setMessage('Session expired. Please log in again.');
        return;
      }
      setItems(response.data);
    } catch (error) {
      setMessage('Error fetching inventory');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleAddItem = async (e) => {
    e.preventDefault();
    if (newItem.name.trim()) {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setMessage('Please log in to add items.');
          return;
        }
        const response = await axios.post('http://localhost:5000/api/inventory/add', newItem, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.status === 401) {
          localStorage.removeItem('token');
          setMessage('Session expired. Please log in again.');
          return;
        }
        setItems([...items, response.data]);
        setNewItem({ name: '', quantity: 1, category: 'Furniture' });
        setMessage('Item added successfully!');
      } catch (error) {
        setMessage('Error adding item');
      }
    }
  };

  const handleRemoveItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Inventory Checklist</h2>
      
      {/* Add Item Form */}
      <section className="mb-8 p-6 bg-white shadow rounded">
        <h3 className="text-xl font-semibold mb-4">Add New Item</h3>
        <form onSubmit={handleAddItem} className="space-y-4">
          <div>
            <label className="block text-gray-700">Item Name</label>
            <input
              type="text"
              name="name"
              value={newItem.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="e.g., Sofa"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={newItem.quantity}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              min="1"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Category</label>
            <select
              name="category"
              value={newItem.category}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            >
              <option>Furniture</option>
              <option>Boxes</option>
              <option>Electronics</option>
              <option>Other</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Add Item
          </button>
        </form>
        {message && <p className="mt-2 text-center text-sm text-green-600">{message}</p>}
      </section>

      {/* Inventory List */}
      <section className="p-6 bg-white shadow rounded">
        <h3 className="text-xl font-semibold mb-4">Your Inventory</h3>
        {items.length === 0 ? (
          <p className="text-gray-600">No items added yet. Start by adding items above!</p>
        ) : (
          <ul className="space-y-4">
            {items.map(item => (
              <li key={item.id} className="flex justify-between items-center p-2 border rounded">
                <span>
                  {item.name} - {item.quantity} x {item.category}
                </span>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default InventoryChecklist;