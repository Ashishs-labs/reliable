import React from 'react';
import { Link } from 'react-router-dom';

export default function MortgagePage() {
  return (
    <div className="pt-20">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=800&fit=crop&q=80" alt="Mortgage services" className="w-full h-[500px] object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">Mortgages</span>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">Expert Mortgage Solutions</h1>
            <p className="text-xl text-slate-200 mb-8">We provide personalised mortgage advice tailored to your unique situation. Contact us today for a free consultation.</p>
            <Link to="/contact-us" className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all inline-block">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
