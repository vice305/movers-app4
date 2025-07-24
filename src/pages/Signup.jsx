import React from 'react';

function Signup() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center">Sign Up</h2>
      <form className="max-w-md mx-auto mt-8 p-6 bg-white shadow rounded">
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input type="password" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Confirm Password</label>
          <input type="password" className="w-full p-2 border rounded" />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;