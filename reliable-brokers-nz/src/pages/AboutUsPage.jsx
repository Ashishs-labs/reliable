import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutUsPage() {
  return (
    <div className="pt-20">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&h=800&fit=crop&q=80" alt="Our team" className="w-full h-[500px] object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">About Us</span>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">Your Trusted Mortgage Partners Since 2009</h1>
            <p className="text-xl text-slate-200 mb-8">We're a team of experienced mortgage advisers dedicated to helping Kiwis achieve their property dreams through expert advice and personalised service.</p>
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62d4baf?w=800&h=600&fit=crop&q=80" alt="Team meeting" className="rounded-2xl shadow-xl"/>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Choose Reliable Brokers NZ?</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">With over 15 years of experience in the New Zealand lending industry, we've helped more than 2,500 clients secure over $850 million in loans.</p>
              <ul className="space-y-4">
                <li className="flex items-start"><span className="text-blue-600 mr-3 text-xl">✓</span><span className="text-slate-700">Access to 26+ lenders including all major banks</span></li>
                <li className="flex items-start"><span className="text-blue-600 mr-3 text-xl">✓</span><span className="text-slate-700">Free, unbiased advice - we work for you, not the banks</span></li>
                <li className="flex items-start"><span className="text-blue-600 mr-3 text-xl">✓</span><span className="text-slate-700">Expert negotiation to secure the best rates</span></li>
                <li className="flex items-start"><span className="text-blue-600 mr-3 text-xl">✓</span><span className="text-slate-700">Ongoing support throughout your loan lifetime</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold text-blue-600 mb-2">2,500+</p>
              <p className="text-slate-600">Happy Clients</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-blue-600 mb-2">$850M+</p>
              <p className="text-slate-600">Loans Secured</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-blue-600 mb-2">15+</p>
              <p className="text-slate-600">Years Experience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
