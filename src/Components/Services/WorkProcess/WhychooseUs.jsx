import React from "react";
import { FaBolt, FaEye, FaHeadset, FaChartLine, FaRocket, FaHeart } from "react-icons/fa";

export default function WhychooseUs(){
  const features = [
    {
      icon: <FaBolt className="text-3xl text-blue-600" />,
      title: "Fast Delivery — Speed That Matters",
      desc: "We move quick without cutting corners. Our agile workflow ensures your project goes live on time and optimized for success.",
      points: ["Streamlined process", "Rapid prototyping", "Pixel-perfect execution"],
    },
    {
      icon: <FaEye className="text-3xl text-green-600" />,
      title: "Transparent Process - No Hidden Surprises",
      desc: "You’ll know what’s happening, when, and why - every step of the way.",
      points: ["Regular progress updates", "Clear pricing & milestones", "Shared project dashboard"],
    },
    {
      icon: <FaHeadset className="text-3xl text-purple-600" />,
      title: "Dedicated Support — We’ve Got Your Back",
      desc: "Launch day isn’t the end — it’s the beginning. Our support team stays with you to ensure your site stays secure and up-to-date.",
      points: ["24/7 assistance", "Quick bug fixes", "Continuous updates"],
    },
    {
      icon: <FaChartLine className="text-3xl text-orange-600" />,
      title: "Results That Drive Growth",
      desc: "We build for performance and conversions - every line of code is designed to help your business grow.",
      points: ["SEO-friendly builds", "High conversion design", "Performance-first approach"],
    },
    {
      icon: <FaRocket className="text-3xl text-indigo-600" />,
      title: "Modern Tech, Future-Ready Websites",
      desc: "We use cutting-edge tech like React, Next.js, Node.js, and Tailwind to make your website scalable and lightning-fast.",
      points: ["Latest frameworks", "Clean architecture", "Future-proof solutions"],
    },
    {
      icon: <FaHeart className="text-3xl text-red-600" />,
      title: "Client-First Approach",
      desc: "Your vision is our blueprint. We collaborate closely with you to bring your brand to life and deliver measurable success.",
      points: ["Collaborative workflow", "Regular feedback", "Brand-focused outcomes"],
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Why Choose <span className="text-blue-600">Us</span>
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          We don’t just build websites — we build experiences that perform.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-3 p-2 text-justify">{item.desc}</p>
              <ul className="text-sm md:text-base text-gray-500 list-disc list-inside space-y-1 marker:text-blue-600 text-start pl-5">
                {item.points.map((p, i) => (
                  <li key={i} className="ml-0">{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


