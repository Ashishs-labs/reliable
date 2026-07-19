import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeOwnersPage() {
  return (
    <div className="pt-20">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1920&h=800&fit=crop&q=80" alt="Home owners" className="w-full h-[500px] object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">Home Owners</span>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">Make Your Mortgage Work Harder</h1>
            <p className="text-xl text-slate-200 mb-8">Whether you're looking to refinance, access equity, or restructure your loan, we help home owners save thousands and achieve their financial goals.</p>
            <Link to="/contact-us" className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all inline-block">Book Free Review</Link>
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Refinance & Save</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">Your existing bank might not offer you the best rate. We compare all major lenders to find you a better deal. Many of our clients save $200-$500 per month by refinancing.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-slate-700"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Lower interest rates</li>
                <li className="flex items-center text-slate-700"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Consolidate debt</li>
                <li className="flex items-center text-slate-700"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Access equity for renovations</li>
              </ul>
              <Link to="/mortgages/refinance" className="text-blue-600 font-semibold hover:text-blue-700">Learn more about refinancing →</Link>
            </div>
            <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop&q=80" alt="Refinancing" className="rounded-2xl shadow-xl"/>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Review Your Mortgage?</h2>
          <p className="text-slate-600 mb-8">Book a free consultation and discover how much you could save.</p>
          <Link to="/contact-us" className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-700 transition-all inline-block">Get Started</Link>
        </div>
      </section>
    </div>
  );
}
