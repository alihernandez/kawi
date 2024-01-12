// pages/service.js

import Image from "next/image";


const Service = () => {
  const services = [
    {
      title: 'Weekly House Checks',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://cdn.pixabay.com/photo/2016/04/16/21/22/crosscut-saw-1333772_1280.jpg', // Replace with your image path
    },
    {
      title: 'Monthly Full Inspections',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      image: 'https://cdn.pixabay.com/photo/2016/08/03/20/04/wood-1567641_1280.jpg', // Replace with your image path
    },
    {
      title: 'Home Repairs',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://cdn.pixabay.com/photo/2016/04/16/21/22/crosscut-saw-1333772_1280.jpg', // Replace with your image path
    },
    {
      title: 'Assembly and Installation',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://cdn.pixabay.com/photo/2016/04/16/21/22/crosscut-saw-1333772_1280.jpg', // Replace with your image path
    },
    {
      title: 'General Handyman Services',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://cdn.pixabay.com/photo/2016/04/16/21/22/crosscut-saw-1333772_1280.jpg', // Replace with your image path
    },
    {
      title: 'Emergency Repairs',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://cdn.pixabay.com/photo/2016/04/16/21/22/crosscut-saw-1333772_1280.jpg', // Replace with your image path
    },
    // Add more services as needed
  ];

  return (
    <div className="flex items-center justify-center" id="jobs">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center">
              <div className="flex-shrink-0 mr-4">
                <Image src={service.image} alt={service.title} className="w-16 h-16 rounded-full" width={64} height={64} />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-4">{service.title}</h2>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
  );
};

export default Service;
