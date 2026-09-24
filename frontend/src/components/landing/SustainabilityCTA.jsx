import React from 'react';
import { Link } from 'react-router-dom';

export default function SustainabilityCTA() {
  return (
    <div className="bg-[#DCECF5] relative overflow-hidden border-t border-[#FFF1E7]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:max-w-2xl text-center md:text-left">
            <p className="text-xs font-bold tracking-widest text-[#805232]/80 uppercase mb-3">
              A Smarter Way to Consume
            </p>
            <h2 className="font-display text-4xl font-extrabold text-[#326080] mb-4 leading-tight">
              Good for you. <br className="hidden sm:block" />
              Better for the planet.
            </h2>
            <p className="text-[#326080]/80 text-lg mb-8 max-w-lg">
              Join a growing community that believes in access over ownership.
            </p>
            <Link to="/register" className="text-[#326080] hover:text-[#805232] font-semibold transition-colors flex items-center group justify-center md:justify-start">
              Join NeighbourRent <span className="group-hover:translate-x-1 transition-transform ml-1">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Background Leaves/Plant */}
      <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-80 pointer-events-none hidden md:block">
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover transform translate-x-1/4 translate-y-10 scale-125">
          <path d="M120 400C120 400 60 280 180 160C300 40 400 0 400 0C400 0 380 140 280 240C180 340 120 400 120 400Z" fill="#FFF1E7" opacity="0.4"/>
          <path d="M120 400C120 400 180 320 320 280C460 240 540 160 540 160C540 160 480 300 360 360C240 420 120 400 120 400Z" fill="#326080" opacity="0.2"/>
          <path d="M120 400C120 400 240 380 360 440C480 500 520 600 520 600C520 600 420 540 320 520C220 500 120 400 120 400Z" fill="#805232" opacity="0.1"/>
        </svg>
      </div>
    </div>
  );
}
