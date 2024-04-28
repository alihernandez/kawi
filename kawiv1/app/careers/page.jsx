// pages/careers.js

import Image from "next/image";

// import Layout from '../components/Layout';

const CareersPage = () => {
  const jobOpenings = [
    {
      title: "General Info",
      type: "",
      description:
        "People with a criminal record are encouraged to apply",
        hours: "30 – 40 per week",
        schedule: "•	8 hour shift •	Monday to Friday",
        supplemental: "Overtime pay",
        relocate: 'Relocate to the Roaring Fork Valley before starting work (Required) Work Location: In person.',
      image:
        "https://cdn.pixabay.com/photo/2014/06/17/16/53/blueprint-370588_1280.jpg", // Replace with your image path
    },
    {
      title: "Project Manager",
      type: "Full-time",
      description:
        "-	Plans and oversees various types of construction projects from start to finish.-	Creating and staying within a project budget, as well as reporting project progress and budget back to bosses and clients. Ability to pull permits to construct jobs within certain zones.Listen to and communicate clients goals for projects to subcontractors and construction workers.Listen to and then create clear instructions from bosses, engineers and owners to contractors and workers. Mechanical knowledge and ability to use hand tools and power tools effectively. Ability to lift heavy objects and perform physical labor as needed. Strong attention to detail and ability to follow instructions. Note: This job description is not intended to be all-inclusive. Employee may perform other related duties as negotiated to meet the ongoing needs of the organization.",
      salary: "$40.00 per hour",
      image:
        "https://cdn.pixabay.com/photo/2016/10/16/16/51/miniature-figure-1745770_1280.jpg", // Replace with your image path
    },
    {
      title: "General laborer",
      type: "Full-time",
      description:
        "- Assemble and fabricate parts and components using hand tools and power tools. - Assist with loading and unloading materials as needed. - Follow safety protocols and maintain a clean work environment. - Perform general labor tasks as assigned. Required: - Must provide transportation or secure a ride on your own. - Previous experience in a laborer or warehouse role preferred but not necessary. - Mechanical knowledge and ability to use hand tools and power tools effectively or willingness to learn. - Ability to lift heavy objects and perform physical labor as needed. - Strong attention to detail and ability to follow instructions. Note: This job description is not intended to be all-inclusive. Employee may perform other related duties as negotiated to meet the ongoing needs of the organization.",
        salary: "From $20.00 per hour",
      image:
        "https://cdn.pixabay.com/photo/2014/06/17/16/53/blueprint-370588_1280.jpg", // Replace with your image path
    },
    // Add more job openings as needed
  ];

  return (
    <div className="container mx-auto p-4">
      
      {jobOpenings.map((job, index) => (
        <div
          key={index}
          className="p-4 rounded-lg mb-4 flex items-center"
          id="jobs"
        >
          <div className="flex-shrink-0 mr-4">
            <Image
              src={job.image}
              alt={job.title}
              className="w-16 h-16 rounded-full"
              width={64}
              height={64}
            />
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">{job.title}</h2>
            <p className="text-gray-600 mb-2">{job.hours}</p>
            <p className="text-gray-600 mb-2">{job.type}</p>
            <p>{job.description}</p>
            <p>{job.schedule}</p>
            <p>{job.supplemental}</p>
            <p>{job.relocate}</p>
          </div>
          {/* <div>
            <h2 className="text-xl font-bold mb-2">{job.title}</h2>
            <p className="text-gray-600 mb-2">{job.type}</p>
            <p>{job.description}</p>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default CareersPage;
