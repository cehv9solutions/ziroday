import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-cyan-500" />
              <span className="font-bold text-xl">Ziroday Cybersecurity</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/services" className="hover:text-cyan-500 px-3 py-2 rounded-md text-sm font-medium">Services</Link>
              <Link to="/courses" className="hover:text-cyan-500 px-3 py-2 rounded-md text-sm font-medium">Courses</Link>
              <Link to="/resources" className="hover:text-cyan-500 px-3 py-2 rounded-md text-sm font-medium">Resources</Link>
              <Link to="/community" className="hover:text-cyan-500 px-3 py-2 rounded-md text-sm font-medium">Community</Link>
              <Link to="/about" className="hover:text-cyan-500 px-3 py-2 rounded-md text-sm font-medium">About</Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/services" className="block hover:text-cyan-500 px-3 py-2 rounded-md text-base font-medium">Services</Link>
            <Link to="/courses" className="block hover:text-cyan-500 px-3 py-2 rounded-md text-base font-medium">Courses</Link>
            <Link to="/resources" className="block hover:text-cyan-500 px-3 py-2 rounded-md text-base font-medium">Resources</Link>
            <Link to="/community" className="block hover:text-cyan-500 px-3 py-2 rounded-md text-base font-medium">Community</Link>
            <Link to="/about" className="block hover:text-cyan-500 px-3 py-2 rounded-md text-base font-medium">About</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;