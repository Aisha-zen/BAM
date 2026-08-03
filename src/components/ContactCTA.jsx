import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function ContactCTA() {
  return (
    <section className="py-32 bg-black text-white overflow-hidden relative">

      {/* Decorative Circle */}

      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#94D82D]/10 blur-3xl" />

      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-white/5 blur-3xl" />

      <div className="relative w-[92%] max-w-5xl mx-auto text-center">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="uppercase tracking-[6px] text-[#94D82D] mb-5"
        >
          Ready When You Are
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="head text-5xl md:text-6xl lg:text-7xl leading-tight"
        >
          Let's Create
          <br />
          Something Extraordinary.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 max-w-2xl mx-auto text-gray-300 leading-8 text-lg"
        >
          Whether you're planning a private residence,
          commercial development, landscape design or a
          complete renovation, we'd love to hear about
          your vision and help bring it to life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12"
        >
          <NavLink
            to="/contact"
            className="inline-flex items-center gap-3 bg-[#94D82D] text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            Start Your Project

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

export default ContactCTA;