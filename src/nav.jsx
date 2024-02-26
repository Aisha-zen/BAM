import "./App.css";
import go from "../public/go.svg";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toogleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="flex items-center justify-between px-[1rem]  w-full flex-wrap  top-0 z-20 bg-white shadow-sm">
        <div className="font-medium logo">
          <NavLink to="/Home">mabdesign</NavLink>
        </div>
        <nav className="flex">
          <div className="hidden md:flex gap-5 font-regular items-center">
            <NavLink to="/Home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/Services">Services </NavLink>
            <NavLink to="/Project">Projects </NavLink>
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
            className="w-full h-screen flex flex-col gap-10 pt-5  font-regular"
          >
            <NavLink to="/about" onClick={closeMenu}>
              About
            </NavLink>
            <NavLink to="/Services" onClick={closeMenu}>
              Services{" "}
            </NavLink>
            <NavLink to="/Project" onClick={closeMenu}>
              Projects{" "}
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
    </>
  );
}

export default Nav;
