import React from 'react';
import LoginForm from '../components/LoginForm';

function Login({ onLogin }) {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center">Login</h2>
      <LoginForm onLogin={onLogin} />
    </div>
  );
}

export default Login;