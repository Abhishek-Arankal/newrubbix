import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaPhoneVolume} from "react-icons/fa";
import { Link } from "react-router-dom";

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
                        {<FaPhoneVolume className="text-black size-5 hover:text-orange-400"/>} +91 1818181818
                    </div>
                    <div className="flex justify-center items-center gap-6">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF className="size-4 text-black hover:text-orange-400 cursor-pointer" />
                        </a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="size-4 text-black hover:text-orange-400 cursor-pointer" />
                        </a>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn className="size-4 text-black hover:text-orange-400 cursor-pointer" />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="size-4 text-black hover:text-orange-400 cursor-pointer" />
                        </a>
                    </div>

                    {/* <div className="flex justify-center items-center gap-6">
                        <FaFacebookF  className="size-4 text-black hover:text-orange-400 cursor-pointer"/>
                        <FaTwitter className="size-4 text-black hover:text-orange-400 cursor-pointer"/>
                        <FaLinkedinIn className="size-4 text-black hover:text-orange-400 cursor-pointer"/>
                        <FaInstagram className="size-4 text-black hover:text-orange-400 cursor-pointer"/>
                    </div> */}


                </div>
                <div className="lg:w-[15%] w-full flex flex-col justify-center items-start gap-6">
                        <h1 className="text-black text-[23px] capitalize leading-[1.2em]">Company</h1>
                        <ul className="flex flex-col justify-center items-start gap-2">
                            {/* <li>
                                <Link to="/" className="text-gray-800 hover:text-orange-400 cursor-pointer text-md">Home</Link>
                            </li> */}
                            <li>
                                <Link to="/about-us" className="text-gray-800 hover:text-orange-400 cursor-pointer text-md">About Us</Link>
                            </li>
                            <li>
                                <Link to="/contact-us" className="text-gray-800 hover:text-orange-400 cursor-pointer text-md">Contact</Link>
                            </li>
                            <li>
                                <Link to="/our-products" className="text-gray-800 hover:text-orange-400 cursor-pointer text-md">Our Products</Link>
                            </li>
                        </ul>
                        {/* <ul className="flex flex-col justify-center items-start gap-2">
                            <li className="text-gray-800 hover:text-orange-400 cursor-pointer text-md">Home</li>
                            <li className="text-gray-800 hover:text-orange-400 cursor-pointer text-md">About Us</li>
                            <li className="text-gray-800 hover:text-orange-400 cursor-pointer text-md">Blog</li>
                            <li className="text-gray-800 hover:text-orange-400 cursor-pointer text-md">Our Products</li>
                        </ul> */}

                </div>
                <div className="lg:w-[15%] w-full flex flex-col justify-center items-start gap-6">
                        <h1 className="text-black text-[23px] capitalize leading-[1.2em]">Services</h1>
                        <ul className="flex flex-col justify-center items-start gap-2">
                            <li>
                                <Link to="/service/1" className="text-gray-800 hover:text-orange-400 cursor-pointer text-md">Web Applications</Link>
                            </li>
                            <li>
                                <Link to="/service/2" className="text-gray-800 hover:text-orange-400 cursor-pointer text-md">Mobile App Applications</Link>
                            </li>
                            <li>
                                <Link to="/service/3" className="text-gray-800 hover:text-orange-400 cursor-pointer text-md">AI Chat Bots</Link>
                            </li>
                            <li>
                                <Link to="/service/4" className="text-gray-800 hover:text-orange-400 cursor-pointer text-md">AI Integration</Link>
                            </li>
                        </ul>
                        

                </div>
                <div className="lg:w-[30%] w-full flex flex-col justify-center items-start gap-5">
                        <h1 className="text-black text-[23px] capitalize leading-[1.2em]">Subscribe to Newsletter</h1>
                        <div className="flex-flex-col justify-center items-start w-full">
                            <input type="text" placeholder="Enter your email address" className="w-full text-black p-4 bg-transparent border-2 border-gray-800 rounded-md"></input>
                            <button className="w-full bg-gray-500 hover:bg-gray-800 hover:text-white py-4 px-6 text-black text-md font-semibold mt-5 rounded-md cursor-pointer" >Subscribe</button>
                        </div>
                    </div>

            </div>

            <div className="w-full h-auto flex lg:flex-row flex-col items-center justify-between border-t-2 border-gray-700 pt-6 gap-[10px]">
                <p className="text-gray-800 text-md text-center">Copyright © 2025 RUBIX IT Solutions | All rights reserved</p>
                <ul className="text-gray-800 flex justify-center items-end gap-6">
                    <li>
                        <Link to="/terms-conditions" className="hover:text-blue-500">Terms of Use</Link>
                    </li>
                    <li>
                        <Link to="/privacy-policy" className="hover:text-blue-500">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link to="/cookie-policy" className="hover:text-blue-500">Cookie Policy</Link>
                    </li>
                </ul>
            </div>
        </div>


                    
                    
                    

    )
}


























             