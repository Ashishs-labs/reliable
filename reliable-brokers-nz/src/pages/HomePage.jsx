import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [isBusiness, setIsBusiness] = useState(false);
  const [calculatorData, setCalculatorData] = useState({
    loanAmount: 750000,
    interestRate: 6.5,
    loanTerm: 30,
    frequency: 'fortnightly'
  });
  const [repayment, setRepayment] = useState(0);

  // Paint text animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-paint-text');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.paint-text').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Calculate repayments
  useEffect(() => {
    const principal = calculatorData.loanAmount;
    const monthlyRate = calculatorData.interestRate / 100 / 12;
    const numPayments = calculatorData.loanTerm * 12;

    if (monthlyRate === 0) {
      const monthlyPayment = principal / numPayments;
      setRepayment(monthlyPayment * (calculatorData.frequency === 'weekly' ? 0.23 : calculatorData.frequency === 'fortnightly' ? 0.46 : 1));
    } else {
      const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
      setRepayment(monthlyPayment * (calculatorData.frequency === 'weekly' ? 0.23 : calculatorData.frequency === 'fortnightly' ? 0.46 : 1));
    }
  }, [calculatorData]);

  const handleSliderChange = (field, value) => {
    setCalculatorData(prev => ({ ...prev, [field]: parseFloat(value) }));
  };

  const services = [
    {
      title: 'Home Loans',
      description: 'Expert guidance for your first home or next property purchase with competitive rates from 26+ lenders.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&q=80'
    },
    {
      title: 'Refinancing',
      description: 'Switch to better rates and terms. Save thousands with our expert negotiation and market comparison.',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop&q=80'
    },
    {
      title: 'Investment Properties',
      description: 'Strategic advice for building your property portfolio with tax-efficient structures and positive cashflow.',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop&q=80'
    },
    {
      title: 'Pre-Approval',
      description: 'Get pre-approved fast and shop with confidence. Know your budget before you make an offer.',
      image: 'https://images.unsplash.com/photo-1556740758-90de2929450a?w=800&h=600&fit=crop&q=80'
    },
    {
      title: 'Building Loans',
      description: 'Construction finance tailored to your build. Progress payments and flexible terms for your dream home.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop&q=80'
    },
    {
      title: 'Business Lending',
      description: 'Commercial loans, equipment finance, and working capital solutions to grow your business.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=80'
    }
  ];

  const steps = [
    { number: '01', title: 'Initial Consultation', description: 'Free 30-min call to understand your goals and situation' },
    { number: '02', title: 'Needs Analysis', description: 'Deep dive into your financial position and borrowing capacity' },
    { number: '03', title: 'Strategy Design', description: 'Custom mortgage strategy tailored to your unique circumstances' },
    { number: '04', title: 'Implementation', description: 'We handle all paperwork, negotiations, and lender coordination' },
    { number: '05', title: 'Ongoing Support', description: 'Annual reviews and lifetime support for all your clients' }
  ];

  const lenders = ['ANZ', 'ASB', 'BNZ', 'Kiwibank', 'Westpac', 'TSB'];

  return (
    <div className="pt-20">
      {/* Full-Width Hero Section with Toggle */}
      <section className="relative overflow-hidden">
        {/* Background Image - Full Width */}
        <div className="absolute inset-0 z-0">
          <img 
            src={isBusiness 
              ? 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop&q=80'
              : 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=1080&fit=crop&q=80'
            }
            alt={isBusiness ? 'Business team' : 'Family in new home'}
            className="w-full h-[700px] object-cover"
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-white/20">
              <span>🏆</span>
              <span>Auckland's Trusted Mortgage Advisers</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
              {isBusiness ? (
                <>
                  Business Finance<br />
                  <span className="paint-text bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 bg-[length:200%_100%] bg-clip-text text-transparent">Made Simple</span>
                </>
              ) : (
                <>
                  Your Dream Home<br />
                  <span className="paint-text bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 bg-[length:200%_100%] bg-clip-text text-transparent">Starts Here</span>
                </>
              )}
            </h1>
            
            <p className="text-xl text-slate-200 mb-8 leading-relaxed">
              {isBusiness 
                ? 'Specialised commercial lending solutions for NZ businesses. From equipment finance to working capital, we secure the funding you need to grow.'
                : 'Expert mortgage advice for first home buyers, refinancing, and property investors. We compare 26+ lenders to find your perfect loan.'}
            </p>

            {/* Toggle Switch */}
            <div className="flex items-center space-x-4 mb-8 bg-white/10 backdrop-blur-sm inline-flex px-6 py-3 rounded-full border border-white/20">
              <span className={`font-semibold ${!isBusiness ? 'text-white' : 'text-slate-300'}`}>Personal</span>
              <button 
                onClick={() => setIsBusiness(!isBusiness)}
                className={`relative w-16 h-8 rounded-full transition-colors ${isBusiness ? 'bg-blue-500' : 'bg-slate-400'}`}
              >
                <span className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform ${isBusiness ? 'left-9' : 'left-1'}`} />
              </button>
              <span className={`font-semibold ${isBusiness ? 'text-white' : 'text-slate-300'}`}>Business</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/resources/calculator" className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 text-center">
                Calculate Repayments
              </Link>
              <Link to="/contact-us" className="bg-white text-slate-900 px-8 py-4 rounded-full font-semibold hover:bg-slate-100 transition-all text-center">
                Speak to an Adviser
              </Link>
            </div>

            <div className="mt-12 flex items-center space-x-8 text-white">
              <div>
                <p className="text-4xl font-bold">2,500+</p>
                <p className="text-slate-300">Happy Clients</p>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div>
                <p className="text-4xl font-bold">$850M+</p>
                <p className="text-slate-300">Loans Secured</p>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div>
                <p className="text-4xl font-bold">15+ Years</p>
                <p className="text-slate-300">Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mortgage Calculator */}
      <section id="calculator" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Calculate Your Repayments</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Get instant estimates on your mortgage repayments. Adjust the sliders to see different scenarios.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Loan Amount: ${calculatorData.loanAmount.toLocaleString()}</label>
                <input type="range" min="100000" max="2000000" step="10000" value={calculatorData.loanAmount} onChange={(e) => handleSliderChange('loanAmount', e.target.value)} className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"/>
                <div className="flex justify-between text-xs text-slate-500 mt-1"><span>$100k</span><span>$2M</span></div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Interest Rate: {calculatorData.interestRate}%</label>
                <input type="range" min="1" max="15" step="0.1" value={calculatorData.interestRate} onChange={(e) => handleSliderChange('interestRate', e.target.value)} className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"/>
                <div className="flex justify-between text-xs text-slate-500 mt-1"><span>1%</span><span>15%</span></div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Loan Term: {calculatorData.loanTerm} Years</label>
                <input type="range" min="5" max="40" step="1" value={calculatorData.loanTerm} onChange={(e) => handleSliderChange('loanTerm', e.target.value)} className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"/>
                <div className="flex justify-between text-xs text-slate-500 mt-1"><span>5 yrs</span><span>40 yrs</span></div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">Repayment Frequency</label>
                <div className="flex gap-2">
                  {['weekly', 'fortnightly', 'monthly'].map((freq) => (
                    <button key={freq} onClick={() => handleSliderChange('frequency', freq)} className={`flex-1 py-3 rounded-lg font-semibold transition-all ${calculatorData.frequency === freq ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-600'}`}>
                      {freq.charAt(0).toUpperCase() + freq.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-10 text-center border border-slate-100">
              <p className="text-slate-600 mb-2 text-sm uppercase tracking-wide font-semibold">Your Estimated Repayment</p>
              <p className="text-6xl font-bold text-blue-600 mb-4">${repayment.toFixed(2)}</p>
              <p className="text-slate-500 mb-8">per {calculatorData.frequency}</p>
              <div className="border-t pt-6">
                <p className="text-sm text-slate-600 mb-1">Total Interest Payable</p>
                <p className="text-3xl font-bold text-slate-900">${(repayment * (calculatorData.frequency === 'weekly' ? 52 : calculatorData.frequency === 'fortnightly' ? 26 : 12) * calculatorData.loanTerm - calculatorData.loanAmount).toLocaleString(undefined, {maximumFractionDigits: 0})}</p>
              </div>
              <Link to="/contact-us" className="mt-8 block bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all transform hover:scale-105">Get Pre-Approved Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Comprehensive mortgage and finance solutions tailored to your unique situation.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100">
                <div className="h-56 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                  <Link to="/contact-us" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center group-hover:gap-2 transition-all">
                    Learn More 
                    <svg className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <section id="process" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">Our proven 5-step process makes getting your mortgage simple and stress-free.</p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">{step.number}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-slate-300 leading-relaxed">{step.description}</p>
                {index < steps.length - 1 && <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-slate-700 to-slate-600"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lender Logo Wall */}
      <section id="lenders" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">We Work With All Major Lenders</h2>
            <p className="text-xl text-slate-600">Compare offers from 26+ banks and non-bank lenders to find your best deal.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {lenders.map((lender, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-8 flex items-center justify-center h-24 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <span className="text-2xl font-bold text-slate-700">{lender}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">Book your free consultation today and discover how we can help you achieve your property dreams.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-us" className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-100 transition-all transform hover:scale-105 shadow-xl">
              Book Free Call
            </Link>
            <a href="tel:0800735422" className="bg-blue-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-400 transition-all transform hover:scale-105 shadow-xl border-2 border-white/20">
              Call 0800 RELIABLE
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes paint-text {
          0% { background-position: 200% center; }
          100% { background-position: 0% center; }
        }
        .animate-paint-text {
          animation: paint-text 3s ease-out forwards;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
