import "./App.css";

function About() {
  return (
    <div className="w-full">
      <div className="flex lg:flex-row flex-col lg:pt-20 pt-10 lg:pb-40 md:pb-[50%] pb-[80%] justify-between w-[95%] mx-auto  ">
        <div className="lg:w-[48%] md:w-full h-full">
          <div className="flex items-center gap-3 text-[#94D82D]">
            <img src="line.png"></img>
            <p>About Us</p>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="lg:text-4xl text-2xl font-normal head">
              We help to bring your dream home to reality
            </h1>
            <p className="text-[.9rem]">
              {" "}
              With our passion for design and commitment to excellence, we
              strive to create spaces that inspire and delight..
            </p>
            <p className="text-[.9rem]">
              {" "}
              Our team of talented architects, designers, and craftsmen work
              tirelessly to bring your vision to life, ensuring that every
              detail is meticulously crafted to perfection. With years of
              experience in the industry, we have earned a reputation for
              delivering exceptional archiectural solutions tailored to our
              clients' unique needs and preferences.
            </p>
          </div>
        </div>
        <div className="flex lg:w-[48%] md:w-[90%] mx-auto w-full md:pt-[30%] pt-[70%] lg:pt-0 gap-5  items-center relative">
          <div className="w-[48%] h-[380px] absolute">
            <img src="about1.png" className="w-full h-full"></img>
          </div>
          <div className="w-[48%] h-[380px] absolute lg:left-[55%] md:left-[50%] left-[52%]  lg:top-[20%] md:top-[65%] top-[50%]">
            <img src="about2.png" className="w-full h-full"></img>
          </div>
        </div>
      </div>

      <div className="flex md:flex-row flex-col md:items-center justify-between pb-10 w-[95%] mx-auto">
        <div className="flex lg:flex-row md:flex-col flex-row items-center gap-3">
          <p className="head text-4xl">100%</p>
          <p className="font-light text-[.8rem]">SATISFIED CLIENTS</p>
        </div>
        <div className="flex lg:flex-row md:flex-col flex-row items-center gap-3">
          <p className="head text-4xl">250</p>
          <p className="font-light text-[.8rem]">EMPLOYEES ON WORLDWIDE</p>
        </div>
        <div className="flex lg:flex-row md:flex-col flex-row items-center gap-3">
          <p className="head text-4xl">400</p>
          <p className="font-light text-[.8rem]">
            PROJECTS COMPLETED ON 6 COUNTRIES
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default About;
