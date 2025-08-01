"use client";
import React, { useState } from "react";
import Carousel from "./widgets/Carosel";

import {  Inter} from 'next/font/google';



const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500'], 
    });


interface FAQ {
  question: string;
  answer: string;
}

export default function Faq() {
  const slides: string[] = [
    "https://media.istockphoto.com/id/1329135522/photo/stack-of-folded-clean-sheets-surgical-clothes-and-industrial-iron-in-an-industrial-laundry.jpg?s=612x612&w=0&k=20&c=0IEKirVnN0C9m2XHIRdDF0HQjruZx_E4fY5Df6qyqLc=",
    "https://media.istockphoto.com/id/1329135522/photo/stack-of-folded-clean-sheets-surgical-clothes-and-industrial-iron-in-an-industrial-laundry.jpg?s=612x612&w=0&k=20&c=0IEKirVnN0C9m2XHIRdDF0HQjruZx_E4fY5Df6qyqLc=",
    "https://media.istockphoto.com/id/1329135522/photo/stack-of-folded-clean-sheets-surgical-clothes-and-industrial-iron-in-an-industrial-laundry.jpg?s=612x612&w=0&k=20&c=0IEKirVnN0C9m2XHIRdDF0HQjruZx_E4fY5Df6qyqLc=",
    "https://media.istockphoto.com/id/1329135522/photo/stack-of-folded-clean-sheets-surgical-clothes-and-industrial-iron-in-an-industrial-laundry.jpg?s=612x612&w=0&k=20&c=0IEKirVnN0C9m2XHIRdDF0HQjruZx_E4fY5Df6qyqLc=",
  ];

  const faqs: FAQ[] = [
    {
      question: "What is your refund policy?",
      answer: "We offer a 30-day money-back guarantee.",
    },
    {
      question: "How can I track my order?",
      answer:
        "You can track your order through the tracking link sent to your email.",
    },
    {
      question: "Do you provide international shipping?",
      answer:
        "Yes, we ship to selected countries. Additional charges may apply.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and Apple Pay.",
    },
  ];

  // State to manage visibility of each answer
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

  const toggleAnswerVisibility = (index: number): void => {
    setVisibleIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="w-full flex flex-col lg:flex-row gap-5 h-auto lg:h-[60vh] px-4 sm:px-8 lg:px-10 py-8">
      {/* Carousel Section */}
      <div className="lg:flex-1 flex flex-col items-center justify-center p-4 lg:p-10">
        <Carousel slides={slides} />
      </div>

      {/* FAQ Section */}
      <div className="lg:flex-1 relative px-4 sm:px-8 lg:px-10 py-8 lg:py-16">
        {/* Background Image with White Shade */}
        <div
          style={{
            backgroundImage:
              'linear-gradient(to bottom, transparent, white), url("/home/home-washing-machine.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.2,
          }}
          className="absolute inset-0"
        ></div>

        {/* Content */}
        <div className="relative z-10">
          <p className={`${inter.className} text-2xl sm:text-3xl lg:text-4xl font-bold max-w-md`}>
            Frequently Asked <span className={`bg-[linear-gradient(to_right,_#5116E3,_#BA00FF)] bg-clip-text text-transparent`}>Questions</span>
          </p>

          {/* FAQ Questions and Answers */}
          <div className="mt-8 space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b pb-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleAnswerVisibility(index)}
                >
                  <h3 className={`${inter.className} text-sm sm:text-lg font-semibold`}>
                    {faq.question}
                  </h3>
                  <button
                    className="text-blue-600 text-xl sm:text-2xl font-bold"
                    aria-label="Toggle Answer"
                  >
                    {visibleIndexes.includes(index) ? "-" : "+"}
                  </button>
                </div>
                {visibleIndexes.includes(index) && (
                  <p className={`${inter.className} text-sm sm:text-base text-gray-700 mt-2`}>
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
