import React from "react";
import backgroundImage from "../../assets/digitalbg.jpg"
import Heroimg from "../../assets/hero.png"
export default function Hero(){
    return(
        <div id="hero" className="w-full h-auto flex lg:flex-row flex-col justify-between items-centre lg:px-[80px] px-[20px] lg:pt-[150px] pt-[120px] lg:pb-[80px] pb-[60px] lg:gap-[60px] gap-[40px] bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="lg:w-1/2 w-full flex flex-col gap-[20px] items-start justify-center">
                <h1 className="text-red-700 uppercase text-md ">Seamless IT Services</h1>
                <h1 className="text-black lg:text-[70px] text-[40px] capitalize leading-[1.2em]">Transforming Ideas into Digital Success</h1>
                <p className="text-gray-700 text-md ">Rubix IT provides smart, efficient, and innovative digital solutions to help your business thrive in a digital world.</p>
                <button className="bg-gray-400 hover:bg-pink-400 py-4 px-6 text-md mt-5 rounded-md">Explore Solutions</button>
            </div>
            <div className="lg:w-1/2 w-full flex justigy-center items-center">
                <div className="lg:w-[80%] w-full flex justify-center items-center px-5 pt-5 bg-white/60 bg-opacticy-2 z-10 rounded-md">
                    <div className="opacity-100">
                        <img src={Heroimg} alt="heroImg"></img>
                    </div>
                </div>
            </div>

        </div>
    )
}