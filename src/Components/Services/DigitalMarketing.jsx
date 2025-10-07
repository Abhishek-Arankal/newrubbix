import React from "react";
import { FaSearch, FaDollarSign, FaComments } from "react-icons/fa";

const DigitalMarketingServices = () => {
  return (
    <section className="bg-white min-h-screen 
                    pt-4 sm:pt-6 md:pt-8 lg:pt-10   /* ↓ smaller top padding */
                    pb-12 sm:pb-16 lg:pb-20
                    px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24
                    flex flex-col items-center justify-center">


      
      
      <h2
        className="font-bold text-center text-gray-900 mb-10 max-w-4xl"
        style={{ fontSize: "clamp(1.75rem, 4vw, 3.5rem)", lineHeight: "1.2" }}
      >
        We're Leader In Tech-enabled Digital Marketing Solutions
      </h2>

     
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl">
        
        
        <div className="bg-blue-100 rounded-xl shadow-md p-6 sm:p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
          <FaSearch className="text-4xl sm:text-5xl text-blue-600 mb-4" />
          <h3 className="text-lg sm:text-xl font-semibold mb-2">
            Search Engine Optimization
          </h3>
          <p className="text-gray-700 text-sm sm:text-base">
            Improve your visibility and rankings with data-driven SEO strategies tailored to your audience.
          </p>
        </div>

        
        <div className="bg-blue-100 rounded-xl shadow-md p-6 sm:p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
          <FaDollarSign className="text-4xl sm:text-5xl text-blue-600 mb-4" />
          <h3 className="text-lg sm:text-xl font-semibold mb-2">
            Paid Media Management
          </h3>
          <p className="text-gray-700 text-sm sm:text-base">
            Maximize ROI with targeted ad campaigns across Google, Meta, and other high-converting platforms.
          </p>
        </div>

        
        <div className="bg-blue-100 rounded-xl shadow-md p-6 sm:p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
          <FaComments className="text-4xl sm:text-5xl text-blue-600 mb-4" />
          <h3 className="text-lg sm:text-xl font-semibold mb-2">
            Social Media Management
          </h3>
          <p className="text-gray-700 text-sm sm:text-base">
            Build engagement and brand loyalty through consistent, creative, and community-driven content.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingServices;
