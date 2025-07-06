import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const cardImages = [
  '/card1.jpg',
  '/card2.jpg',
  '/card3.jpg',
  '/card4.jpg',
  '/card5.jpg',
];

const Page5 = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bg-[#f7f7f7] py-12 px-4 sm:px-8 md:px-16 lg:px-24">
      <p className="text-sky-500 text-sm font-medium mb-2">Get your card</p>
      <h2 className="text-3xl sm:text-4xl font-semibold text-black mb-8">
        Elevate Your Payment Experience
      </h2>

      <div className="relative">
        <div className="absolute -top-8 right-0 flex gap-4 z-10">
          <button
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 hover:bg-sky-500 hover:text-white hover:scale-110 hover:shadow-lg"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 hover:bg-sky-500 hover:text-white hover:scale-110 hover:shadow-lg"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth py-4 px-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
        >
          {cardImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`card-${idx}`}
              className="h-56 w-[300px] object-center rounded-xl shrink-0 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
            />
          ))}
        </div>
      </div>

      <p className="text-center mt-8 max-w-2xl mx-auto text-gray-600 text-sm sm:text-base">
        We offer a range of physical cards designed to fit your lifestyle. Whether you're looking for a basic option for everyday purchases or a premium card with exclusive perks, we’ve got you covered.
      </p>

      <div className="mt-6 flex justify-center">
        <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:bg-sky-500 hover:text-white hover:scale-105 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
          Get my card
        </button>
      </div>
    </div>
  );
};

export default Page5;
