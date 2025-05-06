import React from "react";
import TitleSection from "./widgets/CommonTitle";
import Image from "next/image";

export default function OurService() {
  interface ServiceCard {
    id: number;
    title: string;
    imageUrl: string;
  }

  const services: ServiceCard[] = [
    {
      id: 1,
      title: "Service 1",
      imageUrl:
        "https://media.istockphoto.com/id/1092103792/photo/woman-with-ironed-clothes-in-the-laundry.jpg?s=612x612&w=0&k=20&c=E9FG7CbFDHYdftteGTRh7MXOkX2YyFJa2nQzlpMEAWY=",
    },
    {
      id: 2,
      title: "Service 2",
      imageUrl:
        "https://media.istockphoto.com/id/1092103792/photo/woman-with-ironed-clothes-in-the-laundry.jpg?s=612x612&w=0&k=20&c=E9FG7CbFDHYdftteGTRh7MXOkX2YyFJa2nQzlpMEAWY=",
    },
    {
      id: 3,
      title: "Service 3",
      imageUrl:
        "https://media.istockphoto.com/id/1092103792/photo/woman-with-ironed-clothes-in-the-laundry.jpg?s=612x612&w=0&k=20&c=E9FG7CbFDHYdftteGTRh7MXOkX2YyFJa2nQzlpMEAWY=",
    },
    {
      id: 4,
      title: "Service 4",
      imageUrl:
        "https://media.istockphoto.com/id/1092103792/photo/woman-with-ironed-clothes-in-the-laundry.jpg?s=612x612&w=0&k=20&c=E9FG7CbFDHYdftteGTRh7MXOkX2YyFJa2nQzlpMEAWY=",
    },
  ];

  return (
    <section className="relative flex flex-col items-center px-5 md:px-10 pb-20">
      {/* Content */}
      <div className="mt-10 text-center">
        {/* Main Title */}
        <div className="max-w-md mx-auto">
          <TitleSection title="OUR SERVICES" />
        </div>

        {/* Our Services */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative flex flex-col items-center group"
            >
              <div className="h-[18rem] w-[14rem] sm:h-[20rem] sm:w-[16rem] border border-blue-600 rounded-[2rem] overflow-hidden relative shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                <Image
                  alt={service.title}
                  src={service.imageUrl}
                  width={500}
                  height={500}
                  objectFit="cover"
                  className="rounded-[2rem] object-cover w-full h-full"
                />
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-1rem] text-white text-lg sm:text-xl font-bold bg-blue-600 w-36 sm:w-44 h-8 sm:h-10 flex items-center justify-center rounded-3xl shadow-lg group-hover:scale-110 group-hover:bg-blue-700 transition duration-300">
                <h4>{service.title}</h4>
              </div>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
}
