import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import MoveRequestForm from './pages/MoveRequestForm';
import InventoryChecklist from './pages/InventoryChecklist';
import QuoteApproval from './pages/QuoteApproval';
import BookingConfirmation from './pages/BookingConfirmation';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/move-request" element={<MoveRequestForm />} />
        <Route path="/inventory-checklist" element={<InventoryChecklist />} />
        <Route path="/quote-approval" element={<QuoteApproval />} />
        <Route path="/booking-confirmation" element={<BookingConfirmation />} />
      </Routes>
    </Router>
  );
}

export default App;