import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function MeetFounderCard() {
  return (
    <div className="bg-white relative overflow-hidden pt-28 pb-10 flex items-center justify-center">
      {/* Blue U Curve at top */}
      <div className="absolute top-0 left-0 w-full z-0">
      <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1440 500"
  preserveAspectRatio="none"
  className="w-full h-52 md:h-64 lg:h-72"
>
  <path
    fill="#fffbfd"
    d="M0,320 Q720,750 1440,320 L1440,0 L0,0 Z"
  />
</svg>



      </div>

      {/* Card overlap sikit */}
      <div className="relative max-w-6xl w-full z-10 -mt-16 mx-6">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden border-darkpink border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-primarypink">
                Mission – Insurance Made Rewarding
              </h2>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight mt-2">
                Founded in 2021, ASUROO was built with a clear mission 
              </h3>
              <p className="text-gray-600 text-base leading-relaxed mt-1 mb-4">
               Your happiness is key to our success and sustainability. That’s why we’ve designed a business model that share our commission with you — turning it into savings for you! 
              </p>
              <div className="pt-2">
                <button className="bg-primaryblack hover:bg-primarypink text-white font-medium px-6 py-3 rounded-full flex items-center gap-3 transition-colors duration-200">
                  <span>Join Now</span>
                  <div className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="w-80 h-80 relative">
                <img
                  src="/assets/img/founder-asuroo.jpg?auto=format&fit=crop&w=800&q=80"
                  alt="Professional businessman with tablet"
                  className="w-full h-full object-cover object-center rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
