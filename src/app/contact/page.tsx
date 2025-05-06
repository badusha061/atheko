import Image from "next/image";
import React from "react";

export default function Contact() {
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
      <div className="absolute z-50 h-full flex flex-col justify-start items-center">
        <h1 className="text-5xl font-bold mt-10">GET IN TOUCH</h1>
        {/* description */}
        <p className="text-2xl max-sm:text-sm max-w-6xl max-sm:max-w-[20rem] text-center mt-5">
          Use Our Contact Form For All Information Requests Or Contact Us
          Directly Using The Contact Information Below. All Information Is
          Treated With Complete Confidentiality And In Accordance With Our Data
          Protect
        </p>
        {/* contact form */}

        <div className="mt-10 relative max-sm:max-w-[20rem]">
          <div className=" p-5 pl-[5rem] max-sm:pl-5 border border-blue-600 flex flex-col gap-5 rounded-3xl">
            <div className="flex flex-row gap-10">
              <div className="flex flex-col">
                <p>Name</p>
                <input type="text" className="bg-gray-100 rounded-sm" />
              </div>
              <div className="flex flex-col">
                <p>E-Mail</p>
                <input type="text" className="bg-gray-100 rounded-sm" />
              </div>
            </div>
            <div className="flex flex-col">
              <p>Phone</p>
              <input type="number" className="bg-gray-100 rounded-sm" />
            </div>
            <div className="flex flex-col">
              <p>Message</p>
              {/* textarea */}
              <textarea className="bg-gray-100 rounded-sm" />
              <div className="w-full flex flex-row items-center justify-center">
                <button className="bg-blue-600 text-white mt-5 rounded-sm w-fit px-5">
                  Send Message
                </button>
              </div>
            </div>
          </div>
          {/* overlay box */}
          <div className="max-sm:hidden max-w-[12rem] absolute top-5 bottom-5 rounded-3xl gap-2 -left-[8rem] bg-blue-600 px-5 py-10 flex flex-col justify-center">
            <h1 className="text-2xl font-bold text-white leading-none ">
              CONTACT INFORMATION
            </h1>

            <p className="text-[10px] text-white">
              All Information Is Treated With Complete Confidentiality And In
              Accordance With Our Data Protect{" "}
            </p>
          </div>
        </div>

        <Image
          src="/contact/images.png"
          alt="contact"
          width={500}
          height={500}
          className={
            "absolute  bottom-0 right-0 left-0 m-auto w-[30rem]  z-10 opacity-40"
          }
        />
      </div>
    </section>
  );
}
