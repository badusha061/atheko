"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import React from "react";
import { Service } from "../page";

export default function ServiceDetailPage() {
  const relatedServices = [
    { id: 1, title: "Service 1" },
    { id: 2, title: "Service 2" },
    { id: 3, title: "Service 3" },
    { id: 4, title: "Service 4" },
  ];

  const searchParams = useSearchParams();
  const data = searchParams.get("data");

  // Initialize the service object
  let service: Service | null = null;

  // If data exists, parse it
  if (data) {
    try {
      service = JSON.parse(decodeURIComponent(data));
      console.log("🚀 ~ ServiceDetailPage ~ service:", service);
    } catch (error) {
      console.error("Error parsing service data:", error);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-full p-5 md:p-10">
      {service && (
        <div className="relative h-[40vh] w-full rounded-md overflow-hidden md:h-[50vh] transition-transform transform hover:scale-105 duration-300 ease-in-out">
          <Image
            src={service.banner || ""}
            alt="Service Image"
            fill
            className="rounded-2xl object-cover"
          />
          <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 font-bold text-white py-2 px-6 rounded-2xl shadow hover:bg-blue-600 transition duration-200">
            Schedule Pick Up
          </button>
        </div>
      )}

      {service ? (
        <div className="mt-5 md:mt-10 flex flex-col px-5 md:px-10">
          <h2 className="text-2xl md:text-4xl font-bold">{service.name}</h2>
          <p className="mt-5 text-lg md:text-2xl">{service.description}</p>

          <h1 className="mt-5 text-xl text-blue-600 font-bold">
            Cleaning Steps
          </h1>
          {service.bulletPoints &&
          Array.isArray(service.bulletPoints) &&
          service.bulletPoints.length > 0 ? (
            <ul className="mt-5 list-disc list-inside">
              {service.bulletPoints.map((point, index) => (
                <li key={index} className="text-lg">
                  {point}
                </li>
              ))}
            </ul>
          ) : (
            <p>No bullet points available.</p>
          )}

          <div className="mt-10 flex flex-col md:flex-row w-full max-w-4xl justify-between">
            {/* Related Services */}
            <div className="mb-5 md:mb-0">
              <h1 className="text-xl text-blue-600 font-bold">
                Related Services
              </h1>
              <ul className="mt-5 list-disc list-inside">
                {relatedServices.map((service, index) => (
                  <li key={index} className="text-lg">
                    {service.title}
                  </li>
                ))}
              </ul>
            </div>

            {/* How Laundrology Works */}
            <div>
              <h1 className="text-xl text-blue-600 font-bold">
                How Laundrology Works
              </h1>
              <p className="mt-5 text-lg max-w-xl">
                You can either schedule a pickup through our website or visit
                our Laundrology Stores and get a special discount.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p>No service data available.</p>
      )}
    </div>
  );
}
