import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import go from "../public/go.svg";
import "./App.css";

function Works() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      image: "a.jpg",
      category: "Residential",
      title: "Modern Villa",
      height: "h-[520px]",
    },
    {
      image: "b.jpg",
      category: "Landscape",
      title: "Outdoor Living Space",
      height: "h-[380px]",
    },
    {
      image: "c.jpg",
      category: "Interior",
      title: "Luxury Renovation",
      height: "h-[380px]",
    },
    {
      image: "d.jpg",
      category: "Commercial",
      title: "Urban Workspace",
      height: "h-[520px]",
    },
  ];

  return (
    <section className="w-full py-24">
      <div className="w-[92%] max-w-7xl mx-auto">
        {/* Heading */}
        <div className="max-w-3xl mb-20">
          <p className="uppercase tracking-[4px] text-[#94D82D] text-sm mb-4">
            Featured Projects
          </p>

          <h1 className="head text-4xl lg:text-6xl font-normal leading-tight">
            Spaces Designed
            <br />
            With Purpose.
          </h1>

          <p className="mt-8 text-gray-600 leading-8 text-lg">
            Every project tells a story of thoughtful planning, refined
            craftsmanship, and timeless design. Explore a curated selection of
            spaces we've brought to life.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid lg:grid-cols-2 gap-14">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full ${project.height} object-cover transition-transform duration-700 ease-out group-hover:scale-105`}
                />
              </div>

              <div className="mt-6">
                <p className="uppercase tracking-[3px] text-sm text-[#94D82D]">
                  {project.category}
                </p>

                <h2 className="head text-3xl font-normal mt-2 group-hover:text-[#94D82D] transition-colors">
                  {project.title}
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-24">
          <NavLink to="/Project">
            <button className="group flex items-center gap-3 border border-black px-8 py-4 rounded-full hover:bg-black hover:text-white transition-all duration-300">
              <span>View All Projects</span>

              <img
                src={go}
                alt="arrow"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Works;