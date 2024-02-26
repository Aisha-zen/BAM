import React from "react";
import "./App.css";
import Nav from "./nav.jsx";
import go from "../public/go.svg";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import heroVideo from "../public/heroVideo.mp4";
import garden from "../public/garden.mp4";
import pergola from "../public/pergola.jpg";
import mab from "../public/mab.jpg";

function HeroVideo() {
  return (
    <>
      <div className="relative w-full h-[40rem]">
        <img className=" h-full w-full object-cover" src={mab} />
        <div className="absolute inset-0  flex  flex-col items-center justify-center w-full">
          {/* <div className="relative bottom-[40%] w-full px-[1rem]">
            <header className="flex items-center justify-between text-white bg-gray-20 w-full  shadow-sm">
              <div className="font-medium logo">
                <NavLink to="/">mabdesign</NavLink>
              </div>
              <nav className="flex">
                <div className="hidden md:flex gap-5 font-regular items-center">
                  <NavLink to="/Home">Home</NavLink>
                  <NavLink to="/about">About</NavLink>
                  <NavLink to="/Services">Services </NavLink>
                  <NavLink to="/Works">Our works </NavLink>
                  <NavLink
                    to="/Contact"
                    className="bg-[#94D82D] px-4 py-2 text-white flex items-center"
                  >
                    {" "}
                    Contact <img src={go} />{" "}
                  </NavLink>
                </div>
                <div className="md:hidden">
                  <button onClick={toogleNavbar}>
                    {" "}
                    {isOpen ? <X /> : <Menu />}{" "}
                  </button>
                </div>
              </nav>
              {isOpen && (
                <motion.div
                  animate={{ y: 0 }}
                  initial={{ y: 500 }}
                  className="w-full h-screen flex flex-col gap-10 pt-5 font-regular"
                >
                  <NavLink to="/about" onClick={closeMenu}>
                    About
                  </NavLink>
                  <NavLink to="/Services" onClick={closeMenu}>
                    Services{" "}
                  </NavLink>
                  <NavLink to="/Works" onClick={closeMenu}>
                    Our works{" "}
                  </NavLink>
                  <NavLink
                    to="/Contact"
                    onClick={closeMenu}
                    className="bg-[#94D82D] px-4 py-2 text-white flex items-center"
                  >
                    {" "}
                    Contact <img src={go} />{" "}
                  </NavLink>
                </motion.div>
              )}
            </header>
            <hr />
          </div> */}
          <div>
            <h1 className="text-3xl font-thin text-white head italic">
              "Where Design Meets Nature
              <br /> Explore Our Architectural Wonders"
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroVideo;
