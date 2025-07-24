import React from 'react';

function Home() {
  return (
    <div className="container mx-auto p-4">
      <section className="text-center py-16 bg-blue-600 text-white">
        <h1 className="text-4xl font-bold">Ready to Make Your Move?</h1>
        <p className="mt-4">Join thousands of satisfied customers who trust Move Mate for their relocation needs.</p>
        <button className="mt-6 bg-white text-blue-600 px-6 py-2 rounded">Start Your Move Today</button>
      </section>
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center">Why Choose Move Mate?</h2>
        <p className="text-center text-gray-600 mt-2">We make moving stress-free with our comprehensive platform and trusted network of movers.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="p-6 bg-white shadow rounded">
            <svg className="w-12 h-12 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold">Verified Movers</h3>
            <p className="text-gray-600">All movers are background-checked, insured, and verified for your peace of mind.</p>
          </div>
          <div className="p-6 bg-white shadow rounded">
            <svg className="w-12 h-12 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold">Transparent Pricing</h3>
            <p className="text-gray-600">No hidden fees. Get upfront quotes and only pay when your move is complete.</p>
          </div>
          <div className="p-6 bg-white shadow rounded">
            <svg className="w-12 h-12 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            <h3 className="text-xl font-semibold">Real-Time Tracking</h3>
            <p className="text-gray-600">Track your move from start to finish with live updates and GPS tracking.</p>
          </div>
          <div className="p-6 bg-white shadow rounded">
            <svg className="w-12 h-12 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold">Quality Guarantee</h3>
            <p className="text-gray-600">Our rating system ensures only the best movers stay on our platform.</p>
          </div>
          <div className="p-6 bg-white shadow rounded">
            <svg className="w-12 h-12 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0-1.1-.9-2-2-2s-2 .9-2 2 1 2 2 2 2-.9 2-2zm0 0c0 1.1.9 2 2 2s2-.9 2-2-1-2-2-2-2 .9-2 2zm6-6H6v12h12V5z" />
            </svg>
            <h3 className="text-xl font-semibold">24/7 Support</h3>
            <p className="text-gray-600">Our customer service team is available around the clock to help you.</p>
          </div>
          <div className="p-6 bg-white shadow rounded">
            <svg className="w-12 h-12 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold">Full Coverage</h3>
            <p className="text-gray-600">Comprehensive insurance coverage protects your belongings during the move.</p>
          </div>
        </div>
      </section>
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold">How Move Mate Works</h2>
        <p className="text-center text-gray-600 mt-2">Get your move done in 3 simple steps. Our platform connects you with the best movers in your area.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full mx-auto flex items-center justify-center">1</div>
            <h3 className="text-xl font-semibold mt-4">Tell Us About Your Move</h3>
            <p className="text-gray-600">Fill out our simple form with your moving details, dates, and specific requirements.</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-yellow-500 text-white rounded-full mx-auto flex items-center justify-center">2</div>
            <h3 className="text-xl font-semibold mt-4">Get Matched & Compare</h3>
            <p className="text-gray-600">Receive quotes from verified movers, compare prices, reviews, and services.</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-600 text-white rounded-full mx-auto flex items-center justify-center">3</div>
            <h3 className="text-xl font-semibold mt-4">Book & Track Your Move</h3>
            <p className="text-gray-600">Choose your mover, pay securely, and track your move in real-time through completion.</p>
          </div>
        </div>
      </section>
      <section className="py-16 text-center bg-gray-100">
        <h2 className="text-3xl font-bold">Moving Made Simple & Stress-Free</h2>
        <p className="text-gray-600 mt-2">Connect with verified, trusted movers in your area. Get instant quotes, book your move, and track everything in real-time. Moving has never been this easy.</p>
        <div className="mt-6">
          <button className="bg-blue-600 text-white px-6 py-2 rounded mr-4">Get Free Quote</button>
          <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded">Call Now</button>
        </div>
        <div className="mt-8 flex justify-center space-x-8 text-gray-600">
          <div>50K+ Happy Customers</div>
          <div>98% Success Rate</div>
          <div>24/7 Support</div>
        </div>
        <div className="mt-4">
          <input type="text" placeholder="Get Instant Quote" className="p-2 border rounded" />
          <button className="bg-blue-600 text-white px-4 py-2 rounded ml-2">Book This Move</button>
        </div>
      </section>
      <footer className="py-4 text-center text-gray-600">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src={"src/assets/Movemate logo.png"} alt="Move Mate Logo" className="h-8 mb-2" />
            <p>Making moving simple, stress-free, and affordable for everyone.</p>
          </div>
          <div>
            <h4 className="font-semibold">Services</h4>
            <p>Local Moving</p>
            <p>Long Distance</p>
            <p>Office Moving</p>
            <p>Packing Services</p>
          </div>
          <div>
            <h4 className="font-semibold">Company</h4>
            <p>About Us</p>
            <p>How It Works</p>
            <p>Become a Mover</p>
            <p>Support</p>
          </div>
          <div>
            <h4 className="font-semibold">Contact</h4>
            <p>1-800-MOVEMATE</p>
            <p>support@movemate.com</p>
            <p>Live Chat 24/7</p>
          </div>
        </div>
        <p className="mt-4">© 2024 Move Mate. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;