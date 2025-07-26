import React, { useState } from 'react';
import axios from 'axios';
import logo from '../assets/logo.png';

function LoginForm({ onLogin }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', formData, {
        headers: { 'Content-Type': 'application/json' },
      });
      setMessage('Login successful!');
      const token = response.data.token;
      localStorage.setItem('token', token);
      if (onLogin) onLogin();
    } catch (error) {
      setMessage('Login failed. Please check your credentials.');
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <div className="flex justify-center mb-6">
          <div className="bg-blue-500 text-white p-4 rounded-lg">
             <img src={logo} alt="Move Mate Logo" className="h-8 mb-50" />
          </div>
        </div>
        <h2 className="text-center text-2xl font-bold text-blue-700">Welcome to Move Mate</h2>
        <p className="text-center text-sm text-gray-500 mb-6">Please login below</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
            className="w-full border border-blue-200 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-blue-200 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-blue-200 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-md font-medium"
          >
            Login
          </button>
        </form>

        <div className="text-center text-sm text-gray-500 my-4">
          — OR CONTINUE WITH —
        </div>

        <button className="w-full border border-gray-300 rounded-md flex items-center justify-center py-2 hover:bg-gray-100">
          <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="w-5 h-5 mr-2" />
          Login with Google
        </button>

        {message && (
          <p className="mt-4 text-center text-sm text-red-500">{message}</p>
        )}

        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{' '}
          <a href="/signup" className="text-blue-600 font-medium">Sign up here</a>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;