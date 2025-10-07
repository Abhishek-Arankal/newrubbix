import React from "react";

const steps = [
  {
    id: 1,
    title: "Choose a service",
    description: "Great service providers listen first, then tell.",
  },
  {
    id: 2,
    title: "Request a meeting",
    description: "Feel free to prefer another time and location for you.",
  },
  {
    id: 3,
    title: "Get custom plans",
    description: "Purchasing a custom drawn home plan ensures you get.",
  },
  {
    id: 4,
    title: "Successfully done",
    description: "Successfully complete most projects with ease.",
  },
];

const WorkProcess = () => {
  return (
    <section className="bg-white text-black py-16 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
    
      <div className="text-center mb-12">
        <p className="text-green-400 uppercase tracking-widest text-sm">Our work process</p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">Our Work Process</h2>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step) => (
          <div
            key={step.id}
            className="flex flex-col items-center text-center bg-[#112a42] rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0b1c2c] border-2 border-green-400 text-white text-lg font-bold mb-4">
              {step.id}
            </div>
            
            <h3 className="text-lg font-semibold mb-2 text-white">{step.title}</h3>
            
            <p className="text-sm text-gray-300">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkProcess;
