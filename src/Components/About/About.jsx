import React from "react";
import Aboutimg from "../../assets/about.jpg"
export default function About(){
    return(
        <div id="about" className="w-full h-auto flex flex-col items-center justify-between lg:px-[80px] lg:py-[80px] py-[60px] px-[20px] gap-[60px]"> 
            <div id="top-box" className="w-full flex lg:flex-row flex-col items-center justify-between gap-[60px]">
                <div className="lg:w-[60%] w-full flex  flex-col justify-center items-start gap-[10px]">
                    <h1 className="text-black uppercase text-sm ">Who We Are</h1>
                    <h1 className="text-black lg:text-[45px] text-[30px] capitalize leading-[1.2em]">Delivering Excellence in IT Solutions</h1>
                    <p className="text-gray-500 text-md">We provide innovative, reliable, and scalable IT & HR services to help businesses grow, streamline operations, and achieve their goals.</p>
                </div>
                <div className="lg:w-[40%] w-full flex lg:justify-end justify-start items-center">
                    <button className="bg-gray-400 hover:bg-black hover:text-white py-4 px-6 text-black text-md font-semibold mt-5 rounded-md">LEARN MORE</button>
                </div>
            </div>
            <div id="bottom-box" className="w-full flex lg:flex-row flex-col justify-between items-center gap-[80px]">
                <div id="img" className="lg:w-[40%] w-full">
                    <img src={Aboutimg} alt="about-us" className="w-full bg-cover bg-center"></img>
                </div>
                <div id="content" className="lg:w-[60%] w-full flex flex-col items-starrt justify-between gap-[60px]">
                    <div className="flex flex-col items-start justify-center gap-3">
                        <h1 className="text-black text-[35px] capitalize leading-[1.2em]">Expertise</h1>
                        <p className="text-gray-500 text-md">Rubix IT Solution is a team of IT & HR professionals delivering excellence in Staffing, IT services, and business solutions worldwide. Partnering with leading technology providers, we offer innovative, cost-effective, and ethical solutions that help enterprises achieve their business goals while upholding professionalism and human values  for this</p>

                    </div>
                    <div className="flex flex-col items-start justify-center gap-3">
                        <h1 className="text-black text-[35px] capitalize leading-[1.2em]">Our Mission</h1>
                        <p className="text-gray-500 text-md">Our team of IT & HR professionals, with diverse industry experience in HR, Training & Development, Sales & Marketing, and Technical (IT & Non-IT), strives to deeply understand client requirements and deliver the most suitable solutions within agreed timelines to achieve their business objectives.</p>

                    </div>
                    <div className="flex flex-col items-start justify-center gap-3">
                        <h1 className="text-black text-[35px] capitalize leading-[1.2em]">Our Vision</h1>
                        <p className="text-gray-500 text-md">Rubix aims to establish a global presence by forming strategic partnerships with leading IT and Non-IT companies, making people’s lives better and easier through the combined power of Technology and People.</p>

                    </div>
                </div>
            </div>
        </div>
    )
}