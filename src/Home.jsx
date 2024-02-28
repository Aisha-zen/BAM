import "./App.css";
import Nav from "./nav.jsx";
import HeroCarousel from "./HeroCarousel.jsx";
import Services from "./HServices.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import Works from "./Works.jsx";


function Home() {
  return (
    <>
      <Nav />
      <HeroCarousel />
      <Services />
      <Works />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
