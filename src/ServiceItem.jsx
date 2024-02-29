import React from "react";
import "./App.css";

const ServiceItem = ({ image, heading, description }) => {
  return (
    <>
      <div className="p-4 flex flex-col lg:flex-row w-full justify-between gap-7 ">
        <div className="lg:w-[50%] w-full ">
          <img src={image} alt={heading} className=" mb-4 w-full" />
        </div>
        <div className="lg:w-[50%] w-full ">
          <h1 className="lg:text-2xl text-lg font-bold mb-2 head ">
            {heading}
          </h1>
          <p className="text-sm leading-7">{description}</p>
        </div>
      </div>
      <hr className="pt-10" />
    </>
  );
};

export default ServiceItem;
