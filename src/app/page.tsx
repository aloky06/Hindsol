"use client"
import { useEffect } from "react";
import "./globals.css";
import HomepageSlider from "@/components/homepage/HomepageSlider";
import ServicesComponent from "@/components/homepage/ServicesComponent";
import OurServices from "@/components/homepage/OurServices";
import OurPortfolio from "@/components/homepage/OurPortfolio";
import DiscussProject from "@/components/homepage/DiscussProject";
import Footer from "@/components/Footer";
import FAQs from "@/components/FAQs";
import ReviewComponent from "@/components/homepage/ReviewComponent";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "@/components/Navbar";



export default function Home() {

  useEffect(()=>{
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      
    
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 100, // values from 0 to 3000, with step 50ms
      duration: 800, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    
    });
  });


  return (
    <div>
    
        <Navbar />
     
      {/* Header */}
      <div data-aos="zoom-out">
      <HomepageSlider />
      </div>
      {/* Section para */}
      <h1 className="text-[40px] text-blue-900 font-semibold text-center mt-[80px] mb-5">
        Our Offerings for your Distinct Requirements!
      </h1>

     <div data-aos="zoom-out">
      <ServicesComponent />
      </div>
      <hr className="border border-gray-900 mx-10 mt-10"/>
      <div data-aos="zoom-out">
      <OurServices />
      </div>
      <hr className="border border-gray-900 mx-10"/>
      <div data-aos="zoom-out">
      <OurPortfolio />
      </div>
      <hr className="border border-gray-900 mx-10 mt-10 mb-14"/>
      <div data-aos="zoom-out">
     <ReviewComponent />
     </div>
      <hr className="border border-gray-900 mx-10"/>
      <div data-aos="zoom-out">
      <FAQs/>
      </div>
      <hr className="border border-gray-900 mx-10"/>
      <div data-aos="zoom-out">
      <DiscussProject />
      </div>
     {/* Footer */}
     <div data-aos="zoom-out" className="mt-10 ">
     <Footer/>
     </div>
    </div>
  );
}
