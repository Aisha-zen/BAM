import { useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import Nav from "./nav";
import ServiceItem from "./ServiceItem";

function Services() {
  const servicesGrid = [
    {
      image: "mab.jpg",
      heading: "Architectural & Interior Design",
      description:
        "We design residential, commercial and interior spaces that seamlessly blend aesthetics, functionality and sustainability. Every project is thoughtfully tailored to reflect your vision while creating environments that stand the test of time.",
    },
    {
      image: "faisal.jpg",
      heading: "Landscape Design",
      description:
        "Our landscape designs create outdoor environments that complement architecture through thoughtful planting, hardscape design, lighting and outdoor living spaces that encourage connection with nature.",
    },
    {
      image: "renovation.jpg",
      heading: "Building Renovation",
      description:
        "Whether restoring an existing structure or transforming an outdated property, we renovate buildings with exceptional craftsmanship while preserving their character and improving modern functionality.",
    },
    {
      image: "construction.jpg",
      heading: "Construction Management",
      description:
        "From planning to project delivery, we oversee every stage of construction to ensure quality, efficiency and seamless collaboration between clients, consultants and contractors.",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav />

      {/* Hero Section */}

      <section className="pt-40 pb-24">
        <div className="w-[92%] max-w-5xl mx-auto text-center">

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
            className="uppercase tracking-[6px] text-[#94D82D] mb-4"
          >
            What We Do
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .2 }}
            className="head text-5xl md:text-6xl lg:text-7xl"
          >
            Our Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .4 }}
            className="text-gray-600 mt-8 text-lg leading-8 max-w-3xl mx-auto"
          >
            From concept development to project completion, we deliver
            thoughtful architectural solutions that combine creativity,
            functionality and timeless design for residential, commercial
            and hospitality spaces.
          </motion.p>

        </div>
      </section>

      {/* Services */}

      <section className="pb-28">
        <div className="w-[92%] max-w-7xl mx-auto flex flex-col gap-28">

          {servicesGrid.map((service, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: .2,
              }}
              transition={{
                duration: .7,
              }}
            >
              <ServiceItem
                {...service}
                reverse={index % 2 !== 0}
              />
            </motion.div>

          ))}

        </div>
      </section>

      {/* CTA */}

      <section className="bg-[#F8F8F8] py-28">

        <div className="w-[92%] max-w-4xl mx-auto text-center">

          <p className="uppercase tracking-[5px] text-[#94D82D] mb-5">
            Let's Work Together
          </p>

          <h2 className="head text-4xl md:text-6xl mb-8">
            Ready to bring your vision to life?
          </h2>

          <p className="text-gray-600 text-lg leading-8 max-w-2xl mx-auto">
            Whether you're planning a new development, redesigning an
            existing space or looking for professional construction
            management, we'd love to discuss your next project.
          </p>

          <NavLink
            to="/contact"
            className="inline-flex items-center gap-3 bg-[#94D82D] hover:bg-black transition text-white rounded-full px-8 py-4 mt-12"
          >
            Start Your Project
            <span>→</span>
          </NavLink>

        </div>

      </section>
    </>
  );
}

export default Services;