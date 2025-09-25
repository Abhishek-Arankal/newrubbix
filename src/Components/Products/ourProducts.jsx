import React from "react";
import bgImg from "../../assets/hero_bg.jpg"
export default function Products(){
    const projects = [
  {
    img: "https://images.pexels.com/photos/8939806/pexels-photo-8939806.jpeg",
    title: 'Cloud Migration for TechCorp',
    para: 'Developed an AI recommendation engine that delivers personalized shopping experiences.',
  },
  {
    img: "https://media.istockphoto.com/id/1395697897/photo/shot-of-a-young-mother-helping-her-daughter-with-homework-at-home.jpg?s=2048x2048&w=is&k=20&c=smWmKzpUk87W-b7F8y_4m9CofVZFvwz6wouT_of8PxA=",
    title: 'Cloud Migration for TechCorp',
    para: 'Developed an interactive e-learning platform that provides students with access to online classes and assigns dedicated mentors for personalized guidance and progress tracking.',
  },
  {
    img: "https://images.pexels.com/photos/15770387/pexels-photo-15770387.jpeg",
    title: 'Cloud Migration for TechCorp',
    para: 'Built an IoT-enabled platform for real-time patient monitoring and predictive healthcare insights.',
  },
  {
    img: "https://images.pexels.com/photos/8939806/pexels-photo-8939806.jpeg",
    title: 'Cloud Migration for TechCorp',
    para: 'Augue purus malesuada pulvinar faucibus vel id hac. Sed duis sit vitae platea nulla nunc egestas pellentesque et.',
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
                            <button className="text-black hover:text-purple-500 text-sm font-semibold mt-5">View Product</button>

                        </div>

                    </div>
                ))}

            </div>
        </div>
 
    )
}