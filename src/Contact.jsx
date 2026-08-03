import React, { useEffect } from "react";
import Nav from "./nav";
import Footer from "./Footer";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav />

      <section className="w-full pt-24 pb-20">
        <div className="w-[95%] mx-auto flex flex-col lg:flex-row justify-between gap-16">
          {/* Left Content */}
          <div className="lg:w-[40%]">
            <p className="uppercase tracking-[4px] text-[#94D82D] mb-3">
              Contact Us
            </p>

            <h1 className="head text-4xl lg:text-6xl leading-tight">
              Let's Build
              <br />
              Your Vision.
            </h1>

            <p className="mt-6 text-gray-600 leading-8 max-w-md">
              Whether you're planning a dream home, commercial development, or
              renovation project, we'd love to hear your ideas and help bring
              them to life.
            </p>

            <button className="mt-10 bg-[#94D82D] text-white px-8 py-4 rounded-full hover:bg-[#7cb51f] transition">
              Schedule a Consultation
            </button>
          </div>

          {/* Right Content */}
          <div className="lg:w-[40%] flex flex-col gap-10">
            <div>
              <p className="uppercase text-sm tracking-[3px] text-gray-500 mb-2">
                Office
              </p>

              <h3 className="head text-3xl">
                Ibadan, Oyo State
              </h3>

              <p className="mt-3 text-gray-600 leading-8">
                Oluyole Extension,
                <br />
                Off Akala Expressway,
                <br />
                New Garage, Ibadan.
              </p>
            </div>

            <div>
              <p className="uppercase text-sm tracking-[3px] text-gray-500 mb-2">
                Email
              </p>

              <a
                href="mailto:bamarchitectco@gmail.com"
                className="head text-[#94D82D] text-2xl lg:text-3xl hover:underline"
              >
                bamarchitectco@gmail.com
              </a>
            </div>

            <div>
              <p className="uppercase text-sm tracking-[3px] text-gray-500 mb-2">
                Phone
              </p>

              <a
                href="tel:+2347030173370"
                className="head text-[#94D82D] text-2xl lg:text-3xl hover:underline"
              >
                +234 703 017 3370
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="w-[95%] mx-auto pb-24">
        <div className="mb-8">
          <h2 className="head text-4xl">Visit Our Studio</h2>

          <p className="text-gray-600 mt-3">
            We'd be delighted to welcome you to our office. Kindly schedule an
            appointment before your visit.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl shadow-xl h-[500px]">
          <iframe
            title="MabArchitect Location"
            src="https://www.google.com/maps?q=Oluyole+Extension,+Off+Akala+Expressway,+New+Garage,+Ibadan&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
      
      <Footer/>
    </>
  );
}

export default Contact;