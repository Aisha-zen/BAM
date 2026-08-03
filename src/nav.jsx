import "./App.css";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import go from "../public/go.svg";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor =
    isHome && !scrolled
      ? "text-white"
      : "text-gray-800";

  const activeColor =
    "text-[#94D82D]";

    const getLinkClassName = ({ isActive }) =>
      `relative transition duration-300 ${
        isActive
          ? "text-[#94D82D] font-medium"
          : "text-gray-700 hover:text-[#94D82D]"
      }`;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? "bg-white/85 backdrop-blur-xl shadow-sm py-5"
            : "bg-transparent py-8"
        }`}
      >
        <div className="w-[92%] max-w-7xl mx-auto flex items-center justify-between">

          {/* Logo */}

          <NavLink
            to="/"
            className={`head text-3xl transition duration-500 ${
              isHome && !scrolled
                ? "text-white"
                : "text-black"
            }`}
          >
            MabArchitect
          </NavLink>

          {/* Desktop */}

          <nav className="hidden md:flex items-center gap-10">

            <NavLink to="/" className={getLinkClassName}>
              Home
            </NavLink>

            <NavLink to="/about" className={getLinkClassName}>
              About
            </NavLink>

            <NavLink to="/services" className={getLinkClassName}>
              Services
            </NavLink>

            <NavLink to="/project" className={getLinkClassName}>
              Projects
            </NavLink>

            <NavLink
              to="/contact"
              className={`flex items-center gap-2 border rounded-full px-6 py-2 transition duration-300 ${
                isHome && !scrolled
                  ? "text-white border-white hover:bg-white hover:text-black"
                  : "border-black hover:bg-black hover:text-white"
              }`}
            >
              Contact

              <img
                src={go}
                alt=""
                className="w-4"
              />
            </NavLink>

          </nav>

          {/* Mobile */}

          <button
            onClick={() => setIsOpen(true)}
            className={`md:hidden ${
              isHome && !scrolled
                ? "text-white"
                : "text-black"
            }`}
          >
            <Menu size={30} />
          </button>

        </div>
      </motion.header>

      {/* Mobile Menu */}

      <AnimatePresence>

        {isOpen && (

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: .5
            }}
            className="fixed inset-0 bg-white z-[100]"
          >

            <div className="w-[90%] mx-auto py-8">

              <div className="flex justify-end">

                <button
                  onClick={() => setIsOpen(false)}
                >
                  <X size={32}/>
                </button>

              </div>

              <div className="flex flex-col gap-10 mt-20">

                {[
                  ["Home","/"],
                  ["About","/about"],
                  ["Services","/services"],
                  ["Projects","/project"],
                  ["Contact","/contact"]
                ].map(([name,path],index)=>(

                  <motion.div
                    key={name}
                    initial={{
                      opacity:0,
                      x:50
                    }}
                    animate={{
                      opacity:1,
                      x:0
                    }}
                    transition={{
                      delay:index*.1
                    }}
                  >

                    <NavLink
                      to={path}
                      onClick={() => setIsOpen(false)}
                      className="head text-5xl"
                    >
                      {name}
                    </NavLink>

                  </motion.div>

                ))}

              </div>

            </div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}

export default Nav;