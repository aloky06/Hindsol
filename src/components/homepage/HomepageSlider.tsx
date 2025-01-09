import React from "react";


function HomepageSlider() {
  return (
    <div>
     

      {/* Carousel component */}

      <div
        id="default-carousel"
        className="relative w-full z-0"
        data-carousel="slide"
      >
        {/* <!-- Carousel wrapper --> */}
        <div className="relative h-56   overflow-hidden  rounded-lg md:h-[400px] ">
          {/* <!-- Item 1 --> */}
          <div  className="bg-blue-950   duration-700 h-full w-full ease-in-out" data-carousel-item>
            {/* desktop */}
             <div className="hidden  md:flex h-[300px] w-[80%] mx-auto mt-10  md:items-center md:justify-center ">
                  <h1 className="text-[30px] w-[50%]    text-center text-white ">
                  Transforming Ideas into Intelligent Solutions. Welcome to Hindsol!
                  </h1>
                  <img src="/slider-images/mobile.png" className=" w-[260px] " />
             </div>
             {/* mobile */}
             <div className="flex md:hidden">
             <h1 className="text-[18px] py-14 text-center text-white ">
                  Transforming Ideas into Intelligent Solutions. Welcome to Hindsol!
                  </h1>
                  <img src="/slider-images/mobile.png" className="w-[220px] h-[200px]" />
             </div>
            
          </div>
          {/* <!-- Item 2 --> */}
          <div  className="bg-blue-950   duration-700 h-full w-full ease-in-out" data-carousel-item>
            {/* desktop */}
             <div className="hidden  md:flex h-[300px] w-[80%] mx-auto mt-10  md:items-center md:justify-center ">
                  <h1 className="text-[30px] w-[50%]    text-center text-white ">
                  Want to make your online presence shine brighter than a shooting star? Let Hindsol illuminate your website with our expert development services!
                  </h1>
                  <img src="/slider-images/image2.png" className=" w-[400px] " />
             </div>
             {/* mobile */}
             <div className="flex md:hidden">
             <h1 className="text-[15px] py-11 text-center text-white ">
             Want to make your online presence shine brighter than a shooting star? Let Hindsol illuminate your website with our expert development services!
                  </h1>
                  <img src="/slider-images/image2.png" className="w-[200px] h-[200px]" />
             </div>
            
          </div>
         
        </div>
        {/* <!-- Slider indicators --> */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
         
        </div>
        {/* <!-- Slider controls --> */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
}

export default HomepageSlider;
