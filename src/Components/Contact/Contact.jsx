import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function Contact(){
  return (
    <div className="px-6 md:px-12 lg:px-20 py-12 bg-gray-700">
      {/* Contact Header */}
      <div className="text-center text-white">
        <p className="text-2xl font-medium">Contact Us</p>
        <div className="w-16 h-[3px] bg-orange-600 rounded-full mx-auto my-2"></div>
        <p className="text-base font-normal opacity-70">
          We want to hear from you! Reach out with any questions or feedback.
        </p>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col md:flex-row w-[90%] mx-auto mt-10 gap-8">
        {/* Contact Details */}
        <div className="flex-1">
          {/* Email */}
          <div className="flex items-center gap-4 my-6">
            <div className="w-20 h-20 rounded-full bg-gray-100 grid place-items-center flex-shrink-0">
              <FaEnvelope className="text-brown-700 text-xl" />
            </div>
            <div>
              <p className="text-white text-xl font-semibold mb-1">Email</p>
              <p className="text-gray-300 opacity-70">rubixit@gmail.com</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center gap-4 my-6">
            <div className="w-20 h-20 rounded-full bg-white grid place-items-center flex-shrink-0">
              <FaMapMarkerAlt className="text-green-600 text-xl" />
            </div>
            <div>
              <p className="text-white text-xl font-semibold mb-1">Address</p>
              <p className="text-gray-300 opacity-70">Kukatpally, Pragathi Nagar Road
Telangana, 500018
India</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 my-6">
            <div className="w-20 h-20 rounded-full bg-white grid place-items-center flex-shrink-0">
              <FaPhoneAlt className="text-orange-600 text-xl" />
            </div>
            <div>
              <p className="text-white text-xl font-semibold mb-1">Phone</p>
              <p className="text-gray-300 opacity-70">+91 1818181818</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full h-14 px-5 rounded-xl border border-gray-500 bg-transparent text-white text-lg placeholder-gray-300 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Your Email"
              className="w-full h-14 px-5 rounded-xl border border-gray-500 bg-transparent text-white text-lg placeholder-gray-300 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Your Phone"
              className="w-full h-14 px-5 rounded-xl border border-gray-500 bg-transparent text-white text-lg placeholder-gray-300 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full h-14 px-5 rounded-xl border border-gray-500 bg-transparent text-white text-lg placeholder-gray-300 focus:outline-none"
            />
          </div>

          <textarea
            placeholder="Write your message here"
            className="w-full h-52 mt-4 px-5 py-3 rounded-xl border border-gray-500 bg-transparent text-white text-lg placeholder-gray-300 resize-none focus:outline-none"
          ></textarea>

          <div className="mt-6">
            <button className="bg-orange-500 border-2 border-orange-600 text-white px-6 py-3 rounded-full font-medium hover:bg-transparent transition">
              Submit Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


