import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mortgagesOpen, setMortgagesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  // Close mobile menu on route change would be handled by router listener
  // For now, simple implementation

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-slate-800">Reliable Brokers<span className="text-blue-600">NZ</span></h1>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Main Links */}
            <Link to="/first-home-buyers" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
              First Home Buyers
            </Link>
            <Link to="/home-owners" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
              Home Owners
            </Link>
            <Link to="/property-investors" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
              Property Investors
            </Link>

            {/* Mortgages Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setMortgagesOpen(true)}
              onMouseLeave={() => setMortgagesOpen(false)}
            >
              <button className="text-slate-600 hover:text-blue-600 transition-colors font-medium flex items-center">
                Mortgages
                <svg className={`w-4 h-4 ml-1 transition-transform ${mortgagesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {mortgagesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-4 animate-fade-in">
                  <Link to="/mortgages/pre-approval" className="block px-6 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">Pre-Approval</Link>
                  <Link to="/mortgages/refinance" className="block px-6 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">Refinance</Link>
                  <Link to="/mortgages/refix-restructure" className="block px-6 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">Refix/Restructure</Link>
                  <Link to="/mortgages/building" className="block px-6 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">Building</Link>
                  <Link to="/mortgages/top-up" className="block px-6 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">Get a Top Up</Link>
                  <Link to="/mortgages/property-development" className="block px-6 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">Property Development</Link>
                  <Link to="/mortgages/mortgage-strategy" className="block px-6 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">Mortgage Strategy</Link>
                  <Link to="/mortgages/bank-said-no" className="block px-6 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">Bank Said No</Link>
                  <Link to="/mortgages/in-trouble" className="block px-6 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">In Trouble</Link>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <button className="text-slate-600 hover:text-blue-600 transition-colors font-medium flex items-center">
                Resources
                <svg className={`w-4 h-4 ml-1 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {resourcesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-4 animate-fade-in">
                  <Link to="/resources/calculator" className="block px-6 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">Mortgage Calculator</Link>
                  <Link to="/resources/guides" className="block px-6 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">Guides</Link>
                  <Link to="/resources/market-updates" className="block px-6 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">Market Updates</Link>
                </div>
              )}
            </div>

            <Link to="/about-us" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
              About Us
            </Link>
            
            <Link to="/contact-us" className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all transform hover:scale-105">
              Book Free Call
            </Link>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-4">
            <Link to="/first-home-buyers" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600 hover:text-blue-600 font-medium py-2">First Home Buyers</Link>
            <Link to="/home-owners" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600 hover:text-blue-600 font-medium py-2">Home Owners</Link>
            <Link to="/property-investors" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600 hover:text-blue-600 font-medium py-2">Property Investors</Link>
            
            {/* Mortgages Mobile Submenu */}
            <div>
              <button onClick={() => setMortgagesOpen(!mortgagesOpen)} className="flex items-center justify-between w-full text-slate-600 hover:text-blue-600 font-medium py-2">
                Mortgages
                <svg className={`w-4 h-4 transition-transform ${mortgagesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mortgagesOpen && (
                <div className="pl-4 mt-2 space-y-2 border-l-2 border-slate-200">
                  <Link to="/mortgages/pre-approval" onClick={() => setMobileMenuOpen(false)} className="block text-slate-500 hover:text-blue-600 py-1">Pre-Approval</Link>
                  <Link to="/mortgages/refinance" onClick={() => setMobileMenuOpen(false)} className="block text-slate-500 hover:text-blue-600 py-1">Refinance</Link>
                  <Link to="/mortgages/refix-restructure" onClick={() => setMobileMenuOpen(false)} className="block text-slate-500 hover:text-blue-600 py-1">Refix/Restructure</Link>
                  <Link to="/mortgages/building" onClick={() => setMobileMenuOpen(false)} className="block text-slate-500 hover:text-blue-600 py-1">Building</Link>
                  <Link to="/mortgages/top-up" onClick={() => setMobileMenuOpen(false)} className="block text-slate-500 hover:text-blue-600 py-1">Get a Top Up</Link>
                  <Link to="/mortgages/property-development" onClick={() => setMobileMenuOpen(false)} className="block text-slate-500 hover:text-blue-600 py-1">Property Development</Link>
                  <Link to="/mortgages/mortgage-strategy" onClick={() => setMobileMenuOpen(false)} className="block text-slate-500 hover:text-blue-600 py-1">Mortgage Strategy</Link>
                  <Link to="/mortgages/bank-said-no" onClick={() => setMobileMenuOpen(false)} className="block text-slate-500 hover:text-blue-600 py-1">Bank Said No</Link>
                  <Link to="/mortgages/in-trouble" onClick={() => setMobileMenuOpen(false)} className="block text-slate-500 hover:text-blue-600 py-1">In Trouble</Link>
                </div>
              )}
            </div>

            {/* Resources Mobile Submenu */}
            <div>
              <button onClick={() => setResourcesOpen(!resourcesOpen)} className="flex items-center justify-between w-full text-slate-600 hover:text-blue-600 font-medium py-2">
                Resources
                <svg className={`w-4 h-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {resourcesOpen && (
                <div className="pl-4 mt-2 space-y-2 border-l-2 border-slate-200">
                  <Link to="/resources/calculator" onClick={() => setMobileMenuOpen(false)} className="block text-slate-500 hover:text-blue-600 py-1">Mortgage Calculator</Link>
                  <Link to="/resources/guides" onClick={() => setMobileMenuOpen(false)} className="block text-slate-500 hover:text-blue-600 py-1">Guides</Link>
                  <Link to="/resources/market-updates" onClick={() => setMobileMenuOpen(false)} className="block text-slate-500 hover:text-blue-600 py-1">Market Updates</Link>
                </div>
              )}
            </div>

            <Link to="/about-us" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600 hover:text-blue-600 font-medium py-2">About Us</Link>
            <Link to="/contact-us" onClick={() => setMobileMenuOpen(false)} className="block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold text-center">Book Free Call</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
