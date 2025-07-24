import React from 'react';

function BookingConfirmation() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center">Booking Confirmation</h2>
      <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow rounded">
        <p>Your move is booked! Details will be sent to your email.</p>
        <button className="mt-4 bg-blue-600 text-white p-2 rounded">Track Move</button>
      </div>
    </div>
  );
}

export default BookingConfirmation;
