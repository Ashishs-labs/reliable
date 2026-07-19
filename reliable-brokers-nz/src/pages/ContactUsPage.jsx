import React, { useState } from 'react';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', interest: '', message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will be in touch shortly.');
  };

  return (
    <div className="pt-20">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=800&fit=crop&q=80" alt="Contact us" className="w-full h-[500px] object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">Contact Us</span>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">Get Your Free Consultation</h1>
            <p className="text-xl text-slate-200">No obligation, no pressure. Just expert advice tailored to your needs.</p>
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-100">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                <input type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"/>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                <input type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"/>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                <input type="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"/>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Phone</label>
                <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"/>
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-700 mb-2">I'm interested in</label>
              <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all">
                <option>Buying my first home</option>
                <option>Refinancing existing mortgage</option>
                <option>Investment property</option>
                <option>Pre-approval</option>
                <option>Other</option>
              </select>
            </div>
            <div className="mb-8">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
              <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all transform hover:scale-105">Request Free Call</button>
          </form>
          
          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-slate-600 mb-2">Phone</p>
              <a href="tel:0800735422" className="text-blue-600 font-bold text-lg">0800 RELIABLE</a>
            </div>
            <div>
              <p className="text-slate-600 mb-2">Email</p>
              <a href="mailto:hello@reliablebrokers.co.nz" className="text-blue-600 font-bold">hello@reliablebrokers.co.nz</a>
            </div>
            <div>
              <p className="text-slate-600 mb-2">Address</p>
              <p className="text-slate-900 font-semibold">208 Ponsonby Road, Auckland</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
