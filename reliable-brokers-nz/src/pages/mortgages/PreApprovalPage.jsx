import React from 'react';
import { Link } from 'react-router-dom';
export default function PreApprovalPage() {
  return (
    <div className="pt-20">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1556740758-90de2929450a?w=1920&h=800&fit=crop&q=80" alt="Pre-approval" className="w-full h-[500px] object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">Pre-Approval</span>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">Get Pre-Approved Fast</h1>
            <p className="text-xl text-slate-200 mb-8">Know your budget before you make an offer. Our pre-approval service gives you confidence when house hunting in Auckland's competitive market.</p>
            <Link to="/contact-us" className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all inline-block">Apply Now</Link>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Get Pre-Approved?</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6"><p className="text-slate-600">Know your exact budget</p></div>
            <div className="p-6"><p className="text-slate-600">Shop with confidence</p></div>
            <div className="p-6"><p className="text-slate-600">Faster settlement</p></div>
          </div>
        </div>
      </section>
    </div>
  );
}
