"use client";

import "./styles/OurPortfolio.css";
import React, { useState } from "react";
let arr = [
  "container",
  "container",
  "container",
  "container",
  "container",
  "container",
  "container",
  "container",
  "container",
  "container",
  "container",
  "container",
];
export function OurPortfolio() {
  const [isHovered, setIsHovered] = useState(false);
  const [image, setImage] = useState("/homepage-portfolio/image8.jpg");

  return (
    <div>
      <div className="text-[40px] text-blue-900 font-semibold text-center mt-[20px] mb-5 pt-[40px] pb-[20px]">
        Our Portfoilo
      </div>
      
      <div
        className="mb-4 grid grid-cols-4 grid-rows-3 bg-cover bg-center h-full w-full"
        style={{ backgroundImage: `url(${image})` }}
      >
        {arr.map((element, index) => {
          return (
            <div
              key={index}
              className={`h-[200px] border border-gray-700 ${
                isHovered ? "hovered" : ""
              }`}
              onMouseEnter={() => {
                setIsHovered(true);
                setImage(`/homepage-portfolio/image${index}.jpg`);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
                setImage("/homepage-portfolio/image2.jpg");
              }}
            >
              {/* {element} {index + 1} */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurPortfolio;
