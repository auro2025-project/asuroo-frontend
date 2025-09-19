import React from 'react';
import { Check } from 'lucide-react';
import Image from "next/image";

export default function WhyChooseUsSection() {
  return (
    <div className="bg-sectionbg flex items-center justify-center py-4 px-4">
      <div className="max-w-6xl w-full">
        
        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8">
          {/* 1. Title first on mobile */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl
            leading-snug md:leading-tight
            font-bold text-gray-900 text-center">
            Why choose us?
          </h2>
          
          {/* 2. Image second on mobile */}
          <div className="flex justify-center">
            <div className="relative w-80 h-80 rounded-lg">
              <img
                src="/assets/img/why-choose.svg"
                alt="why choose asuroo"
                className="w-full h-auto block"
              />
            </div>
          </div>
          
          {/* 3. Features third on mobile */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primarypink rounded-full flex items-center justify-center mt-1">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  More Choices, Better Plans
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  You received more options among the great insurance policy plans we have to offer
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primarypink rounded-full flex items-center justify-center mt-1">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  Trust & Transparency
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Zero conflict of interest within our community as we aim to seek the best value for you
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primarypink rounded-full flex items-center justify-center mt-1">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  Instant Protection & Savings
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Empower your lifestyle through savings from insurance policy and be protected instantly
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="flex justify-start">
            <div className="relative w-full h-full rounded-lg">
              <img
                src="/assets/img/why-choose.svg"
                alt="why choose asuroo"
                className="w-full h-auto block"
              />
            </div>
          </div>
          
          {/* Right: Title + Features */}
          <div className="space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl
              leading-snug md:leading-tight lg:leading-none
              font-bold text-gray-900">
              Why choose us?
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-primarypink rounded-full flex items-center justify-center mt-1">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    More Choices, Better Coverage 
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Search, Compare & Choose from our wide range of trusted insurance partners. 
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-primarypink rounded-full flex items-center justify-center mt-1">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    Trust & Transparency
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our quotations are NOT estimate but actual price as we seek the best value for you.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-primarypink rounded-full flex items-center justify-center mt-1">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    Instant Protection & Saving
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Be protected and empower your lifestyle through savings from your insurance policy. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}