import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function HomeAbout() {
  return (
    <section className="py-24 lg:py-36">
      <div className="w-[92%] max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Left Image */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-3xl"
        >
          <img
            src="mab.jpg"
            alt="MabArchitect"
            className="w-full h-[350px] md:h-[500px] lg:h-[650px] object-cover transition duration-700 hover:scale-105"
          />
        </motion.div>

        {/* Right Content */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[6px] text-[#94D82D] mb-4">
            About Us
          </p>

          <h2 className="head text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
            We design spaces
            <br />
            that inspire people.
          </h2>

          <p className="text-gray-600 leading-8 text-lg mb-6">
            At MabArchitect, we believe great architecture begins with
            understanding people. Every project is thoughtfully designed to
            balance beauty, functionality and sustainability.
          </p>

          <p className="text-gray-600 leading-8 text-lg mb-10">
            Whether it's a private residence, commercial development or
            interior transformation, we create spaces that reflect our
            clients' vision while standing the test of time.
          </p>

          <NavLink
            to="/about"
            className="inline-flex items-center gap-3 font-medium group"
          >
            Learn More About Us

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-2"
            />
          </NavLink>
        </motion.div>

      </div>
    </section>
  );
}

export default HomeAbout;