import React, { useState, useEffect } from 'react'

const Header = ({ activeToggle, setActiveToggle }) => {
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
            <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=120&h=120&fit=crop" alt="Logo" className="w-12 h-12 rounded-full object-cover shadow-md" />
            <div>
              <h1 className="text-xl font-bold text-primary-900 font-display">Reliable Brokers</h1>
              <p className="text-xs text-gray-500">NZ Financial Advisory</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary-600 font-medium">Home</a>
            <a href="#services" className="text-gray-700 hover:text-primary-600 font-medium">Services</a>
            <a href="#calculator" className="text-gray-700 hover:text-primary-600 font-medium">Calculator</a>
            <a href="#process" className="text-gray-700 hover:text-primary-600 font-medium">Process</a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary-600 font-medium">Testimonials</a>
            <a href="#contact" className="bg-primary-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-primary-700 transition-colors shadow-md">Get Started</a>
          </nav>
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t flex flex-col space-y-4">
            <a href="#home" className="text-gray-700 hover:text-primary-600 font-medium">Home</a>
            <a href="#services" className="text-gray-700 hover:text-primary-600 font-medium">Services</a>
            <a href="#calculator" className="text-gray-700 hover:text-primary-600 font-medium">Calculator</a>
            <a href="#process" className="text-gray-700 hover:text-primary-600 font-medium">Process</a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary-600 font-medium">Testimonials</a>
            <a href="#contact" className="bg-primary-600 text-white px-6 py-2.5 rounded-full font-medium text-center">Get Started</a>
          </div>
        )}
      </div>
    </header>
  )
}

const Hero = ({ activeToggle, setActiveToggle }) => (
  <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary-50 via-white to-accent-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex bg-gray-100 rounded-full p-1.5 shadow-inner">
            <button onClick={() => setActiveToggle('personal')} className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${activeToggle === 'personal' ? 'bg-primary-600 text-white shadow-lg' : 'text-gray-600 hover:text-primary-600'}`}>Personal</button>
            <button onClick={() => setActiveToggle('business')} className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${activeToggle === 'business' ? 'bg-primary-600 text-white shadow-lg' : 'text-gray-600 hover:text-primary-600'}`}>Business</button>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {activeToggle === 'personal' ? (<><span className="paint-text">Your Dream Home</span><br /><span className="text-gray-800">Starts With the Right Mortgage</span></>) : (<><span className="paint-text">Business Growth</span><br /><span className="text-gray-800">Powered by Smart Financing</span></>)}
          </h1>
          <p className="text-lg text-gray-600 max-w-xl">{activeToggle === 'personal' ? "We help New Zealanders secure the best home loans with personalized advice." : "Strategic business financing solutions tailored to your company's needs."}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#calculator" className="bg-primary-600 text-white px-8 py-4 rounded-full font-semibold text-center hover:bg-primary-700 transition-all shadow-lg">Calculate Your Repayments</a>
            <a href="#contact" className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-full font-semibold text-center hover:bg-primary-50 transition-all">Book Free Consultation</a>
          </div>
          <div className="flex items-center gap-8 pt-4">
            <div className="text-center"><p className="text-3xl font-bold text-primary-600">$500M+</p><p className="text-sm text-gray-500">Loans Arranged</p></div>
            <div className="text-center"><p className="text-3xl font-bold text-primary-600">2,500+</p><p className="text-sm text-gray-500">Happy Clients</p></div>
            <div className="text-center"><p className="text-3xl font-bold text-primary-600">15+</p><p className="text-sm text-gray-500">Years Experience</p></div>
          </div>
        </div>
        <div className="relative hidden md:block">
          <img src={activeToggle === 'personal' ? "https://images.unsplash.com/photo-1560518883-9c68b8c7e7f9?w=600&h=700&fit=crop" : "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=700&fit=crop"} alt="Hero" className="rounded-2xl shadow-2xl object-cover w-full h-[600px]" />
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center"><svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg></div>
              <div><p className="font-bold text-gray-800">4.9/5 Rating</p><p className="text-sm text-gray-500">From 500+ Reviews</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default function App() {
  const [activeToggle, setActiveToggle] = useState('personal')
  return (
    <div className="min-h-screen bg-white">
      <Header activeToggle={activeToggle} setActiveToggle={setActiveToggle} />
      <main>
        <Hero activeToggle={activeToggle} setActiveToggle={setActiveToggle} />
      </main>
    </div>
  )
}
