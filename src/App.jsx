import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import MoveRequestForm from './pages/MoveRequestForm';
import InventoryChecklist from './pages/InventoryChecklist';
import QuoteApproval from './pages/QuoteApproval';
import BookingConfirmation from './pages/BookingConfirmation';
import QuoteRequest from './pages/QuoteRequest';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulate login state

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  const ProtectedRoute = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/login" replace />;
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote-request" element={<QuoteRequest />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
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
        <Route
          path="/quote-approval"
          element={
            <ProtectedRoute>
              <QuoteApproval />
            </ProtectedRoute>
          }
        />
        <Route
          path="/booking-confirmation"
          element={
            <ProtectedRoute>
              <BookingConfirmation />
            </ProtectedRoute>
          }
        />
        
      </Routes>
    </Router>
  );
}

export default App;