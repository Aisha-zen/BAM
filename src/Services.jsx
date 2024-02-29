import React from "react";
import Nav from "./nav.jsx";
import "./App.css";
import { NavLink } from "react-router-dom";
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

      <div className="py-10 text-center md:w-full w-[90%] mx-auto">
        <h1 className="pb-5">
          "Explore Our Range of Expert Architectural Services Designed to Meet
          Your Every Need"
        </h1>
        <hr />
      </div>

      {/* <div className="md:w-[80%] w-[90%] mx-auto ">
        <NavLink to="/Project">
          <div className="flex md:flex-row flex-col justify-between gap-7 pb-10">
            <div>
              <img src="mab.jpg"></img>
            </div>
            <div className="flex  flex-col gap-5">
              <h1 className="font-semibold head lg:text-2xl">
                Architectural & Interior design
              </h1>
              <p className="lg:text-xm">
                {" "}
                At MAB design, we offer comprehensive architectural and interior
                design services tailored to meet your unique needs and vision.
                Our team of experienced architects and designers specializes in
                creating exceptional spaces that blend functionality,
                aesthetics, and sustainability. Whether you're looking to build
                your dream home, revitalize a commercial space, or enhance the
                interior of your property, we have the expertise to bring your
                vision to life.
              </p>
            </div>
          </div>
          <hr />
        </NavLink>

        <NavLink to="/Project">
          <div className="flex md:flex-row flex-col justify-between gap-7 pb-10">
            <div>
              <img src="faisal.jpg"></img>
            </div>
            <div className="flex  flex-col gap-5">
              <h1 className="font-semibold head lg:text-2xl">
                Landscapde Design
              </h1>
              <p className="lg:text-xm">
                {" "}
                Transform your outdoor space into a stunning oasis with our
                professional landscape design services at MAB Design.
                Our team of landscape architects and designers specializes in
                creating captivating outdoor environments that harmonize with
                nature and enhance your property's beauty and functionality.
                From lush gardens and serene water features to inviting outdoor
                living areas, we bring your landscape dreams to life.
              </p>
            </div>
          </div>
          <hr />
        </NavLink>

        <NavLink to="/Project">
          <div className="flex md:flex-row flex-col justify-between gap-7 pb-10">
            <div>
              <img src="mab.jpg"></img>
            </div>
            <div className="flex  flex-col gap-5">
              <h1 className="font-semibold head lg:text-2xl">
                Architectural & Interior design
              </h1>
              <p className="lg:text-xm">
                {" "}
                At MAB design, we offer comprehensive architectural and interior
                design services tailored to meet your unique needs and vision.
                Our team of experienced architects and designers specializes in
                creating exceptional spaces that blend functionality,
                aesthetics, and sustainability. Whether you're looking to build
                your dream home, revitalize a commercial space, or enhance the
                interior of your property, we have the expertise to bring your
                vision to life.
              </p>
            </div>
          </div>
          <hr />
        </NavLink>

        <NavLink to="/Project">
          <div className="flex md:flex-row flex-col justify-between gap-7 pb-10">
            <div>
              <img src="mab.jpg"></img>
            </div>
            <div className="flex  flex-col gap-5">
              <h1 className="font-semibold head lg:text-2xl">
                Architectural & Interior design
              </h1>
              <p className="lg:text-xm">
                {" "}
                At MAB design, we offer comprehensive architectural and interior
                design services tailored to meet your unique needs and vision.
                Our team of experienced architects and designers specializes in
                creating exceptional spaces that blend functionality,
                aesthetics, and sustainability. Whether you're looking to build
                your dream home, revitalize a commercial space, or enhance the
                interior of your property, we have the expertise to bring your
                vision to life.
              </p>
            </div>
          </div>
          <hr />
        </NavLink>
      </div> */}
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
