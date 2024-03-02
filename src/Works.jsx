import React from "react";
import "./App.css";
import go from "../public/go.svg";
import Nav from "./nav";
import { NavLink } from "react-router-dom";

function Works() {
  return (
    <>
      <div className="w-full pt-10 ">
        <div className="w-[95%] mx-auto">
          {/* <div className="flex items-center gap-3 text-[#94D82D] ">
              <img src="line.png"></img>
              <p>Our recent works</p>
            </div> */}
          <div className="w-full pb-5 flex flex-col justify-center items-center gap-5 mt-5">
            <h1 className="lg:text-4xl text-2xl  font-normal head ">
              Some of our crafts made with love
            </h1>
            <p className="text-center font-light">
              Discover the essence of our architectural vision through a curated
              collection of our finest projects. Dive into our
              <br /> portfolio and witness the artistry and innovation that
              define our architectural practice.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-7 w-[90%] mx-auto">
            {/* <!-- Grid Item 1 --> */}
            <div className="bg-gray-200 p-4">
              <img
                src="a.jpg"
                alt="Image 1"
                className="w-full h-60 object-cover"
              />
              <h2 className="text-xl font-bold mt-2 head">
                Residential Building
              </h2>
              {/* <p className="mt-2">Description 1</p> */}
            </div>

            {/* <!-- Grid Item 2 --> */}
            <div className="bg-gray-200 p-4">
              <img
                src="b.jpg"
                alt="Image 2"
                className="w-full h-60 object-cover"
              />
              <h2 className="text-xl font-bold mt-2 head">
                Outdoor sitting area{" "}
              </h2>
              {/* <p className="mt-2">Description 2</p> */}
            </div>

            {/* <!-- Grid Item 3 --> */}
            <div className="bg-gray-200 p-4">
              <img
                src="c.jpg"
                alt="Image 3"
                className="w-full h-60 object-cover"
              />
              <h2 className="text-xl font-bold mt-2 head">
                Interior Renovation
              </h2>
              {/* <p className="mt-2">Description 3</p> */}
            </div>

            {/* <!-- Grid Item 4 --> */}
            <div className="bg-gray-200 p-4">
              <img
                src="d.jpg"
                alt="Image 4"
                className="w-full h-60 object-cover"
              />
              <h2 className="text-xl font-bold mt-2 head">Landscape Design</h2>
              {/* <p className="mt-2">Description 4</p> */}
            </div>
          </div>

          <div className="flex justify-center p-10">
            <NavLink to="/Project">
              <button className="bg-[#94D82D] px-7 py-2 font-medium text-white flex items-center">
                {" "}
                See All
              </button>{" "}
            </NavLink>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}

export default Works;
