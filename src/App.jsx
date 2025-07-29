import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import QuoteRequest from './pages/QuoteRequest';
import MoveRequestForm from './pages/MoveRequestForm';
import InventoryChecklist from './pages/InventoryChecklist';
import Pricing from './pages/Pricing';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true); // Set logged-in state if token exists
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/quote-request" element={<QuoteRequest />} />
        <Route path="/pricing" element={<Pricing />} />
        
        <Route
          path="/move-request"
          element={
            <ProtectedRoute>
              <MoveRequestForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/inventory-checklist"
          element={
            <ProtectedRoute>
              <InventoryChecklist />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;