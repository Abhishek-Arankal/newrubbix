import React from "react";
import logo from "../../assets/logo-rubix.png"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { Menu, X, Globe, Mail, Search } from "lucide-react";
import { useState } from "react";


export default function Header(){
    const [isOpen, setIsOpen] = useState(false);
    
    const navigate = useNavigate();

    const handleLogoClick = () => {
    navigate("/");          // navigate to home if not already
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top
  };
    
    return(
        <header className="bg-white py-4 lg:px-[80px] px-7 fixed top-0 left-0 w-full z-50">
            <div className="flex justify-between items-center">
                <div className="text-black font-bold text-left lg:text=4xl text-3xl uppercase">
                    <img src={logo} alt="logo" className="mr-3 h-[50px] cursor-pointer" onClick={handleLogoClick}></img>
                </div>


                {/* <button className="text-black text-2xl md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}

                </button> */}

                <nav className="hidden md:block">
                    <ul className="flex space-x-10 text-lg text-black">
                        <NavLink to="/" className={({isActive}) => `hover:font-bold ${isActive ? "text-orange-700" : "text-gray-700"}`}>Home</NavLink>
                        <NavLink to="/about-us" className={({isActive}) => `hover:font-bold ${isActive ? "text-orange-700" : "text-gray-700"}`}>About Us</NavLink>
                        <NavLink to="/service" className={({isActive}) => `hover:font-bold ${isActive ? "text-orange-700" : "text-gray-700"}`}>Services</NavLink>
                        <NavLink to="/contact-us" className={({isActive}) => `hover:font-bold ${isActive ? "text-orange-700" : "text-gray-700"}`}>Contact Us</NavLink>
                        <NavLink to="/our-products" className={({isActive}) => `hover:font-bold ${isActive ? "text-orange-700" : "text-gray-700"}`}>Our Product</NavLink>
                    </ul>
                </nav>
                {/* copy pasted */}
                <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white  shadow-lg px-6 py-4 space-y-4 w-full top-0 left-0">
          <NavLink to="/" className="block text-gray-700" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about-us" className="block text-gray-700" onClick={() => setIsOpen(false)}>About Us</NavLink>
          <NavLink to="/Service" className="block text-gray-700" onClick={() => setIsOpen(false)}>Services</NavLink>
          <NavLink to="/contact-us" className="block text-gray-700" onClick={() => setIsOpen(false)}>Contact Us</NavLink>
          <NavLink to="/our-products" className="block text-gray-700" onClick={() => setIsOpen(false)}>Our Products</NavLink>
        </div>
      )}
                





            {/* </div> */}  
            {/* commendted */}

            
            {/* <div className={`fixed top-0 left-0 h-full w-full bg-white text-white transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-40 flex items-center justify-center overflow-y-hidden`}>
                <X className="fixed top-3 right-6 text-3xl cursor-pointer text-black" onClick={() => setIsOpen(false)}/>
                 <ul className="flex flex-col space-y-6 text-2xl text-center ">
                
                </ul>   


            </div> */}
        </header>


    )
}