import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function QuoteRequest() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    currentLocation: '',
    destinationLocation: '',
    moveType: 'Local House Move',
    bedrooms: '1br',
    moveDate: '',
    howFound: 'Referrals',
  });
  const [errors, setErrors] = useState({});

  const closeQuoteRequest = () => navigate('/');

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.mobile.trim() || !/^\d{10}$/.test(formData.mobile)) newErrors.mobile = 'Valid 10-digit mobile number is required';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.currentLocation.trim()) newErrors.currentLocation = 'Current Location is required';
    if (!formData.destinationLocation.trim()) newErrors.destinationLocation = 'Destination Location is required';
    if (!formData.moveDate) newErrors.moveDate = 'Move Date is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      alert('Quote request submitted successfully!');
      navigate('/');
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-blue-600">Request a Quote</h3>
          <button onClick={closeQuoteRequest} className="text-gray-500 hover:text-gray-700">×</button>
        </div>
        <p className="text-blue-600 mb-4">Feel Free To Ask</p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full p-2 border rounded ${errors.fullName ? 'border-red-500' : ''}`}
              placeholder="John Doe"
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
          </div>
          <div>
            <label className="block text-gray-700">Mobile</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className={`w-full p-2 border rounded ${errors.mobile ? 'border-red-500' : ''}`}
              placeholder="0700000000"
            />
            {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-2 border rounded ${errors.email ? 'border-red-500' : ''}`}
              placeholder="john@gmail.com"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-gray-700">Current Location</label>
            <input
              type="text"
              name="currentLocation"
              value={formData.currentLocation}
              onChange={handleChange}
              className={`w-full p-2 border rounded ${errors.currentLocation ? 'border-red-500' : ''}`}
              placeholder="City, State"
            />
            {errors.currentLocation && <p className="text-red-500 text-sm">{errors.currentLocation}</p>}
          </div>
          <div>
            <label className="block text-gray-700">Destination Location</label>
            <input
              type="text"
              name="destinationLocation"
              value={formData.destinationLocation}
              onChange={handleChange}
              className={`w-full p-2 border rounded ${errors.destinationLocation ? 'border-red-500' : ''}`}
              placeholder="Nairobi CBD"
            />
            {errors.destinationLocation && <p className="text-red-500 text-sm">{errors.destinationLocation}</p>}
          </div>
          <div>
            <label className="block text-gray-700">Move Type</label>
            <select
              name="moveType"
              value={formData.moveType}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option>Local House Move</option>
              <option>Long Distance</option>
              <option>Office</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Number of Bedrooms</label>
            <select
              name="bedrooms"
              value={formData.bedrooms}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option>1br</option>
              <option>2br</option>
              <option>3br</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Move Date</label>
            <input
              type="date"
              name="moveDate"
              value={formData.moveDate}
              onChange={handleChange}
              className={`w-full p-2 border rounded ${errors.moveDate ? 'border-red-500' : ''}`}
            />
            {errors.moveDate && <p className="text-red-500 text-sm">{errors.moveDate}</p>}
          </div>
          <div>
            <label className="block text-gray-700">How You Found Us</label>
            <select
              name="howFound"
              value={formData.howFound}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option>Referrals</option>
              <option>Search Engine</option>
              <option>Social Media</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-200"
            disabled={Object.keys(errors).length > 0}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default QuoteRequest;