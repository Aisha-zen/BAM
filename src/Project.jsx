import React from "react";
import Nav from "./nav.jsx";
import "./App.css";
import ImageGrid from "./ImageGrid.jsx";


function Project() {
  return (
    <>
      <Nav />
      <div>
        <h1 className="font-medium head py-10 text-center md:text-xl text-xm md:w-full w-[95%] mx-auto ">
          Discover our portfolio featuring Landscape, Redesign, Construction,
          and Interior Design.
          <br /> Experience outdoor beauty, redesign transformations,
          construction marvels, and interior artistry.
        </h1>
      </div>
     
      <ImageGrid/>
    </>
  );
}

export default Project;
