import React from "react";
import project1 from "../../images/project1.png";
import project2 from "../../images/project2.png";
import project3 from "../../images/project3.png";
import SingleProject from "./SingleProject";

const Projects = () => {
  const projects = [
    {
      _id: "1",
      name: "Bike Warehouse",
      img: project1,
      live: "https://velvety-entremet-267826.netlify.app/",
      client:
        "https://github.com/amirulislamhridoy/Assignment-11-bikes-warehouse-client",
      server:
        "https://github.com/amirulislamhridoy/Assignment-11-bikes-warehouse-server",
    },
    {
      _id: "2",
      name: "Dr. Luke Slater",
      img: project2,
      live: "https://assignment-10-doctor-1d2b0.web.app/",
      client:
        "https://github.com/amirulislamhridoy/Assignment-10-react-authentication",
    },
    {
      _id: "3",
      name: "Buyer Confused",
      img: project3,
      live: "https://bejewelled-custard-7de940.netlify.app/",
      client: "https://github.com/amirulislamhridoy/Assignment-8-lucky-one",
    },
  ];
  return (
    <section className="mt-20 mb-8">
      <h1 className="text-center text-3xl font-bold mb-8">MY PROJECTS</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {projects.map((project) => (
          <SingleProject project={project}></SingleProject>
        ))}
      </div>
    </section>
  );
};

export default Projects;
