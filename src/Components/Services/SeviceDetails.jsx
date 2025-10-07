import React from "react";
import { useParams, Link } from "react-router-dom";
import services from "./ServiceData.js";
import { FaShoppingCart, FaShieldAlt, FaHospital, FaPlane, FaGraduationCap, FaTruck, FaStore, FaUniversity, FaCar, FaHome } from "react-icons/fa";
import DigitalMarketingServices from "./DigitalMarketing.jsx";
import { useEffect } from "react";
import WorkProcess from "./WorkProcess/WorkProcess.jsx";
import WhychooseUs from "./WorkProcess/WhychooseUs.jsx";



const ServiceDetail = () => {
  const handleClick = (e) => {
    e.preventDefault(); // prevent normal navigation
    window.history.back(); // go one step back
  };
 
  
  

    const industries = [
{ id: 1, icon: <FaShoppingCart size={40} className="text-blue-400" />, title: "ECommerce" },
{ id: 2, icon: <FaShieldAlt size={40} className="text-green-400" />, title: "Insurance" },
{ id: 3, icon: <FaHospital size={40} className="text-red-400" />, title: "Healthcare" },
{ id: 4, icon: <FaPlane size={40} className="text-sky-400" />, title: "Travel" },
{ id: 5, icon: <FaGraduationCap size={40} className="text-purple-400" />, title: "Education" },
{ id: 6, icon: <FaTruck size={40} className="text-indigo-400" />, title: "Logistics" },
{ id: 7, icon: <FaStore size={40} className="text-cyan-400" />, title: "Retail" },
{ id: 8, icon: <FaUniversity size={40} className="text-blue-500" />, title: "Banking" },
{ id: 9, icon: <FaCar size={40} className="text-yellow-400" />, title: "Automobile" },
{ id: 10, icon: <FaHome size={40} className="text-orange-400" />, title: "Real Estate" },
];
  const { id } = useParams(); 
  const service = services.find((s) => s.id === parseInt(id));

  if (!service) return <p className="text-center mt-10 text-red-500">Service not found</p>;

  return (
    
    <>
    <div className="px-4 sm:px-6 md:px-12 lg:px-20 py-12 max-w-8xl mx-auto bg-[#DCE0E1]">
      
      <Link
         
        to="#"
        onClick={handleClick}
        className="inline-block mb-8 text-orange-500 font-semibold hover:underline"
      >
        ← Back to Services
      </Link>

     

      
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        
        <div className="md:w-1/2 w-full">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-auto rounded-lg object-cover shadow-lg"
          />
        </div>

        
        <div className="md:w-1/2 w-full text-gray-800 text-base sm:text-lg lg:text-xl p-4 sm:p-6 md:p-8 lg:p-10 text-justify">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-center md:text-left">
        {service.title}
      </h2>
          <p className="mb-4">{service.fullPara}</p>
          
        </div>
      </div>
    
  
    </div>
    {service.id === 3 && <DigitalMarketingServices />}

        <section className="bg-gray-100 text-black py-16 px-6 md:px-12 lg:px-20">
          <div className="text-center mb-12">
            <p className="text-green-500 font-semibold text-sm md:text-base uppercase tracking-wide">Transforming Businesses Globally</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2">Industry We Serve</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 max-w-6xl mx-auto">
            {industries.map((industry) => (
              <div key={industry.id} className="flex flex-col justify-center items-center bg-[#111C44] rounded-xl p-6 shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2 cursor-pointer">
                <div className="mb-4">{industry.icon}</div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-center text-white">
                  {industry.title}
                </h3>
              </div>
            ))}
          </div>
</section>
<WhychooseUs />
<WorkProcess />
</>

  );
};

export default ServiceDetail;
