import React, { useState } from 'react';

function Pricing() {
  const [formData, setFormData] = useState({
    moveType: 'local',
    distance: '',
    truckSize: 'small',
    rooms: '1',
    movers: '2',
    floorNumber: 'ground',
    packingServices: false,
    assemblyServices: false,
    specialItems: '',
    moveDateTime: 'weekday',
    insurance: false,
  });
  const [estimate, setEstimate] = useState(null);

  const calculateEstimate = (e) => {
    e.preventDefault();
    let baseCost = 0;

    // Base rates by move type
    const moveTypeRates = {
      local: 100,
      'long-distance': 250,
      office: 300,
      interstate: 500,
    };
    baseCost += moveTypeRates[formData.moveType] || 100;

    // Distance cost ($0.50/km for local, $1/km for long-distance/interstate)
    const distanceCost = parseFloat(formData.distance) || 0;
    const distanceRate = formData.moveType === 'local' ? 0.5 : 1;
    baseCost += distanceCost * distanceRate;

    // Truck size multiplier
    const truckMultipliers = {
      small: 1.0,
      medium: 1.5,
      large: 2.0,
    };
    baseCost *= truckMultipliers[formData.truckSize];

    // Rooms multiplier
    const roomsMultipliers = {
      '1': 1.0,
      '2': 1.5,
      '3': 2.0,
      '4': 2.5,
      '5+': 3.0,
    };
    baseCost *= roomsMultipliers[formData.rooms];

    // Movers cost (flat rate per mover)
    const moversCost = parseInt(formData.movers) * 50;
    baseCost += moversCost;

    // Floor number surcharge
    const floorSurcharges = {
      ground: 0,
      '1-3': 20,
      '4+': 50,
    };
    baseCost += floorSurcharges[formData.floorNumber];

    // Optional services
    if (formData.packingServices) baseCost += 30; // $30 flat rate
    if (formData.assemblyServices) baseCost += 50; // $50 flat rate

    // Special items surcharge
    const specialItemSurcharges = {
      piano: 100,
      safe: 150,
      fragile: 50,
    };
    if (formData.specialItems) {
      const items = formData.specialItems.split(',').map(item => item.trim());
      baseCost += items.reduce((sum, item) => sum + (specialItemSurcharges[item.toLowerCase()] || 0), 0);
    }

    // Move date/time surcharge
    const dateTimeSurcharge = formData.moveDateTime === 'weekend' || formData.moveDateTime === 'same-day' ? 50 : 0;
    baseCost += dateTimeSurcharge;

    // Insurance (5% of base cost)
    if (formData.insurance) baseCost += baseCost * 0.05;

    setEstimate(baseCost.toFixed(2));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">Pricing Estimates</h1>
      <p className="text-center text-gray-600 mb-6">Get an approximate cost for your move based on various factors.</p>
      
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={calculateEstimate} className="space-y-4">
          <div>
            <label className="block text-gray-700">Type of Move</label>
            <select
              name="moveType"
              value={formData.moveType}
              onChange={handleChange}
              className="w-full p-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="local">Local</option>
              <option value="long-distance">Long-Distance</option>
              <option value="office">Office</option>
              <option value="interstate">Interstate</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Distance (km)</label>
            <input
              type="number"
              name="distance"
              value={formData.distance}
              onChange={handleChange}
              className="w-full p-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter distance in kilometers"
              min="0"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Truck Size</label>
            <select
              name="truckSize"
              value={formData.truckSize}
              onChange={handleChange}
              className="w-full p-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="small">Small (Van)</option>
              <option value="medium">Medium</option>
              <option value="large">Large (20ft/40ft)</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Number of Rooms</label>
            <select
              name="rooms"
              value={formData.rooms}
              onChange={handleChange}
              className="w-full p-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="1">1 Bedroom</option>
              <option value="2">2 Bedroom</option>
              <option value="3">3 Bedroom</option>
              <option value="4">4 Bedroom</option>
              <option value="5+">5+ Bedroom</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Number of Movers</label>
            <select
              name="movers"
              value={formData.movers}
              onChange={handleChange}
              className="w-full p-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Floor Number</label>
            <select
              name="floorNumber"
              value={formData.floorNumber}
              onChange={handleChange}
              className="w-full p-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="ground">Ground Floor</option>
              <option value="1-3">1-3 Floors</option>
              <option value="4+">4+ Floors</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">
              <input
                type="checkbox"
                name="packingServices"
                checked={formData.packingServices}
                onChange={handleChange}
              /> Packing Services ($30)
            </label>
          </div>
          <div>
            <label className="block text-gray-700">
              <input
                type="checkbox"
                name="assemblyServices"
                checked={formData.assemblyServices}
                onChange={handleChange}
              /> Assembly/Disassembly ($50)
            </label>
          </div>
          <div>
            <label className="block text-gray-700">Special Items (comma-separated, e.g., piano,safe)</label>
            <input
              type="text"
              name="specialItems"
              value={formData.specialItems}
              onChange={handleChange}
              className="w-full p-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="e.g., piano, fragile"
            />
          </div>
          <div>
            <label className="block text-gray-700">Move Date/Time</label>
            <select
              name="moveDateTime"
              value={formData.moveDateTime}
              onChange={handleChange}
              className="w-full p-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="weekday">Weekday</option>
              <option value="weekend">Weekend (+$50)</option>
              <option value="same-day">Same Day (+$50)</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">
              <input
                type="checkbox"
                name="insurance"
                checked={formData.insurance}
                onChange={handleChange}
              /> Insurance (5% of total)
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Calculate Estimate
          </button>
        </form>
        {estimate !== null && (
          <div className="mt-4 text-center">
            <p className="text-lg font-semibold text-green-600">Estimated Cost: ${estimate}</p>
            <p className="text-sm text-gray-500 mt-2">
              * This is an estimate only. Please contact us for an exact quote.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Pricing;