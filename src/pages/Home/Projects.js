import React from "react";
import useProject from "../hook/useProject";
import SingleProject from "./SingleProject";

const Projects = () => {
  const projects = useProject()
  return (
    <section className="mt-20 lg:mt-0 mb-8" id='my-projects'>
      <h1 className="text-center text-2xl md:text-3xl font-bold mb-8 text-[#ff4321]"><span className='hover:border-b-4 duration-300 border-[#ff4321]'>MY PROJECTS</span></h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 lg:mx-0'>
        {projects.map((project) => (
          <SingleProject project={project}></SingleProject>
        ))}
      </div>
    </section>
  );
};

export default Projects;
