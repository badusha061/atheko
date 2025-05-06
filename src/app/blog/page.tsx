"use client";

import React, { useState } from "react";

export default function Blog() {
  const reviews = [
    "With 3 kids at home, I always have my hands full. One less thing to worry about has been my laundry service. From baby bedding to my designer sarees polishing, everything gets picked up and delivered perfectly. Now laundry takes all of a minute - that's the time to book a pickup with Laundrology.",
    "Laundrology has been a lifesaver for my busy schedule. They offer timely pickups and deliveries with excellent quality service. I can't imagine doing laundry without them anymore!",
    "From my daily wear to delicate fabrics, Laundrology has always handled my clothes with utmost care. Highly recommended for their professionalism and punctuality.",
    "The convenience and quality offered by Laundrology are unparalleled. I love how hassle-free their services are, making my life so much easier.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section
      style={{
        backgroundImage: 'url("/home/home-washing-machine.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-screen  relative flex flex-col justify-start items-center"
    >
      {/* Overlay for reducing opacity of the background image */}
      <div className="absolute inset-0 bg-white opacity-90" />

      {/* heading */}
      <div className="-mt-20 absolute z-50 h-full flex flex-col justify-center items-center">
        <div className="flex flex-row items-center justify-center  gap-10">
          <div className="h-[2px] w-14 bg-blue-600 mt-10" />
          <h1 className="text-5xl font-bold mt-10">THEY USE OUR SERVICES</h1>
          <div className="h-[2px] w-14 bg-blue-600 mt-10" />
        </div>
        {/* description */}
        <p className="text-3xl max-sm:text-sm max-w-6xl max-sm:max-w-[20rem] text-center mt-10">
          We earn our customer loyalty by providing services that meet and
          exceed expectations and here&apos;s what a few of our valuable patrons
          has to say.
        </p>
        {/* contact Carosel */}
        <div className="mt-[5rem] relative flex flex-row items-center justify-center w-full max-w-lg md:max-w-5xl mx-auto z-10">
          {/* Left Button */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 md:left-0 text-xl md:text-3xl font-bold text-blue-600 p-2 md:p-4 rounded-full hover:bg-blue-100"
            aria-label="Previous"
          >
            &#8592;
          </button>

          {/* Review Text */}
          <div className="flex-1 text-center px-4 md:px-8">
            <p className="text-base md:text-xl text-black">
              {reviews[currentIndex]}
            </p>
          </div>

          {/* Right Button */}
          <button
            onClick={handleNext}
            className="absolute right-4 md:right-0 text-xl md:text-3xl font-bold text-blue-600 p-2 md:p-4 rounded-full hover:bg-blue-100"
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>

        <div className="w-[30rem] h-[2px] bg-blue-600 mt-10" />
      </div>
    </section>
  );
}
