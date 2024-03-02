import React from "react";
import Nav from "./nav.jsx";
import "./App.css";
import ServiceItem from "./ServiceItem";

function Services() {
  const servicesGrid = [
    {
      image: "mab.jpg",
      heading: "Architectural & Interior design",
      description:
        "At MAB design, we offer comprehensive architectural and interior design services tailored to meet your unique needs and vision. Our team of experienced architects and designers specializes in creating exceptional spaces that blend functionality, aesthetics, and sustainability. Whether you're looking to build your dream home, revitalize a commercial space, or enhance the interior of your property, we have the expertise to bring your vision to life.",
    },
    {
      image: "faisal.jpg",
      heading: "Landscape Design",
      description:
        "Transform your outdoor space into a stunning oasis with our professional landscape design services at [Your Company Name]. Our team of landscape architects and designers specializes in creating captivating outdoor environments that harmonize with nature and enhance your property's beauty and functionality. From lush gardens and serene water features to inviting outdoor living areas, we bring your landscape dreams to life.",
    },
    {
      image: "renovation.jpg",
      heading: "Building Renovation",
      description:
        "Our building renovation services breathe new life into existing structures, from historical landmarks to modern updates. With meticulous attention to detail and quality craftsmanship, our experienced team transforms client visions into reality. Prioritizing sustainability, functionality, and aesthetic appeal, we ensure renovated spaces exceed expectations. Trust us to revitalize your property with innovative solutions that endure.",
    },
    {
      image: "construction.jpg",
      heading: "Construction Management",
      description:
        "Our construction management services are tailored to meet the unique needs of each project. We work closely with clients, architects, engineers, and subcontractors to develop comprehensive project plans that align with project goals and objectives. From pre-construction planning to post-construction closeout, we provide proactive leadership and effective communication to keep projects on track and mitigate potential risks.",
    },
  ];
  return (
    <>
      <Nav />

      <div className="flex flex-col gap-5 py-10">
        <h1 className="lg:text-4xl text-3xl text-bold text-center head">
          Our Services
        </h1>
        <h2 className="font-light text-center md:text-1.2rem text-0.9rem md:w-full w-[95%] mx-auto ">
          "Explore Our Range of Expert Architectural Services Designed to Meet
          Your Every Need"
        </h2>
        <hr />
      </div>

      <div className="container mx-auto px-4">
        <div className="gap-4">
          {servicesGrid.map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;
