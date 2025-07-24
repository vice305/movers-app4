import React from 'react';

function MoveRequestForm() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center">Request a Move</h2>
      <form className="max-w-md mx-auto mt-8 p-6 bg-white shadow rounded">
        <div className="mb-4">
          <label className="block text-gray-700">From</label>
          <input type="text" className="w-full p-2 border rounded" placeholder="City, State" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">To</label>
          <input type="text" className="w-full p-2 border rounded" placeholder="City, State" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Move Date</label>
          <input type="date" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Property Size</label>
          <select className="w-full p-2 border rounded">
            <option value="">Select Size</option>
            <option>Studio</option>
            <option>1 Bedroom</option>
            <option>2 Bedroom</option>
            <option>3 Bedroom House</option>
            <option>4+ Bedroom House</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Get Quote</button>
      </form>
    </div>
  );
}

export default MoveRequestForm;