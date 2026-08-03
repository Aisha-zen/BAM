import "./App.css";
import Nav from "./nav.jsx";
import HeroCarousel from "./components/HeroCarousel.jsx";
import ServicesPreview from "./components/ServicesPreview.jsx"
import HomeAbout from "./components/HomeAbout.jsx";
import FeaturedProjects from "./components/FeaturedProjects.jsx";
import ContactCTA from "./components/ContactCTA.jsx";
import Footer from "./Footer.jsx";



function Home() {
  return (
    <>
          <div className="min-h-screen flex flex-col">

        <Nav />        
        <HeroCarousel />
        <HomeAbout />
        <ServicesPreview />
        <FeaturedProjects />
        <ContactCTA />
        <Footer />
        </div>
    </>
  );
}

export default Home;
