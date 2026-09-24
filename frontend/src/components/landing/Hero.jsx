import React from 'react';
import Hero3D from './Hero3D';

export default function Hero() {
  return (
    <div className="pt-28 pb-16 md:pt-36 md:pb-28 bg-[#DCECF5] relative overflow-hidden">
      
      {/* Soft Cream Atmospheric Glow */}
      <div className="absolute top-0 right-0 w-[80%] lg:w-[60%] h-full bg-gradient-to-l from-[#FFF1E7]/30 via-[#DCECF5] to-transparent pointer-events-none z-0"></div>
      <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#FFF1E7]/30 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-4 min-h-[500px]">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-[48%] xl:w-[45%] text-center lg:text-left z-20 relative shrink-0">
            <p className="text-xs font-bold tracking-widest text-[#805232]/80 uppercase mb-4">
              Rent &bull; Save &bull; Sustain
            </p>
            <h1 className="font-display text-5xl lg:text-6xl font-extrabold text-[#326080] leading-tight mb-6">
              Everything you need <br/>
              <span className="text-[#805232]">is closer than you think.</span>
            </h1>
            <p className="text-lg text-[#326080]/80 mb-12 max-w-xl mx-auto lg:mx-0 font-medium">
              NeighbourRent helps you rent everyday items from people in your community — affordably, safely and sustainably.
            </p>
            {/* Benefit Strip */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 justify-center lg:justify-start">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FFF1E7]/40 flex items-center justify-center text-[#326080] border border-[#FFF1E7]/50 shrink-0 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-[#326080]">Save Money</p>
                  <p className="text-xs text-[#326080]/80">Why buy when you can rent?</p>
                </div>
              </div>
              <div className="hidden sm:block w-px h-10 bg-[#326080]/10"></div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FFF1E7]/40 flex items-center justify-center text-[#326080] border border-[#FFF1E7]/50 shrink-0 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-[#326080]">Support Your Community</p>
                  <p className="text-xs text-[#326080]/80">Rent from trusted neighbours</p>
                </div>
              </div>
              <div className="hidden sm:block w-px h-10 bg-[#326080]/10"></div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FFF1E7]/40 flex items-center justify-center text-[#326080] border border-[#FFF1E7]/50 shrink-0 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    <path d="M2 12h20" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-[#326080]">A More Sustainable Tomorrow</p>
                  <p className="text-xs text-[#326080]/80">More use, less waste</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side 3D Canvas */}
          <div className="flex-1 w-full lg:w-[50%] h-[500px] xl:h-[600px] relative hidden md:block z-10 cursor-default">
            <Hero3D />
          </div>
          
        </div>
      </div>
    </div>
  );
}
