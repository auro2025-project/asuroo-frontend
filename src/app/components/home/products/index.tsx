"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function FeatureCards() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: "/assets/img/icon/car-insurance.png",
      title: "Private Car Insurance",
      description: "",
      delay: "200ms",
      cardClass: ""
    },
    {
      icon: "/assets/img/icon/commercial-insurance.png",
      title: "Commercial Car Insurance",
      description: "",
      delay: "200ms",
      cardClass: ""
    },
    {
      icon: "/assets/img/icon/phv-insurance.png",
      title: "PHV Insurance",
      description: "",
      delay: "200ms",
      cardClass: ""
    },
    {
      icon: "/assets/img/icon/travel-insurance.png",
      title: "Travel Insurance",
      description: "",
      delay: "200ms",
      cardClass: ""
    },
  ];

  return (
    <section className="relative bg-white p-4">
      {/* Cards */}
      <div className="container mx-auto flex justify-center relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl w-full">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-card px-2 py-[25px] flex flex-col items-center text-center h-full"
            >
              <div className="w-full max-w-[200px] flex flex-col items-center">
                {/* Icon */}
                <div className="w-[70px] h-[70px] lg:w-[90px] lg:h-[90px] xl:w-[100px] xl:h-[100px] mb-4 flex items-center justify-center">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={100}
                    height={100}
                    className="object-contain"
                    priority={index < 4} // Prioritize first 4 images
                  />
                </div>

                {/* Title */}
                <h3 className="text-[16px] lg:text-[20px] font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Curve SVG at bottom */}
      <div className="absolute bottom-0 left-0 w-full z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="w-full h-52 md:h-64 lg:h-72"
        >
          <path
            fill="#fffbfd"
            d="M0,320 Q720,0 1440,320 Z"
          />
        </svg>
      </div>
    </section>
  );
}