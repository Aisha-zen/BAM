import React from "react";

const ServiceCard = ({ title, description }) => (
  <div className="border border-[#94D82D] flex flex-col gap-7 p-3 hover:bg-[#94D82D]">
    <h2 className="head text-xl">{title}</h2>
    <p className="text-sm font-light">{description}</p>
  </div>
);

const ServiceGrid = () => {
  const services = [
    {
      title: "Architectural & Interior design",
      description:
        "Our architectural and interior design services focus on creating spaces that seamlessly blend aesthetics with functionality.",
    },
    {
      title: "Landscapde Design",
      description:
        "Transform your outdoor spaces with our landscape design services. From lush gardens to tranquil patios, we specialize in creating environments that harmonize with nature.",
    },
    {
      title: "Building Renovation",
      description:
        "Revitalize your existing structures with our building renovation services. Whether it's a home, office, or commercial space, we bring innovation and quality craftsmanship to every project.",
    },
    {
      title: "Construction Management",
      description:
        "Our construction management services ensure that your projects are delivered on time and within budget. From planning to execution, we oversee every aspect of the construction process.",
    },
  ];

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
};

export default ServiceGrid;
