import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Navbar() {
  const { isLoggedIn } = useAuth();
  const { hash } = useLocation();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (hash) {
      setActiveSection(hash.substring(1));
    } else {
      setActiveSection('home');
    }
  }, [hash]);

  const navLinks = [
    { name: 'Home', path: '#home', id: 'home' },
    { name: 'How It Works', path: '#how-it-works', id: 'how-it-works' },
    { name: 'About', path: '#about', id: 'about' }
  ];

  return (
    <nav className="fixed w-full bg-[#DCECF5]/90 backdrop-blur-md z-50 transition-all duration-300 border-b border-[#326080]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#FFF1E7] rounded-xl flex items-center justify-center shadow-sm">
              <img src="/logo.jpg" alt="NeighbouRent" className="w-8 h-8 object-contain rounded-lg" />
            </div>
            <span className="font-display font-bold text-xl text-[#326080] tracking-tight">Neighbour<span className="text-[#805232]">Rent</span></span>
          </Link>

          {/* Center Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.path.startsWith('#') ? (
                <Link
                  key={link.name}
                  to={`/${link.path}`}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === link.id 
                      ? 'text-[#326080] border-b-2 border-[#326080] pb-1' 
                      : 'text-[#326080]/70 hover:text-[#326080]'
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm font-medium text-[#326080]/70 hover:text-[#326080] transition-colors"
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-6">
            {isLoggedIn ? (
              <Link to="/register" className="text-sm font-medium text-[#326080] hover:text-[#805232] transition-colors flex items-center group">
                Go to App <span className="group-hover:translate-x-1 transition-transform ml-1">&rarr;</span>
              </Link>
            ) : (
              <>
                <Link to="/login" className="hidden sm:block text-sm font-medium text-[#326080]/70 hover:text-[#326080] transition-colors">
                  Login
                </Link>
                <Link to="/register" className="text-sm font-medium text-[#326080] hover:text-[#805232] transition-colors flex items-center group">
                  Get Started <span className="group-hover:translate-x-1 transition-transform ml-1">&rarr;</span>
                </Link>
              </>
            )}
          </div>
          
        </div>
      </div>
    </nav>
  );
}
