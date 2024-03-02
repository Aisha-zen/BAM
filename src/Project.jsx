import React from "react";
import Nav from "./nav.jsx";
import "./App.css";
import ImageGrid from "./ImageGrid.jsx";

function Project() {
  return (
    <>
      <Nav />
      <div className="flex flex-col gap-5 py-10">
        <h1 className="lg:text-4xl text-3xl text-bold text-center head">
          Our Projects
        </h1>
        <h2 className="font-light text-center md:text-1.2rem text-0.9rem md:w-full w-[95%] mx-auto ">
          Discover our portfolio featuring Landscape, Redesign, Construction,
          and Interior Design.
          <br /> Experience outdoor beauty, redesign transformations,
          construction marvels, and interior artistry.
        </h2>
        <hr />
      </div>

      <ImageGrid />
    </>
  );
}

export default Project;
