import React from "react";
import TitleSection from "./widgets/CommonTitle";

export default function AboutCompany() {
  return (
    <section
      style={{
        backgroundImage: 'url("/home/home-washing-machine.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
      className="relative flex flex-col items-center justify-between px-5 md:px-10 h-full"
    >
      {/* Overlay for reducing opacity of the background image */}
      <div className="absolute inset-0 bg-white opacity-90" />

      {/* Content */}
      <div className="relative z-10 mt-10 text-center">
        {/* Main Title */}
        <div className="max-w-md mx-auto">
          <TitleSection title="About Our Company" />
        </div>

        {/* Main Subtitle */}
        <h2 className="mt-10 text-2xl md:text-3xl font-semibold text-black">
          Choose <span className="text-blue-600">The Best</span> Premium Laundry
          Service
        </h2>

        {/* Description */}
        <p className="mt-10 md:mt-32 max-w-6xl text-xl md:text-3xl text-gray-800 mx-auto tracking-wider leading-relaxed">
          <span className="leading-relaxed">
            Say goodbye to laundry day worries and hello to effortless care with
          </span>
          <span className="block whitespace-nowrap"></span>
          <span className="leading-relaxed">
            <span className="text-blue-600 font-bold">
              {" "}
              ATHEKO Premium Laundry
            </span>
            , your trusted partner in premium garment care. We are committed to
            providing a laundry experience
          </span>
          <span className="leading-relaxed">
            that saves you time, ensures pristine results, and delivers
            unmatched convenience.
          </span>
        </p>
      </div>

      {/* Statistics Section */}
      <div className="relative z-10 flex flex-wrap justify-between items-center mb-10 w-full max-w-5xl">
        <div className="text-center flex-col items-center">
          <h3 className="text-5xl font-bold text-gray-400">456</h3>
          <p className="text-gray-600 ml-2">Happy Pickup</p>
        </div>
        <div className="h-20 border-l-2 border-gray-400 mx-4" />{" "}
        {/* Vertical Line */}
        <div className="text-center flex-col items-center">
          <h3 className="text-5xl font-bold text-gray-400">186</h3>
          <p className="text-gray-600 ml-2">Happy Clients</p>
        </div>
        <div className="h-20 border-l-2 border-gray-400 mx-4" />{" "}
        {/* Vertical Line */}
        <div className="text-center flex-col items-center">
          <h3 className="text-5xl font-bold text-gray-400">32</h3>
          <p className="text-gray-600 ml-2">Services</p>
        </div>
        <div className="h-20 border-l-2 border-gray-400 mx-4" />{" "}
        {/* Vertical Line */}
        <div className="text-center flex-col items-center">
          <h3 className="text-5xl font-bold text-gray-400">2</h3>
          <p className="text-gray-600 ml-2">Awards</p>
        </div>
      </div>
    </section>
  );
}
