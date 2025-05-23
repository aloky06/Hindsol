"use client"
import React from "react";
import Slider from"react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TeamMember.css";

const teamMember = [
  {
    image: "/team/founder.jpeg",
    name: "Alok Yadav",
    Designation: "Founder & CEO",
    description: "https://www.linkedin.com/in/ceoalokkumaryadav",
  },
  {
    image: "/team/director.jpg",
    name: "Ajay Patel",
    Designation: "Director",
    description: "https://www.linkedin.com/in/ajay-kumar-5586442b7",
  },
  {
    image: "/team/hr.jpeg",
    name: "Archana Yadav",
    Designation: "HR",
    description: "https://www.linkedin.com/in/hrheadarchana/",
  },
  // {
  //   image: "/team/full-stack.jpeg",
  //   name: "Anshuman Mishra",
  //   Designation: "Full-Stack Developer",
  //   description: "https://www.linkedin.com/in/anshuman-mishra-996195146/",
  // },
  // {
  //   image: "/team/cfo.jpeg",
  //   name: "Saiprasad kv",
  //   Designation: " CFO",
  //   description: "https://www.linkedin.com/in/hindsolanjupatel",

  // },

  {
    image: "/team/Ankur.jpg",
    name: "Ankur Kumar",
    Designation: "Operation Executive",
    description: "https://www.linkedin.com/in//",
  },
];

const TeamMember = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <h1 className="text-center text-blue-800 font-semibold md:text-[40px] text-[28px]">Our Team</h1>
      <hr className="border-t-2 w-[85%] md:mx-24 mx-auto mt-4 border-gray-300 mb-4"/>
    <div className="w-4/5 m-auto">
      <div className="mt-5 mb-20  ">
        <Slider {...settings} >
        {teamMember.map((element, index) => {
          return (
          <div key={index} className="first gap-4 bg-orange-200 h-[450px]  text-black rounded-xl">
            <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
              <img src={element.image} className="w-44 h-44 rounded-full" />
            </div>
            <div className="flex flex-col justify-between items-center gap-4 p-4">
              <p className="font-semibold text-xl text-gray-800">{element.name}</p>
              <p className="font-semibold text-md text-gray-600">{element.Designation}</p>
            <div className="flex gap-4">
            <a href="#" target="_blank" >
            <img src="/assets/facebook.png" className="w-10 h-10" />
          </a>
          <a href="#" target="_blank" >
          <img src="/assets/instagram.png" className="w-10 h-10" />
          </a>
          <a href={element.description} target="_blank" >
          <img src="/assets/linkdin.png" className="w-10 h-10" />
          </a>
            </div>
              
            </div>
          </div>)
        })}
        </Slider>

      </div>
    </div>
    </div>
  );
};

export default TeamMember;
