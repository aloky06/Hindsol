"use client "
import React from 'react';
import styles from "./styles/ServicesComponent.module.css";

let arr = [
  {
    heading: 'Metro Cabs',
    para: 'I need taxi App.',
    color: 'bg-green-500',
  },
  {
    heading: 'E-Commerce Application',
    para: 'I need E-Commerce App.',
    color: 'bg-red-500',
  },
  {
    heading: 'Food Application',
    para: 'I need Food App.',
    color: 'bg-blue-700',
  },
 
  {
    heading: 'E-Learning Application',
    para: 'I need E-Learning App.',
    color: 'bg-red-600',
  },
  {
    heading: 'Chat Application',
    para: 'I need Chat message App.',
    color: 'bg-orange-400',
  },
  {
    heading: 'Real-Estate Application',
    para: 'I need Real State App.',
    color: 'bg-green-400',
  },
  {
    heading: 'Banking Application',
    para: 'I need finance/banking App',
    color: 'bg-yellow-600',
  },
  {
    heading: 'Tours and Travels Application.',
    para: 'I need Tours and Travels App.',
    color: 'bg-orange-600',
  },
  {
    heading: 'Dating Application',
    para: 'I need dating App.',
    color: 'bg-yellow-600',
  },
  {
    heading: 'Crypto-Currency Application',
    para: 'I need Crypto-Currency App.',
    color: 'bg-violet-500',
  },
  {
    heading: 'Business Application',
    para: 'I need Business Website/App.',
    color: 'bg-red-600',
  },
  {
    heading: 'Bot',
    para: 'I need Bot.',
    color: 'bg-yellow-600',
  },
  {
    heading: 'Automobile Application',
    para: 'I need Automobile App.',
    color: 'bg-green-400',
  },
  {
    heading: 'Pharma Application',
    para: 'I need Pharma App.',
    color: 'bg-red-500',
  },
  {
    heading: 'Video Streaming Application ',
    para: 'I need Video Streaming App.',
    color: 'bg-blue-700',
  },
  {
    heading: 'Logistics Application',
    para: 'I need Logistics App.',
    color: 'bg-orange-600',
  },
  {
    heading: 'Job Portal Application',
    para: 'I need Job Portal App.',
    color: 'bg-orange-600',
  },
  {
    heading: 'Event Application',
    para: 'I need Event App.',
    color: 'bg-red-600',
  },
  {
    heading: 'Business Application',
    para: 'I need Business Website/App.',
    color: 'bg-red-600',
  },
  {
    heading: 'Shadi Application',
    para: 'I need Shadi Application.',
    color: 'bg-red-500',
  },
  {
    heading: 'Education Application',
    para: 'I need Education App.',
    color: 'bg-green-400',
  },
  {
    heading:"Medical Application",
    para:"I need Medical App.",
    color:"bg-red-500"
  },
  {
    heading: 'ERP Solution',
    para: 'I need ERP Solution.',
    color: 'bg-green-400',
  },
  {
    heading: 'Hindsol Application',
    para: 'I need HRM App.',
    color: 'bg-orange-600',
  }
];
function ServicesComponent() {
  return (
    <div className='gap-4 px-8 mb-4 grid grid-cols-24  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {arr.map((element, index) => {
        let image = `/images/${index}.png`;

        return (
          <div
            key={index}
            className={` ${styles.containerHover} h-[200px] relative bg-blue overflow-hidden ${element.color} mb-4 md:mb-0`}
          >
            <div className='z-10  md:w-[80%] ml-2 text-white absolute top-0'>
              <h1 className='text-[20px] md:text-[25px] font-bold'>{element.heading}</h1>
              <h4 className='text-sm md:text-base'>{element.para}</h4>
            </div>

            <img
              src={image}
              alt={element.heading}
              width={120}
              height={120}
              className={`${styles.imageHover} absolute bottom-0 right-0 mb-[10px] mr-[10px] md:mr-[20px] md:mb-[20px]`}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ServicesComponent;