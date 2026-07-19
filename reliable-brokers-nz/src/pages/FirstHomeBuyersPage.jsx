import React from 'react';
import { Link } from 'react-router-dom';

export default function FirstHomeBuyersPage() {
  const features = [
    {
      title: 'KiwiSaver First Home Withdrawal',
      description: 'Access your KiwiSaver savings for your first home deposit. We guide you through the entire process.',
      image: 'https://images.unsplash.com/photo-1556740758-90de2929450a?w=800&h=600&fit=crop&q=80'
    },
    {
      title: 'First Home Grant',
      description: 'Eligible first home buyers can receive up to $10,000 per person through the Kāinga Ora First Home Grant.',
      image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&h=600&fit=crop&q=80'
    },
    {
      title: 'Pre-Approval Service',
      description: 'Get pre-approved before house hunting. Know your budget and shop with confidence in a competitive market.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&q=80'
    }
  ];

  const steps = [
    { number: '01', title: 'Free Consultation', description: 'Understand your borrowing capacity and eligibility for grants' },
    { number: '02', title: 'Document Gathering', description: 'We help you prepare all necessary documentation for approval' },
    { number: '03', title: 'Pre-Approval', description: 'Get conditional approval so you can make offers with confidence' },
    { number: '04', title: 'House Hunting', description: 'Search within your budget with our expert guidance' },
    { number: '05', title: 'Unconditional Approval', description: 'Final approval once you find the perfect property' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section - Full Width */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=800&fit=crop&q=80"
            alt="First home buyers"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">First Home Buyers</span>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">Your First Home Journey Starts Here</h1>
            <p className="text-xl text-slate-200 mb-8 leading-relaxed">
              Buying your first home is exciting but can feel overwhelming. Our expert mortgage advisers 
              specialise in helping first home buyers navigate the process, access grants, and secure 
              the best possible loan for your situation.
            </p>
            <div className="flex gap-4">
              <Link to="/contact-us" className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all">Book Free Consultation</Link>
              <Link to="/mortgages/pre-approval" className="bg-white text-slate-900 px-8 py-4 rounded-full font-semibold hover:bg-slate-100 transition-all">Get Pre-Approved</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">First Home Buyer Support</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Everything you need to know about buying your first home in New Zealand.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-slate-100">
                <div className="h-48 overflow-hidden">
                  <img src={feature.image} alt={feature.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 mb-4">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Your First Home Journey</h2>
            <p className="text-xl text-slate-600">Our proven process makes buying your first home simple and stress-free.</p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold text-white">{step.number}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-blue-100 mb-8">Book your free consultation today and take the first step towards homeownership.</p>
          <Link to="/contact-us" className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold hover:bg-slate-100 transition-all inline-block">Book Free Call</Link>
        </div>
      </section>
    </div>
  );
}
