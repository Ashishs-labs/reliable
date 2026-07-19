import React from 'react';
import { Link } from 'react-router-dom';

export default function PropertyInvestorsPage() {
  return (
    <div className="pt-20">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1920&h=800&fit=crop&q=80" alt="Property investors" className="w-full h-[500px] object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">Property Investors</span>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">Build Your Property Portfolio</h1>
            <p className="text-xl text-slate-200 mb-8">Strategic mortgage solutions for property investors. From positive cashflow structuring to portfolio expansion, we help you build wealth through property.</p>
            <Link to="/contact-us" className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all inline-block">Free Investment Consultation</Link>
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Positive Cashflow Structuring</h3>
              <p className="text-slate-600">We structure your loans to maximise tax efficiency and improve cashflow through strategic use of offset accounts and revolving credit facilities.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Portfolio Expansion</h3>
              <p className="text-slate-600">Access equity from existing properties to fund your next investment. We work with lenders who understand investor needs.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Development Finance</h3>
              <p className="text-slate-600">From small subdivisions to large developments, we connect you with lenders specialising in development finance.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Expand Your Portfolio?</h2>
          <p className="text-slate-300 mb-8">Speak with our investment specialists today.</p>
          <Link to="/contact-us" className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-700 transition-all inline-block">Book Consultation</Link>
        </div>
      </section>
    </div>
  );
}
