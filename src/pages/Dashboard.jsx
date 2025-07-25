import React from 'react';

function Dashboard() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>

      {/* Booking Overview */}
      <section className="mb-8 p-6 bg-white shadow rounded">
        <h3 className="text-xl font-semibold mb-4">Booking Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded">
            <h4 className="font-medium">Upcoming Moves</h4>
            <p>2 moves scheduled</p>
          </div>
          <div className="p-4 border rounded">
            <h4 className="font-medium">Ongoing Moves</h4>
            <p>1 move in progress</p>
          </div>
          <div className="p-4 border rounded">
            <h4 className="font-medium">Past Moves</h4>
            <p>5 completed moves</p>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-600">Last update: 08:23 AM EAT, July 25, 2025</p>
      </section>

      {/* Booking Status Updates */}
      <section className="mb-8 p-6 bg-white shadow rounded">
        <h3 className="text-xl font-semibold mb-4">Booking Status Updates</h3>
        <ul className="list-disc pl-5">
          <li>Move #1234 - Scheduled for July 26, 2025</li>
          <li>Move #1235 - In Progress</li>
          <li>Move #1236 - Completed on July 24, 2025</li>
        </ul>
      </section>

      {/* Request a Move */}
      <section className="mb-8 p-6 bg-white shadow rounded">
        <h3 className="text-xl font-semibold mb-4">Request a Move</h3>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">From</label>
            <input type="text" className="w-full p-2 border rounded" placeholder="City, State" />
          </div>
          <div>
            <label className="block text-gray-700">To</label>
            <input type="text" className="w-full p-2 border rounded" placeholder="City, State" />
          </div>
          <div>
            <label className="block text-gray-700">Move Date</label>
            <input type="date" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block text-gray-700">Type of Move</label>
            <select className="w-full p-2 border rounded">
              <option>Local</option>
              <option>Long Distance</option>
              <option>Office</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Price Estimate</label>
            <p className="p-2 border rounded bg-gray-100">$1,500 - $2,000 (estimated)</p>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Submit Request</button>
        </form>
      </section>

      {/* Real-Time Tracking */}
      <section className="mb-8 p-6 bg-white shadow rounded">
        <h3 className="text-xl font-semibold mb-4">Real-Time Tracking</h3>
        <p className="text-gray-600">Live GPS tracking of movers (feature coming soon).</p>
        <button className="mt-2 bg-blue-600 text-white p-2 rounded" disabled>Track Live</button>
      </section>

      {/* Payments */}
      <section className="mb-8 p-6 bg-white shadow rounded">
        <h3 className="text-xl font-semibold mb-4">Payments</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium">View Invoices</h4>
            <p>Invoice #1234 - $1,800 (Paid)</p>
          </div>
          <div>
            <h4 className="font-medium">Download Receipts</h4>
            <button className="bg-blue-600 text-white p-2 rounded">Download</button>
          </div>
          <div>
            <h4 className="font-medium">Add/Manage Payment Methods</h4>
            <button className="bg-blue-600 text-white p-2 rounded">Manage</button>
          </div>
        </div>
      </section>

      {/* Profile Settings */}
      <section className="mb-8 p-6 bg-white shadow rounded">
        <h3 className="text-xl font-semibold mb-4">Profile Settings</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700">Update Contact Info</label>
            <input type="text" className="w-full p-2 border rounded" placeholder="Email/Phone" />
          </div>
          <div>
            <label className="block text-gray-700">Update Password</label>
            <input type="password" className="w-full p-2 border rounded" placeholder="New Password" />
          </div>
          <div>
            <h4 className="font-medium">Account History</h4>
            <p>Joined: July 1, 2025</p>
          </div>
          <button className="w-full bg-blue-600 text-white p-2 rounded">Save Changes</button>
        </div>
      </section>

      {/* Support */}
      <section className="mb-8 p-6 bg-white shadow rounded">
        <h3 className="text-xl font-semibold mb-4">Support</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium">Contact Support</h4>
            <button className="bg-blue-600 text-white p-2 rounded">Chat Now</button>
          </div>
          <div>
            <h4 className="font-medium">FAQ/Help Center</h4>
            <a href="#" className="text-blue-600">Visit Help Center</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;