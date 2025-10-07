import React from "react";
import bgImg from "../../assets/hero_bg.jpg"
export default function Products(){
    const projects = [
  {
    img: "https://plus.unsplash.com/premium_photo-1661670279824-bff088ecd478?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: 'Telemedicine & Health Consultation App',
    para: 'Allows patients to schedule virtual appointments, chat with doctors, and manage electronic health records.',
    url: "https://www.google.com" 
  },
  {
    img: "https://media.istockphoto.com/id/1395697897/photo/shot-of-a-young-mother-helping-her-daughter-with-homework-at-home.jpg?s=2048x2048&w=is&k=20&c=smWmKzpUk87W-b7F8y_4m9CofVZFvwz6wouT_of8PxA=",
    title: 'Cloud Migration for TechCorp',
    para: 'Developed an interactive e-learning platform that provides students with access to online classes and assigns dedicated mentors for personalized guidance and progress tracking.',
    url: "https://www.youtube.com/" 
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1739227400196-09fbead2ea8b?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: 'E-Commerce Analytics Dashboard',
    para: 'A web-based analytics platform for e-commerce businesses to track sales performance, customer behavior, inventory levels, and marketing campaign effectiveness. It features interactive visualizations, predictive insights, and real-time reporting, enabling businesses to make data-driven decisions and optimize growth strategies. make this short',
    url: "https://www.google.com" 
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1726079248075-2b50954971fd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: 'AI-Powered Customer Support Chatbot',
    para: 'An AI-powered chatbot using NLP to provide instant, accurate responses across web, mobile, and social media, automating FAQs and escalating complex queries to human agents for faster customer support.',
    url: "https://www.google.com" 
  },
]
    return(
        <div id="products" className="w-full h-auto flex flex-col items-center justify-center lg:px-[80px] px-[20px] lg:py-[80px] py-[60px] gap-[20px] bg-cover bg-center" style={ {backgroundImage: `url(${bgImg})`}}>
            <h1 className="text-white uppercase text-sm ">Our Product's</h1>
            <h1 className="text-white lg:text-[45px] text-[30px] capitalize leading-[1.2em] lg:w-[50%] w-full text-center ">Explore our portfolio and showcase our best works</h1>
            <p className="text-gray-300 text-md lg:w-[60%] w-full text-center">Discover innovative products designed to simplify workflows, boost efficiency, and drive business growth.</p>

            <div className="grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10 mt-8">
                {projects.map((project, index) => (
                    <div key={index} className="w-full flex flex-col justify-center items-start">
                        <img src={project.img} alt="img" className="w-full bg-cover bg-center"></img>
                        <div className="w-full bg-gray-600 p-8 flex flex-col justify-center items-start gap-4">
                            <h1 className="text-white lg:text-[25px] text-[22px] capitalize leading-[1.2em] text-left">{project.title}</h1>
                            <h1 className="text-gray-300 text-sm text-left">{project.para}</h1>
                            <button onClick={() => window.open(project.url, "_blank")} className="text-black hover:text-purple-500 text-sm font-semibold mt-5">View Product</button>

                        </div>

                    </div>
                ))}

            </div>
        </div>
 
    )
}