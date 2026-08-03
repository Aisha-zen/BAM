import { useParams } from "react-router-dom";
import projects from "./data/projects";
import Nav from "./nav";
import { ArrowLeft } from "lucide-react";
import { NavLink } from "react-router-dom";


function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find(
    p => p.id === Number(id)
  );

  if (!project) {
    return (
      <div className="pt-40 text-center">
        Project not found.
      </div>
    );
    }
    
    const currentIndex = projects.findIndex(
        (p) => p.id === Number(id)
      );
      
      const nextProject =
        projects[(currentIndex + 1) % projects.length];

        const previousProject =
        projects[
          (currentIndex - 1 + projects.length) % projects.length
        ];

  return (
      <>
          
          <Nav />
          
          
          <section className="pt-36 pb-20">
          <NavLink
  to="/Project"
  className="inline-flex items-center gap-2 text-gray-600 hover:text-[#94D82D] transition mb-10"
>
  <ArrowLeft size={18} />
  Back to Projects
          </NavLink>
        <div className="w-[92%] max-w-7xl mx-auto">

          <p className="uppercase tracking-[3px] text-[#94D82D]">
            {project.category}
          </p>

          <h1 className="head text-6xl mt-4">
            {project.title}
          </h1>

          <p className="text-gray-600 mt-6 max-w-2xl leading-8">
            {project.description}
          </p>

        </div>
      </section>

      <img
        src={project.cover}
        className="w-full h-[80vh] object-cover"
      />

      <section className="w-[92%] max-w-7xl mx-auto py-24">

        <div className="grid lg:grid-cols-4 gap-12">

          <div>
            <p className="text-gray-500">
              Location
            </p>

            <h3 className="mt-2">
              {project.location}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">
              Year
            </p>

            <h3 className="mt-2">
              {project.year}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">
              Area
            </p>

            <h3 className="mt-2">
              {project.area}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">
              Status
            </p>

            <h3 className="mt-2">
              {project.status}
            </h3>
          </div>

        </div>

      </section>

      <section className="w-[92%] max-w-7xl mx-auto pb-24">

        <div className="grid lg:grid-cols-2 gap-10">

          {project.gallery.map((image, index) => (

            <img
              key={index}
              src={image}
              className="rounded-3xl w-full object-cover"
            />

          ))}

        </div>

          </section>
          

          {/*  NEXT PROJECT SECTION HERE */}
          <section className="w-[92%] max-w-7xl mx-auto py-20 border-t border-gray-200">
  <div className="grid md:grid-cols-2 gap-10">

    {/* Previous */}
    <NavLink
      to={`/project/${previousProject.id}`}
      className="group"
    >
      <p className="uppercase text-sm tracking-[3px] text-gray-500 mb-3">
        Previous Project
      </p>

      <h2 className="head text-3xl group-hover:text-[#94D82D] transition">
        ← {previousProject.title}
      </h2>
    </NavLink>

    {/* Next */}
    <NavLink
      to={`/project/${nextProject.id}`}
      className="group text-right"
    >
      <p className="uppercase text-sm tracking-[3px] text-gray-500 mb-3">
        Next Project
      </p>

      <h2 className="head text-3xl group-hover:text-[#94D82D] transition">
        {nextProject.title} →
      </h2>
    </NavLink>

  </div>
</section>
    </>
  );
}

export default ProjectDetails;

