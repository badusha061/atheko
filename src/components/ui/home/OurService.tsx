'use client'

import TitleSection from "./widgets/CommonTitle";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ServiceUI } from "@/types/type";
import axios from "axios";


export default function OurService() {
  const [services , setServices] = useState<ServiceUI[]>([])



  useEffect(() => {
        const getFetch = async () => {
            try{
                const response = await axios.get('/api/services/')
                if(response.status === 200){
                    setServices(response.data['data']) 
                }
            }catch (error : unknown){
                console.log(error) 
            }
        }
        getFetch()
    },[])
  


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
          {services.map((service, index) => {
            if (index >= 4) return null;
            return (
              <div
                key={index}
                className="relative flex flex-col items-center group"
                  >
                <div className=" md:h-[8rem] md:w-[8rem]   gap-3  border border-blue-600 rounded-[2rem] overflow-hidden relative shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                    <Image
                      alt={service.serviceName}
                      src={service.serviceImage?.url || ''}
                      width={500}
                      height={500}
                      objectFit="cover"
                      className="rounded-[2rem] object-cover "
                    />
                  </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-1rem] text-white text-lg sm:text-xl font-bold bg-blue-600 w-36 sm:w-44 h-8 sm:h-10 flex items-center justify-center rounded-3xl shadow-lg group-hover:scale-110 group-hover:bg-blue-700 transition duration-300">
                  <h4>{service.serviceName}</h4>
                </div>
              </div>
            );
          })}
        </section>

      </div>
    </section>
  );
}
