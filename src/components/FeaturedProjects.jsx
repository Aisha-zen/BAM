import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    image: "mab.jpg",
    title: "Private Residence",
    category: "Residential",
  },
  {
    image: "pergola.jpg",
    title: "Pergola Garden",
    category: "Landscape",
  },
  {
    image: "work3.png",
    title: "Private Villa",
    category: "Architecture",
  },
  {
    image: "roberto.jpg",
    title: "Oceanside Dining",
    category: "Interior",
  },
];

function FeaturedProjects() {
  return (
    <section className="py-32">
      <div className="w-[92%] max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20"
        >
          <div>
            <p className="uppercase tracking-[6px] text-[#94D82D] mb-4">
              Portfolio
            </p>

            <h2 className="head text-5xl lg:text-7xl">
              Featured Projects
            </h2>
          </div>

          <NavLink
            to="/project"
            className="group flex items-center gap-2 text-lg"
          >
            View All

            <ArrowRight
              className="transition group-hover:translate-x-2"
              size={18}
            />
          </NavLink>
        </motion.div>

        {/* Grid */}

        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .7,
                delay: index * .15,
              }}
              className="group cursor-pointer"
            >

              {/* Image */}

              <div className="overflow-hidden rounded-3xl">

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-[420px]
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-110
                  "
                />

              </div>

              {/* Info */}

              <div className="flex justify-between items-center mt-6">

                <div>

                  <p className="uppercase text-sm tracking-[3px] text-[#94D82D]">
                    {project.category}
                  </p>

                  <h3 className="head text-3xl mt-2">
                    {project.title}
                  </h3>

                </div>

                <ArrowRight
                  className="transition group-hover:translate-x-2"
                />

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturedProjects;