import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const services = [
  "Architectural Design",
  "Interior Design",
  "Landscape Design",
  "Building Renovation",
  "Construction Management",
];

function ServicesPreview() {
  return (
    <section className="py-32 bg-[#FAFAFA]">
      <div className="w-[92%] max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mb-20"
        >
          <p className="uppercase tracking-[6px] text-[#94D82D] mb-4">
            What We Do
          </p>

          <h2 className="head text-5xl lg:text-7xl">
            Our Services
          </h2>
        </motion.div>

        {/* Services */}

        <div className="flex flex-col">

          {services.map((service, index) => (

            <motion.div
              key={service}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .6,
                delay: index * .1,
              }}
            >
              <NavLink
                to="/services"
                className="group flex justify-between items-center py-8 border-b border-gray-200"
              >
                <h3 className="head text-3xl lg:text-5xl transition duration-300 group-hover:text-[#94D82D]">
                  {service}
                </h3>

                <ArrowRight
                  size={30}
                  className="transition duration-300 group-hover:translate-x-3 group-hover:text-[#94D82D]"
                />
              </NavLink>

            </motion.div>

          ))}

        </div>

        {/* Button */}

        <div className="flex justify-end mt-16">

          <NavLink
            to="/services"
            className="bg-[#94D82D] hover:bg-black transition text-white rounded-full px-8 py-4"
          >
            View All Services
          </NavLink>

        </div>

      </div>
    </section>
  );
}

export default ServicesPreview;