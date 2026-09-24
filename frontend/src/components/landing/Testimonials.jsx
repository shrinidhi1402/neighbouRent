import React from 'react';

const testimonials = [
  {
    text: "Got a DSLR for my college event at a great price. Super easy and smooth experience!",
    author: "Rohan S.",
    location: "JP Nagar, Bangalore",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  },
  {
    text: "Such a useful platform! Rented a tent for our weekend trip. Highly recommend.",
    author: "Aditi M.",
    location: "BTM Layout, Bangalore",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    text: "NeighbourRent makes it so easy to rent out my unused equipment. Love the community vibe!",
    author: "Karan P.",
    location: "HSR Layout, Bangalore",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
  }
];

export default function Testimonials() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <p className="text-xs font-bold tracking-widest text-[#805232]/80 uppercase mb-2">Trusted By Neighbours</p>
          <h2 className="font-display text-3xl font-bold text-[#326080]">What Our Users Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#FFF1E7] border border-[#DCECF5]/20 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col h-full">
                <p className="text-[#326080]/80 text-[15px] leading-relaxed flex-grow italic mb-8">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100">
                    <img src={testimonial.avatar} alt={testimonial.author} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#326080] text-sm">{testimonial.author}</h4>
                    <p className="text-xs text-[#326080]/60">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
