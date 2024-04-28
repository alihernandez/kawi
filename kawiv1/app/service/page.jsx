// pages/service.js

import Image from "next/image";


const Service = () => {
  const services = [
    {
      title: 'Weekly House Checks',
      description: 'We run water, test lights, test doors, and note wall, ceiling, and floor damage while you are away.',
      image: 'https://cdn.pixabay.com/photo/2017/09/08/10/28/to-design-2728333_1280.jpg', // Replace with your image path
    },
    {
      title: 'Test Appliances ',
      description: 'Run washer, dryer, dishwasher, check fridge service status.Check mechanical room pipes and appliances for leaks as well as check water heater and other mechanical appliances service status.',
      image: 'https://cdn.pixabay.com/photo/2017/09/08/10/28/to-design-2728333_1280.jpg', // Replace with your image path
    },
    {
      title: 'Monthly Full Inspections',
      description: 'Check basic electrical and plumbing including testing toilet operation, filling sinks, performing pressure, hot water, plug and drain tests, check pipes, faucets, and fixtures for leaks. Test doors including visual inspection, operation, alignment, lock test, seal test, and safety test for exterior doors. Test windows include a visual inspection, operation, alignment, lock test, seal test, and glass test. Note any wall, ceiling, furniture, and floor damage, including the integrity of your home’s exterior. Check integrity and note damage to exterior siding, gutter, roof, furniture, and any outdoor fixtures and appliances.',
      image: 'https://cdn.pixabay.com/photo/2016/08/03/20/04/wood-1567641_1280.jpg', // Replace with your image path
    },
    {
      title: 'Home Repairs',
      description: 'Paint touchup, drywall repair, deck repair. Home/yard maintenance - Rake and bag leaves, clear snow paths to make yard accessible, exterior furniture maintenance and groundskeeping, clean and clear gutters, repair fences, pressure wash house, deck, and driveway.',
      image: 'https://cdn.pixabay.com/photo/2017/06/19/22/58/porch-2421146_1280.jpg', // Replace with your image path
    },
    {
      title: 'Design and construct',
      description: 'Pull permits, draw up construction plans, create and follow finish schedules.',
      image: 'https://cdn.pixabay.com/photo/2016/04/16/21/22/crosscut-saw-1333772_1280.jpg', // Replace with your image path
    },
    {
      title: 'General Handyman Services',
      description: 'Assembling and repairing furniture, assemble and install appliances, install shelves, change light bulbs and smoke detectors, ',
      image: 'https://cdn.pixabay.com/photo/2016/04/16/21/22/crosscut-saw-1333772_1280.jpg', // Replace with your image path
    },
    {
      title: 'Emergency Repairs',
      description: 'Clean up leaks, fix breaks, and repair damage when something unexpected happens.',
      image: 'https://cdn.pixabay.com/photo/2016/04/16/21/22/crosscut-saw-1333772_1280.jpg', // Replace with your image path
    },
    // Add more services as needed
  ];

  return (
    <div className="flex items-center justify-center">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" >
          {services.map((service, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center" id="services">
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
