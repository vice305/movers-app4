import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar({ isLoggedIn, onLogout }) {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="Move Mate Logo" className="h-8 mr-2" />
        <span className="text-xl font-bold text-blue-600">Move Mate</span>
      </div>
      <div className="space-x-4">
        <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
        <Link to="/pricing" className="text-gray-600 hover:text-blue-600">Pricing</Link>
        
        {isLoggedIn ? (
          <>
            <Link to="/move-request" className="text-gray-600 hover:text-blue-600">Book a Move</Link>
            <Link to="/quote-request" className="text-gray-600 hover:text-blue-600">Get Free Quote</Link>
            <Link to="/inventory-checklist" className="text-gray-600 hover:text-blue-600">Inventory Checklist</Link>
            <button onClick={onLogout} className="text-gray-600 hover:text-blue-600">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-gray-600 hover:text-blue-600">Sign In</Link>
            <Link to="/signup" className="text-gray-600 hover:text-blue-600">Sign Up</Link>
            <Link to="/move-request" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Book a Move</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;