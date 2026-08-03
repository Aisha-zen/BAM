import { useEffect } from "react";
import Nav from "./nav";
import "./App.css";
import ImageGrid from "./ImageGrid";

function Project() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="w-full pt-36 pb-24">
        <div className="w-[92%] max-w-7xl mx-auto">
          <p className="uppercase tracking-[4px] text-[#94D82D] text-sm mb-5">
            Portfolio
          </p>

          <div className="flex flex-col lg:flex-row justify-between gap-12 items-end">
            <div className="lg:w-[55%]">
              <h1 className="head text-5xl lg:text-7xl leading-[1.05] font-normal">
                Spaces That
                <br />
                Inspire.
              </h1>
            </div>

            <div className="lg:w-[35%]">
              <p className="text-gray-600 leading-8 text-lg">
                Our portfolio showcases residential, commercial, landscape, and
                interior projects designed with precision, functionality, and
                timeless elegance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ImageGrid />
    </>
  );
}

export default Project;