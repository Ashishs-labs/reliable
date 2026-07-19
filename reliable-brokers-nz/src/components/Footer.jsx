import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Reliable Brokers<span className="text-blue-400">NZ</span></h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Auckland's trusted mortgage advisers helping Kiwis achieve their property dreams since 2009. 
              We compare 26+ lenders to find you the perfect loan solution.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <span className="text-sm font-bold">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <span className="text-sm font-bold">in</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Services</h4>
            <ul className="space-y-2 text-slate-300">
              <li><Link to="/first-home-buyers" className="hover:text-blue-400 transition-colors">First Home Buyers</Link></li>
              <li><Link to="/home-owners" className="hover:text-blue-400 transition-colors">Home Owners</Link></li>
              <li><Link to="/property-investors" className="hover:text-blue-400 transition-colors">Property Investors</Link></li>
              <li><Link to="/mortgages/refinance" className="hover:text-blue-400 transition-colors">Refinancing</Link></li>
            </ul>
          </div>

          {/* Mortgages */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Mortgages</h4>
            <ul className="space-y-2 text-slate-300">
              <li><Link to="/mortgages/pre-approval" className="hover:text-blue-400 transition-colors">Pre-Approval</Link></li>
              <li><Link to="/mortgages/refinance" className="hover:text-blue-400 transition-colors">Refinance</Link></li>
              <li><Link to="/mortgages/building" className="hover:text-blue-400 transition-colors">Building Loans</Link></li>
              <li><Link to="/mortgages/property-development" className="hover:text-blue-400 transition-colors">Development Finance</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Contact</h4>
            <ul className="space-y-3 text-slate-300">
              <li>
                <a href="tel:0800735422" className="hover:text-blue-400 transition-colors block">0800 RELIABLE</a>
              </li>
              <li>
                <a href="mailto:hello@reliablebrokers.co.nz" className="hover:text-blue-400 transition-colors block">hello@reliablebrokers.co.nz</a>
              </li>
              <li className="leading-relaxed">
                208 Ponsonby Road<br />
                Auckland 1011<br />
                New Zealand
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} Reliable Brokers NZ. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-slate-400">
              <Link to="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
              <a href="#" className="hover:text-blue-400 transition-colors">Complaints</a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-slate-800">
          <p className="text-slate-500 text-xs leading-relaxed text-center">
            Reliable Brokers NZ is a registered mortgage adviser. All loans are subject to lender approval. 
            Interest rates and terms may change without notice. This information is general in nature and 
            does not constitute financial advice. Please consult with one of our advisers for personalised advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
