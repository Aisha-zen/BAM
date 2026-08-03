import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import projects from "./data/projects";


function ImageGrid() {
  
  const projects = [
    {
      id: 1,
      src: "a.jpg",
      title: "Private Residence",
      category: "Residential",
      location: "Ibadan, Nigeria",
      height: "h-[520px]",
    },
    {
      id: 2,
      src: "roberto.jpg",
      title: "Oceanside Dining Room",
      category: "Interior",
      location: "Greece",
      height: "h-[380px]",
    },
    {
      id: 3,
      src: "salman.jpg",
      title: "Salam Saqib Residence",
      category: "Residential",
      location: "Lagos, Nigeria",
      height: "h-[380px]",
    },
    {
      id: 4,
      src: "work3.png",
      title: "Private Villa",
      category: "Architecture",
      location: "Abuja, Nigeria",
      height: "h-[520px]",
    },
    {
      id: 5,
      src: "mab.jpg",
      title: "Residential Building",
      category: "Construction",
      location: "Ibadan, Nigeria",
      height: "h-[520px]",
    },
    {
      id: 6,
      src: "pergola.jpg",
      title: "Pergola Yard Design",
      category: "Landscape",
      location: "Oyo, Nigeria",
      height: "h-[380px]",
    },
    {
      id: 7,
      src: "b.jpg",
      title: "Outdoor Living",
      category: "Landscape",
      location: "Ibadan, Nigeria",
      height: "h-[380px]",
    },
    {
      id: 8,
      src: "g.jpg",
      title: "Outdoor Restaurant",
      category: "Commercial",
      location: "Greece",
      height: "h-[520px]",
    },
    {
      id: 9,
      src: "kam.jpg",
      title: "Modern Minimalist Home",
      category: "Residential",
      location: "Lagos, Nigeria",
      height: "h-[520px]",
    },
  ];

  return (
    <section className="w-[92%] max-w-7xl mx-auto pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {projects.map(project => (
    <NavLink
        to={`/project/${project.id}`}
    >
            {/* Image */}
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src={project.src}
                alt={project.title}
                className={`w-full ${project.height} object-cover transition-transform duration-700 ease-out group-hover:scale-105`}
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition duration-500 flex items-end justify-between p-6">
                <span className="text-white opacity-0 group-hover:opacity-100 transition duration-500 font-medium">
                  View Project
                </span>

                <div className="bg-white rounded-full p-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="mt-6">
              <p className="uppercase tracking-[3px] text-xs text-[#94D82D] font-medium">
                {project.category}
              </p>

              <h2 className="head text-2xl lg:text-3xl font-normal mt-2 transition-colors duration-300 group-hover:text-[#94D82D]">
                {project.title}
              </h2>

              <p className="text-gray-500 mt-2">
                {project.location}
              </p>
            </div>
          </NavLink>
        ))}
      </div>
    </section>
  );
}

export default ImageGrid;