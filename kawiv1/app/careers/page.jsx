// pages/careers.js

import Image from "next/image";

// import Layout from '../components/Layout';

const CareersPage = () => {
  const jobOpenings = [
    {
      title: 'Project Manager',
      location: 'City, State',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://cdn.pixabay.com/photo/2016/10/16/16/51/miniature-figure-1745770_1280.jpg', // Replace with your image path
    },
    {
      title: 'Construction Worker',
      location: 'City, State',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      image: 'https://cdn.pixabay.com/photo/2014/06/17/16/53/blueprint-370588_1280.jpg', // Replace with your image path
    },
    // Add more job openings as needed
  ];

  return (
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8">Job Openings</h1>
        {jobOpenings.map((job, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-4 flex items-center">
            <div className="flex-shrink-0 mr-4">
              <Image src={job.image} alt={job.title} className="w-16 h-16 rounded-full" width={64} height={64} />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">{job.title}</h2>
              <p className="text-gray-600 mb-2">{job.location}</p>
              <p>{job.description}</p>
            </div>
          </div>
        ))}
      </div>
  );
};

export default CareersPage;