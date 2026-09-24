import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Cameras & Accessories', image: 'https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=300&h=300&fit=crop' },
  { name: 'Tools & DIY', image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=300&h=300&fit=crop' },
  { name: 'Outdoor & Travel', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop' },
  { name: 'Laptops & Electronics', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop' },
  { name: 'Furniture & Home', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop' },
  { name: 'Kitchen & Appliances', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=300&h=300&fit=crop' },
  { name: 'Gaming & Entertainment', image: 'https://images.unsplash.com/photo-1526509867162-5b0c0d1b4b33?w=300&h=300&fit=crop' },
  { name: 'Sports & Fitness', image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=300&h=300&fit=crop' },
  { name: 'Clothing', image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=300&h=300&fit=crop' },
  { name: 'Books & Supplies', image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&h=300&fit=crop' }
];

export default function CategorySection() {
  return (
    <div className="py-20 bg-[#DCECF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <p className="text-xs font-bold tracking-widest text-[#805232]/80 uppercase mb-2">Explore</p>
            <h2 className="font-display text-3xl font-bold text-[#326080]">Popular Categories</h2>
          </div>
          <Link to="/listings" className="text-sm font-semibold text-[#326080] hover:text-[#805232] hidden sm:flex items-center gap-1 transition-colors group">
            View all categories <span className="text-lg group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link 
              key={index}
              to={`/listings`}
              state={{ category: category.name }}
              className={`group flex flex-col items-center bg-[#FFF1E7] rounded-3xl p-6 border border-[#DCECF5]/30 hover:border-[#DCECF5] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${index === 8 ? 'md:col-start-2' : ''}`}
            >
              <div className="w-24 h-24 mb-4 rounded-xl overflow-hidden bg-white shadow-sm flex items-center justify-center">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <h3 className="font-semibold text-[#326080] text-center text-sm leading-tight px-2 group-hover:text-[#805232] transition-colors">
                {category.name.split(' & ').map((part, i, arr) => (
                  <React.Fragment key={i}>
                    {part}
                    {i < arr.length - 1 && <><br/>&</>}
                  </React.Fragment>
                ))}
              </h3>
            </Link>
          ))}
        </div>
        
        <div className="mt-8 text-center sm:hidden">
          <Link to="/listings" className="text-sm font-semibold text-[#326080] hover:text-[#805232] transition-colors group">
            View all categories <span className="group-hover:translate-x-1 transition-transform inline-block">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
