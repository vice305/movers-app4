import React from 'react';

function QuoteApproval() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center">Approve Quote</h2>
      <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow rounded">
        <p>Estimated Cost: $2,450 - $3,200</p>
        <button className="mt-4 bg-blue-600 text-white p-2 rounded">Approve Quote</button>
      </div>
    </div>
  );
}

export default QuoteApproval;