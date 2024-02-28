import React from "react";

const ImageGrid = () => {
  const images = [
    { src: "a.jpg", alt: "Image 1", description: "Private Residence" },
    {
      src: "roberto.jpg",
      alt: "Image 2",
      description: "Oceanside Dining Room",
    },
    { src: "salman.jpg", alt: "Image 1", description: "Salam Saqib residence" },
    { src: "work3.png", alt: "Image 2", description: " Private Villa" },
    { src: "mab.jpg", alt: "Image 1", description: "Residential building" },
    { src: "pergola.jpg", alt: "Image 2", description: "Pergola yard design" },
    // { src: "d.jpg", alt: "Image 1", description: "Description 1" },
    { src: "b.jpg", alt: "Image 2", description: "Outdoor design" },
    { src: "g.jpg", alt: "Image 1", description: "Oudoor Restuarant- Greece" },
    {
      src: "kam.jpg",
      alt: "Image 2",
      description: " Modern minimalist home design",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8  lg:gap-7 w-[90%] mx-auto">
      {images.map((image, index) => (
        <div key={index} className="relative overflow-hidden">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-[17rem] transform transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 flex items-end justify-center text-white pointer-events-none ">
            <div className="bg-black bg-opacity-50 p-4 w-full rounded italic font-bold head ">
              {image.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
