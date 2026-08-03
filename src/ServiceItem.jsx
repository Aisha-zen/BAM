import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function ServiceItem({
  image,
  heading,
  description,
  reverse = false,
}) {
  return (
    <section
      className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Image */}

      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
        className="overflow-hidden rounded-3xl"
      >
        <img
          src={image}
          alt={heading}
          className="w-full h-[320px] md:h-[450px] lg:h-[520px] object-cover transition duration-700 hover:scale-110"
        />
      </motion.div>

      {/* Content */}

      <div className="flex flex-col justify-center">

        <p className="uppercase tracking-[5px] text-[#94D82D] mb-4 text-sm">
          Our Expertise
        </p>

        <h2 className="head text-4xl lg:text-5xl leading-tight mb-6">
          {heading}
        </h2>

        <p className="text-gray-600 leading-8 text-lg">
          {description}
        </p>

        {/* <button
          className="
            mt-10
            flex
            items-center
            gap-3
            w-fit
            font-medium
            group
          "
        >
          Learn More

          <ArrowRight
            size={18}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-2
            "
          />
        </button> */}

      </div>
    </section>
  );
}

export default ServiceItem;