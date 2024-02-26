import "./App.css";
import Nav from "./nav.jsx";
import HeroVideo from "./HeroVideo.jsx";
import HeroCarousel from "./HeroCarousel.jsx";

import Services from "./Services.jsx";
import Contact from "./Contact.jsx";

import Footer from "./Footer.jsx";
import Works from "./Works.jsx";

function Home() {
  return (
    <>
      <Nav />
      {/* <HeroVideo /> */}
      <HeroCarousel />
      <Services />
      <Works />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
