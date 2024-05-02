'use client'
import { useState } from 'react';
import Image from 'next/image';

const ServicesCarousel = ({ services }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = services.length;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex">
        {services.map((service, index) => (
          <div
            key={index}
            className={`${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-500`}
            style={{ minWidth: '300px', maxWidth: '500px', width: '100%' }} // Adjust slide width here
          >
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
              <div className="flex-shrink-0 mr-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-16 h-16 rounded-full"
                  width={64}
                  height={64}
                />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-4">{service.title}</h2>
                <p>{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="absolute top-1/2 left-4 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-full" onClick={prevSlide}>
        Prev
      </button>
      <button className="absolute top-1/2 right-4 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-full" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

export default ServicesCarousel;
