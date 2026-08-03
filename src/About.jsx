import { useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import Nav from "./nav";
import Footer from "./Footer";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav />

      {/* Hero */}

      <section className="pt-40 pb-24">
        <div className="w-[92%] max-w-5xl mx-auto text-center">

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[6px] text-[#94D82D] mb-4"
          >
            About MabArchitect
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .2 }}
            className="head text-5xl md:text-6xl lg:text-7xl"
          >
            Creating Spaces
            <br />
            That Inspire.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .4 }}
            className="mt-8 text-gray-600 text-lg leading-8 max-w-3xl mx-auto"
          >
            We believe architecture is more than designing buildings.
            It is about creating meaningful spaces that improve the way
            people live, work and connect.
          </motion.p>

        </div>
      </section>

      {/* Story */}

      <section className="py-24">
        <div className="w-[92%] max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <motion.img
            whileHover={{ scale: 1.02 }}
            transition={{ duration: .4 }}
            src="mab.jpg"
            alt=""
            className="rounded-3xl w-full h-[550px] object-cover"
          />

          <div>

            <p className="uppercase tracking-[5px] text-[#94D82D] mb-4">
              Our Story
            </p>

            <h2 className="head text-4xl lg:text-5xl mb-8">
              Designing with Purpose
            </h2>

            <p className="text-gray-600 leading-8 mb-6">
              MabArchitect is an architectural and design studio dedicated
              to creating innovative, functional and timeless spaces.
            </p>

            <p className="text-gray-600 leading-8 mb-6">
              From residential homes to commercial developments, every
              project is approached with creativity, technical excellence
              and attention to detail.
            </p>

            <p className="text-gray-600 leading-8">
              We collaborate closely with our clients to transform ideas
              into spaces that are practical, sustainable and beautiful.
            </p>

          </div>

        </div>
      </section>

      {/* Stats */}

      <section className="bg-[#F8F8F8] py-24">

        <div className="w-[92%] max-w-7xl mx-auto grid md:grid-cols-4 gap-12 text-center">

          <div>
            <h2 className="head text-5xl text-[#94D82D]">50+</h2>
            <p className="mt-3 text-gray-600">
              Completed Projects
            </p>
          </div>

          <div>
            <h2 className="head text-5xl text-[#94D82D]">8+</h2>
            <p className="mt-3 text-gray-600">
              Years Experience
            </p>
          </div>

          <div>
            <h2 className="head text-5xl text-[#94D82D]">100%</h2>
            <p className="mt-3 text-gray-600">
              Client Satisfaction
            </p>
          </div>

          <div>
            <h2 className="head text-5xl text-[#94D82D]">20+</h2>
            <p className="mt-3 text-gray-600">
              Design Awards
            </p>
          </div>

        </div>

      </section>

      {/* Design Process */}

      <section className="py-28">

        <div className="w-[92%] max-w-7xl mx-auto">

          <p className="uppercase tracking-[5px] text-[#94D82D] mb-4">
            Our Process
          </p>

          <h2 className="head text-5xl mb-20">
            How We Work
          </h2>

          <div className="grid lg:grid-cols-4 gap-10">

            {[
              ["01", "Discovery"],
              ["02", "Concept Design"],
              ["03", "Development"],
              ["04", "Construction"],
            ].map(([number, title]) => (

              <div key={number}>

                <h3 className="head text-6xl text-[#94D82D] mb-6">
                  {number}
                </h3>

                <h4 className="text-2xl font-semibold mb-4">
                  {title}
                </h4>

                <p className="text-gray-600 leading-7">
                  Every project follows a structured process to ensure
                  quality, collaboration and exceptional outcomes.
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-black text-white py-28">

        <div className="w-[92%] max-w-4xl mx-auto text-center">

          <h2 className="head text-5xl mb-8">
            Let's Design Something Extraordinary.
          </h2>

          <p className="text-gray-300 leading-8 max-w-2xl mx-auto">
            Whether you're building from the ground up or transforming
            an existing space, we'd love to hear your ideas.
          </p>

          <NavLink
            to="/contact"
            className="inline-block mt-10 bg-[#94D82D] rounded-full px-8 py-4"
          >
            Book a Consultation
          </NavLink>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default About;