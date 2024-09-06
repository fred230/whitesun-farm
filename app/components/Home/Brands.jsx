'use client';

import { useState, useEffect } from 'react';

const products = [
  { name: 'Fresh Vegetables', icon: 'https://plus.unsplash.com/premium_photo-1664302148512-ddea30cd2a92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RnJlc2glMjBWZWdldGFibGVzfGVufDB8fDB8fHww', image: 'https://plus.unsplash.com/premium_photo-1664302148512-ddea30cd2a92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RnJlc2glMjBWZWdldGFibGVzfGVufDB8fDB8fHww' },
  { name: 'Organic Products', icon: 'https://plus.unsplash.com/premium_photo-1663050620963-e336138514a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fE9yZ2FuaWMlMjBQcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D', image: 'https://plus.unsplash.com/premium_photo-1663050620963-e336138514a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fE9yZ2FuaWMlMjBQcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D' },
  { name: 'Dairy Products', icon: 'https://images.unsplash.com/photo-1622394912940-a2b1f6ef725d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fERhaXJ5JTIwUHJvZHVjdHN8ZW58MHx8MHx8fDA%3D', image: 'https://images.unsplash.com/photo-1622394912940-a2b1f6ef725d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fERhaXJ5JTIwUHJvZHVjdHN8ZW58MHx8MHx8fDA%3D' },
  { name: 'Other Products', icon: 'https://images.unsplash.com/photo-1681372190756-6626691159fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybSUyMGltcGxlbWVudHN8ZW58MHx8MHx8fDA%3D', image: 'https://images.unsplash.com/photo-1681372190756-6626691159fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybSUyMGltcGxlbWVudHN8ZW58MHx8MHx8fDA%3D' },
];

const Brands = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  return (
    <div className="w-full bg-gradient-to-r from-green-800 via-green-600 to-yellow-500 pt-16 pb-16 h-full flex justify-center items-center">
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 p-10 text-left">
          <h2 className="text-white text-sm uppercase mb-2">WHAT WE DO</h2>
          <h1 className="text-white text-4xl font-bold mb-4">Why Choose Our Fresh Organic Foods</h1>
          <p className="text-white mb-4">
            Everything melancholy uncommonly but solicitude inhabiting projection off. Connection stimulated estimating excellence an to impression. Ladies she basket season age her uneasy saw. Discourse unwilling am no described.
          </p>
          <button className="bg-yellow-400 text-black px-6 py-2 rounded-full hover:bg-yellow-300 transition duration-300">
            View All &gt;
          </button>
        </div>
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)` }}
          >
            {products.map((product, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-2"
                style={{ width: `${90 / itemsPerView}%` }}
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-lg mx-2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                      <img
                        src={product.icon}
                        alt=""
                        className="rounded-full w-12 h-12"
                      />
                    </div>
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          >
            &lt;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Brands;
