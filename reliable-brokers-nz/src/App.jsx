import React, { useState, useEffect } from 'react'

// Header Component
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=120&h=120&fit=crop" alt="Reliable Brokers Logo" className="w-12 h-12 rounded-full object-cover shadow-md" />
            <div>
              <h1 className="text-xl font-bold text-primary-900 font-display">Reliable Brokers</h1>
              <p className="text-xs text-gray-500">Auckland Mortgage Advisers</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Home</a>
            <a href="#services" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Services</a>
            <a href="#calculator" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Calculator</a>
            <a href="#process" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Process</a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Testimonials</a>
            <a href="#contact" className="bg-primary-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-primary-700 transition-colors shadow-md">Get Started</a>
          </nav>
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t flex flex-col space-y-4">
            <a href="#home" className="text-gray-700 hover:text-primary-600 font-medium" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#services" className="text-gray-700 hover:text-primary-600 font-medium" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#calculator" className="text-gray-700 hover:text-primary-600 font-medium" onClick={() => setMobileMenuOpen(false)}>Calculator</a>
            <a href="#process" className="text-gray-700 hover:text-primary-600 font-medium" onClick={() => setMobileMenuOpen(false)}>Process</a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary-600 font-medium" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
            <a href="#contact" className="bg-primary-600 text-white px-6 py-2.5 rounded-full font-medium text-center" onClick={() => setMobileMenuOpen(false)}>Get Started</a>
          </div>
        )}
      </div>
    </header>
  )
}

// Hero Section with Toggle
const Hero = ({ activeToggle, setActiveToggle }) => (
  <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary-50 via-white to-accent-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex bg-gray-100 rounded-full p-1.5 shadow-inner">
            <button onClick={() => setActiveToggle('personal')} className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${activeToggle === 'personal' ? 'bg-primary-600 text-white shadow-lg' : 'text-gray-600 hover:text-primary-600'}`}>Personal</button>
            <button onClick={() => setActiveToggle('business')} className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${activeToggle === 'business' ? 'bg-primary-600 text-white shadow-lg' : 'text-gray-600 hover:text-primary-600'}`}>Business</button>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-display">
            {activeToggle === 'personal' ? (
              <><span className="paint-text">Your Dream Home</span><br /><span className="text-gray-800">Starts With the Right Mortgage</span></>
            ) : (
              <><span className="paint-text">Business Growth</span><br /><span className="text-gray-800">Powered by Smart Financing</span></>
            )}
          </h1>
          <p className="text-lg text-gray-600 max-w-xl">
            {activeToggle === 'personal' 
              ? "We help New Zealanders secure the best home loans with personalized advice from Auckland's most trusted mortgage advisers." 
              : "Strategic business financing solutions tailored to your company's needs. Access competitive rates from all major NZ lenders."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#calculator" className="bg-primary-600 text-white px-8 py-4 rounded-full font-semibold text-center hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl">Calculate Your Repayments</a>
            <a href="#contact" className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-full font-semibold text-center hover:bg-primary-50 transition-all">Book Free Consultation</a>
          </div>
          <div className="flex items-center gap-8 pt-4">
            <div className="text-center"><p className="text-3xl font-bold text-primary-600">$500M+</p><p className="text-sm text-gray-500">Loans Arranged</p></div>
            <div className="text-center"><p className="text-3xl font-bold text-primary-600">2,500+</p><p className="text-sm text-gray-500">Happy Clients</p></div>
            <div className="text-center"><p className="text-3xl font-bold text-primary-600">15+</p><p className="text-sm text-gray-500">Years Experience</p></div>
          </div>
        </div>
        <div className="relative hidden md:block">
          <img 
            src={activeToggle === 'personal' 
              ? "https://images.unsplash.com/photo-1560518883-9c68b8c7e7f9?w=600&h=700&fit=crop" 
              : "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=700&fit=crop"} 
            alt={activeToggle === 'personal' ? "Happy couple with their new home" : "Business professional in office"} 
            className="rounded-2xl shadow-2xl object-cover w-full h-[600px]" 
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=48&h=48&fit=crop" alt="Client" className="w-12 h-12 rounded-full object-cover" />
              </div>
              <div><p className="font-bold text-gray-800">4.9/5 Rating</p><p className="text-sm text-gray-500">From 500+ Reviews</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

// Services Section
const Services = () => {
  const services = [
    {
      title: "Home Loans",
      description: "Secure competitive rates for your first home, investment property, or refinancing. We compare all major NZ lenders.",
      image: "https://images.unsplash.com/photo-1560518883-9c68b8c7e7f9?w=400&h=300&fit=crop"
    },
    {
      title: "Business Finance",
      description: "Tailored financing solutions for startups, SMEs, and established businesses. Working capital, equipment finance & more.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop"
    },
    {
      title: "Property Investment",
      description: "Strategic advice for building your property portfolio. Maximize returns with smart lending structures.",
      image: "https://images.unsplash.com/photo-1582407973089-7d9a3f6f8c6c?w=400&h=300&fit=crop"
    },
    {
      title: "Refinancing",
      description: "Review your existing loan and potentially save thousands. Lower rates, better terms, or access equity.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop"
    },
    {
      title: "First Home Buyers",
      description: "Navigate your first purchase with confidence. KiwiSaver withdrawals, grants, and low deposit options.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop"
    },
    {
      title: "Asset Finance",
      description: "Finance vehicles, machinery, and equipment with flexible terms that suit your cash flow.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop"
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Our <span className="paint-text">Services</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Comprehensive financial solutions tailored to your unique situation. We work with all major New Zealand lenders.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="relative overflow-hidden h-48">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a href="#contact" className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Calculator Section
const Calculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000)
  const [interestRate, setInterestRate] = useState(6.5)
  const [loanTerm, setLoanTerm] = useState(30)
  const [frequency, setFrequency] = useState('monthly')

  const calculateRepayment = () => {
    const principal = loanAmount
    const monthlyRate = interestRate / 100 / 12
    const numberOfPayments = loanTerm * 12
    
    if (monthlyRate === 0) return principal / numberOfPayments
    
    const monthlyPayment = principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
    
    switch(frequency) {
      case 'weekly': return monthlyPayment / 4.345
      case 'fortnightly': return monthlyPayment / 2.173
      default: return monthlyPayment
    }
  }

  const repayment = calculateRepayment()

  return (
    <section id="calculator" className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Mortgage <span className="paint-text">Calculator</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Estimate your repayments with our easy-to-use calculator. Contact us for a personalized quote.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Loan Amount: ${loanAmount.toLocaleString()}</label>
                <input type="range" min="100000" max="2000000" step="10000" value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600" />
                <div className="flex justify-between text-xs text-gray-500 mt-1"><span>$100k</span><span>$2M</span></div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Interest Rate: {interestRate}%</label>
                <input type="range" min="1" max="15" step="0.1" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600" />
                <div className="flex justify-between text-xs text-gray-500 mt-1"><span>1%</span><span>15%</span></div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Loan Term: {loanTerm} Years</label>
                <input type="range" min="5" max="40" step="1" value={loanTerm} onChange={(e) => setLoanTerm(Number(e.target.value))} className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600" />
                <div className="flex justify-between text-xs text-gray-500 mt-1"><span>5 yrs</span><span>40 yrs</span></div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Repayment Frequency</label>
                <div className="flex gap-2">
                  {['weekly', 'fortnightly', 'monthly'].map((freq) => (
                    <button key={freq} onClick={() => setFrequency(freq)} className={`flex-1 py-2.5 rounded-lg font-medium transition-all ${frequency === freq ? 'bg-primary-600 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                      {freq.charAt(0).toUpperCase() + freq.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-primary-600 rounded-2xl shadow-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Your Estimated Repayment</h3>
            <div className="text-center py-8">
              <p className="text-5xl md:text-6xl font-bold mb-2">${repayment.toFixed(2)}</p>
              <p className="text-xl opacity-90">per {frequency}</p>
            </div>
            <div className="border-t border-white/20 pt-6 mt-6">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div><p className="text-sm opacity-80">Total Interest</p><p className="text-xl font-bold">${((repayment * (frequency === 'weekly' ? 52 : frequency === 'fortnightly' ? 26 : 12) * loanTerm) - loanAmount).toLocaleString(undefined, {maximumFractionDigits: 0})}</p></div>
                <div><p className="text-sm opacity-80">Total Payments</p><p className="text-xl font-bold">${(repayment * (frequency === 'weekly' ? 52 : frequency === 'fortnightly' ? 26 : 12) * loanTerm).toLocaleString(undefined, {maximumFractionDigits: 0})}</p></div>
              </div>
            </div>
            <p className="text-sm opacity-70 mt-6 text-center">*This is an estimate only. Actual repayments may vary. Contact us for accurate quotes.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Process Section - 5 Steps
const Process = () => {
  const steps = [
    { number: 1, title: "Initial Consultation", description: "Free 30-minute meeting to understand your goals and financial situation." },
    { number: 2, title: "Strategy Development", description: "We analyze your options and create a tailored lending strategy." },
    { number: 3, title: "Lender Selection", description: "Compare rates from all major NZ banks and select the best fit." },
    { number: 4, title: "Application & Approval", description: "Handle all paperwork and negotiate with lenders on your behalf." },
    { number: 5, title: "Settlement & Support", description: "Guide you through settlement and provide ongoing support." }
  ]

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Our <span className="paint-text">5-Step Process</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Simple, transparent, and stress-free. Here's how we help you secure the perfect loan.</p>
        </div>
        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="relative group">
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                {step.number}
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold mb-2 text-gray-800">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
              {step.number < 5 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary-300 to-transparent -z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Lender Logo Wall
const LenderWall = () => {
  const lenders = [
    { name: "ANZ", logo: "https://placehold.co/120x60/004C8D/ffffff?text=ANZ" },
    { name: "ASB", logo: "https://placehold.co/120x60/005DA6/ffffff?text=ASB" },
    { name: "BNZ", logo: "https://placehold.co/120x60/003366/ffffff?text=BNZ" },
    { name: "Kiwibank", logo: "https://placehold.co/120x60/ED1B2F/ffffff?text=Kiwibank" },
    { name: "Westpac", logo: "https://placehold.co/120x60/E60000/ffffff?text=Westpac" },
    { name: "TSB", logo: "https://placehold.co/120x60/009FE3/ffffff?text=TSB" }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">We Work With All Major NZ Lenders</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
          {lenders.map((lender) => (
            <img key={lender.name} src={lender.logo} alt={lender.name} className="h-10 md:h-12 grayscale hover:grayscale-0 transition-all duration-300" />
          ))}
        </div>
      </div>
    </section>
  )
}

// Testimonials Section
const Testimonials = () => {
  const testimonials = [
    {
      content: "Reliable Brokers made buying our first home so easy. They found us a rate 0.5% lower than our bank offered. Highly recommend!",
      author: "Sarah & James Mitchell",
      location: "Auckland",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop"
    },
    {
      content: "As a business owner, getting the right finance was critical. The team understood my needs and secured excellent terms.",
      author: "David Chen",
      location: "North Shore",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
      content: "Professional, knowledgeable, and always available. They refinanced our mortgage and saved us $400/month.",
      author: "Emma Thompson",
      location: "West Auckland",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">What Our <span className="paint-text">Clients Say</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Real stories from real New Zealanders who trusted us with their financial future.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 relative">
              <div className="absolute -top-6 left-8">
                <img src={testimonial.image} alt={testimonial.author} className="w-12 h-12 rounded-full object-cover shadow-md" />
              </div>
              <div className="mt-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-bold text-gray-800">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Section
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you! We will contact you within 24 hours.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-600 to-primary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Ready to Get Started?</h2>
            <p className="text-lg opacity-90 mb-8">Book your free consultation today. No obligation, just expert advice tailored to your situation.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=48&h=48&fit=crop" alt="Office" className="w-12 h-12 rounded-full object-cover" />
                </div>
                <div>
                  <p className="font-semibold">Visit Us</p>
                  <p className="opacity-80">Level 12, 88 Queen Street, Auckland CBD</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=48&h=48&fit=crop" alt="Phone" className="w-12 h-12 rounded-full object-cover" />
                </div>
                <div>
                  <p className="font-semibold">Call Us</p>
                  <p className="opacity-80">0800 RELIABLE (0800 735 422)</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop" alt="Email" className="w-12 h-12 rounded-full object-cover" />
                </div>
                <div>
                  <p className="font-semibold">Email Us</p>
                  <p className="opacity-80">hello@reliablebrokers.co.nz</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all" placeholder="John Smith" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                  <input type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all" placeholder="021 123 4567" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">How Can We Help?</label>
                <textarea value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all" placeholder="Tell us about your needs..." />
              </div>
              <button type="submit" className="w-full bg-primary-600 text-white py-4 rounded-lg font-semibold hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl">Request Free Consultation</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

// Footer
const Footer = () => (
  <footer className="bg-gray-900 text-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-8 mb-12">
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=48&h=48&fit=crop" alt="Logo" className="w-10 h-10 rounded-full object-cover" />
            <span className="text-lg font-bold font-display">Reliable Brokers</span>
          </div>
          <p className="text-gray-400 text-sm">Auckland's trusted mortgage advisers. Helping New Zealanders achieve their financial goals since 2009.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Services</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Home Loans</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Business Finance</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Property Investment</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Refinancing</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#calculator" className="hover:text-white transition-colors">Calculator</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Contact</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Level 12, 88 Queen Street</li>
            <li>Auckland CBD, 1010</li>
            <li>0800 RELIABLE</li>
            <li>hello@reliablebrokers.co.nz</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-sm">&copy; 2024 Reliable Brokers NZ. All rights reserved.</p>
        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
)

// Main App Component
export default function App() {
  const [activeToggle, setActiveToggle] = useState('personal')

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero activeToggle={activeToggle} setActiveToggle={setActiveToggle} />
        <LenderWall />
        <Services />
        <Calculator />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
