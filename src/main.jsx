import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Services from "./Services.jsx";
import Works from "./Works.jsx";
import Project from "./Project.jsx";
import ProjectDetails from "./projectdetails.jsx";
import Contact from "./Contact.jsx";
// import HomeAbout from "./components/HomeAbout.jsx";
import Footer from "./Footer.jsx";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <scrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Works" element={<Works />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
