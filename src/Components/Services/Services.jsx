import React from "react";
import { MdCloudDone } from "react-icons/md";
import { SiCyberdefenders } from "react-icons/si";
import { FaUserEdit } from "react-icons/fa";
import { Brain } from 'lucide-react';
import services from "./ServiceData.js"
import { Link } from "react-router-dom";

export default function Services(){
//     const services = [
//   {
//     icon: MdCloudDone,
//     title:'Web application development',
//     para:'Web Application Development service is the main feature of Rubix IT Solution. Our designers and professional software engineers.',
//   },
//   {
//     icon: SiCyberdefenders,
//     title:'Mobile app development',
//     para:'We create custom, scalable, and user-friendly mobile apps that help businesses engage customers and drive growth on iOS and Android platforms.',
//   },
//   {
//     icon: FaUserEdit,
//     title:'Digital Marketing',
//     para:'We provide result-driven digital marketing solutions to boost your online presence, increase engagement, and drive business growth through SEO, social media, and targeted campaigns.',
//   },
//   {
//     icon: Brain,
//     title: 'Artificial Inteligence',
//     para: 'We deliver AI-powered solutions that help businesses automate processes, gain insights from data, and make smarter decisions to drive growth and innovation.'
//   }
// ]
    return(
        <div id="services" className="w-full h-auto flex flex-col items-center justify-center lg:px-[80px] px-[20px] lg:py-[80px] py-[60px] gap-[20px] bg-[#DCE0E1]">
            <h1 className="text-orange-500 uppercase text-md ">Our Services</h1>
            <h1 className="text-black lg:text-[45px] text-[30px] capitalize leading-[1.2em] lg:w-[50%] w-full text-center ">Services We Provide to Elevate Your Business</h1>
            <p className="text-gray-700 text-md lg:w-[60%] w-full text-center">At Rubix IT, we offer IT, HR, and business solutions that help organizations streamline operations, boost productivity, and achieve their goals efficiently and ethically.</p>
            <div className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-6 mt-6">
                {services.map((service, index) => (
                    <div key={index} className="flex flex-col justify-center items-start gap-4 p-10 border-2 border-gray-200 bg-white hover:bg-gray-300 rounded-md cursor-pointer">
                        <service.icon className="size-[35px] mb-5"/>
                        <h1 className="text-black text-[25px] capitalize leading-[1.2em]">{service.title}</h1>
                        <p className="text-gray-500 text-sm">{service.para}</p>
                        <Link to={`/service/${service.id}`} className="text-black hover:text-purple-500 text-sm font-semibold uppercase mt-10">Learn More</Link>
                        {/* <button className="text-pink hover:text-purple-500 text-sm font-semibold uppercase mt-10">Learn More</button> */}
                    </div>
                ))}

            </div>
        </div>
    )
}