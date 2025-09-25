import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaPhoneVolume} from "react-icons/fa";

export default function Footer(){
    return(
        <div className="w-full bg-white h-auto flex flex-col items-start justify-center lg:px-[80px] px-[20px] lg:py-[50px] py-[30px] gap-[60px]">
            <div className="w-full h-auto flex lg:flex-row flex-col items-start justify-center gap-[60px]">
                <div className="lg:w-[40%] w-full flex flex-col justify-center items-start gap-[25px]">
                    <div className="text-black font-bold text-left lg:text-4xl text-3xl uppercase">
                        Rubix IT<span className="text-black">.</span>
                    </div>
                    <p className="text-gray-800 text-md">Feel free to call us in working hours Mon - Fri 9:00 am - 8:00 pm. Our team will be happy to help answer your queries.</p>
                    <div className="flex justify-center items-center gap-2 text-black">
                        {<FaPhoneVolume className="text-black size-5"/>} +91 1818181818
                    </div>
                    <div className="flex justify-center items-center gap-6">
                        <FaFacebookF  className="size-4 text-black hover:text-orange-400 cursor-pointer"/>
                        <FaTwitter className="size-4 text-black hover:text-orange-400 cursor-pointer"/>
                        <FaLinkedinIn className="size-4 text-black hover:text-orange-400 cursor-pointer"/>
                        <FaInstagram className="size-4 text-black hover:text-orange-400 cursor-pointer"/>
                    </div>


                </div>
                <div className="lg:w-[15%] w-full flex flex-col justify-center items-start gap-6">
                        <h1 className="text-black text-[23px] capitalize leading-[1.2em]">Company</h1>
                        <ul className="flex flex-col justify-center items-start gap-2">
                            <li className="text-gray-800 hover:text-orange-400 cursor-pointer text-md">Home</li>
                            <li className="text-gray-800 hover:text-orange-400 cursor-pointer text-md">About Us</li>
                            <li className="text-gray-800 hover:text-orange-400 cursor-pointer text-md">Blog</li>
                            <li className="text-gray-800 hover:text-orange-400 cursor-pointer text-md">Our Products</li>
                        </ul>

                </div>
                <div className="lg:w-[15%] w-full flex flex-col justify-center items-start gap-6">
                        <h1 className="text-black text-[23px] capitalize leading-[1.2em]">Services</h1>
                        <ul className="flex flex-col justify-center items-start gap-2">
                            <li className="text-gray-800 hover:text-orange-400 cursor-pointer text-md">Web Applications</li>
                            <li className="text-gray-800 hover:text-orange-400 cursor-pointer text-md">Moblie App Applictions</li>
                            <li className="text-gray-800 hover:text-orange-400 cursor-pointer text-md">AI Chat Bots</li>
                            <li className="text-gray-800 hover:text-orange-400 cursor-pointer text-md">AI Integration</li>
                        </ul>

                </div>
                <div className="lg:w-[30%] w-full flex flex-col justify-center items-start gap-5">
                        <h1 className="text-black text-[23px] capitalize leading-[1.2em]">Subscribe to Newsletter</h1>
                        <div className="flex-flex-col justify-center items-start w-full">
                            <input type="text" placeholder="Enter your email address" className="w-full text-black p-4 bg-transparent border-2 border-gray-800 rounded-md"></input>
                            <button className="w-full bg-gray-500 hover:bg-gray-800 hover:text-white py-4 px-6 text-black text-md font-semibold mt-5 rounded-md" >Subscribe</button>
                        </div>
                    </div>

            </div>

            <div className="w-full h-auto flex lg:flex-row flex-col items-center justify-between border-t-2 border-gray-700 pt-6 gap-[10px]">
                <p className="text-gray-800 text-md text-center">Copyright © 2025 RUBIX IT Solutions | All rights reserved</p>
                <ul className="text-gray-800 flex justify-center items-end gap-6">
                    <li>Terms of use</li>
                    <li>Privecy Policy</li>
                    <li>Cookie Policy</li>
                </ul>

            </div>
        </div>


                    
                    
                    

    )
}


























             