"use client";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import Pulsating from "@/components/Pulsating";
import { RiComputerLine } from "react-icons/ri";
import { FaCode } from "react-icons/fa";
import { BsFileBarGraphFill } from "react-icons/bs";
import CareerPageSlider from "@/components/career/CareerPageSlider";
import { motion } from "framer-motion";
import CareerRegistrationForm from "@/components/career/CareerRegistrationForm";

function Career() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to demonstrate the loading animation
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the duration as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Pulsating div for loading animation */}
      {loading && <Pulsating />}
      {/* pulsating end */}

      {/*The Content of the Career Page */}

      <div className={`container mx-auto ${loading ? "hidden" : ""}`}>
        <header className="flex flex-col items-center relative md:mb-[300px] mb-[550px]">
          {/* Image container */}
          <motion.div
            className="h-[500px] w-full rounded-t-xl"
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 70, delay: 2 }}
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1682685797507-d44d838b0ac7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          ></motion.div>
          {/* content container */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, delay: 2.4 }}
            className="h-[400px] w-[80%]  rounded-xl absolute top-[350px] bg-white"
          >
            <h1 className="text-[22px] md:text-[25px] lg:text-[30px] text-center mt-14 font-medium ">
              View Open positions in these departments
            </h1>

            {/* all options main div */}
            <div className="grid  grid-cols-2 sm:grid-cols-3 xl:grid-cols-4  w-[90%]  px-[8%] justify-between gap-12 mt-[60px] mx-auto flex-wrap ">
              {/* option div 1*/}
              <div className="flex flex-col items-center w-[130px]">
                {/* image div  */}
                <div className="flex justify-center rounded-lg items-center w-[70px] h-[70px] border border-violet-800">
                  <RiComputerLine className="text-[30px] text-violet-800" />
                </div>
                <h3 className="text-center text-[12px] font-bold">Front End</h3>
              </div>
              {/* option div 2*/}
              <div className="flex flex-col items-center w-[130px]">
                {/* image div */}
                <div className="flex justify-center rounded-lg items-center w-[70px] h-[70px] border border-blue-600">
                  <FaCode className="text-[30px] text-blue-600" />
                </div>
                <h3 className="text-center text-[12px] font-bold">Back End</h3>
              </div>
              {/* option div 3*/}
              <div className="flex flex-col items-center w-[130px]">
                {/* image div */}
                <div className="flex justify-center rounded-lg items-center w-[70px] h-[70px] border border-green-800">
                  <RiComputerLine className="text-[30px] text-green-800" />
                </div>
                <h3 className="text-center text-[12px] font-bold">DBA</h3>
              </div>
              {/* option div 4*/}
              <div className="flex flex-col items-center w-[130px]">
                {/* image div 4*/}
                <div className="flex justify-center rounded-lg items-center w-[70px] h-[70px] border border-yellow-600">
                  <RiComputerLine className="text-[30px] text-orange-700" />
                </div>
                <h3 className="text-center text-[12px] font-bold">Graphic Designer</h3>
              </div>
              {/* option div 5*/}
              <div className="flex flex-col items-center w-[130px] ">
                {/* image div */}
                <div className="flex justify-center rounded-lg items-center w-[70px] h-[70px] border border-pink-500">
                  <RiComputerLine className="text-[30px] text-pink-700" />
                </div>
                <h3 className="text-center text-[12px] font-bold">HR</h3>
              </div>
              {/* option div 6*/}
              <div className="flex flex-col items-center w-[130px]">
                {/* image div */}
                <div className="flex justify-center rounded-lg items-center w-[70px] h-[70px] border border-violet-500">
                  <RiComputerLine className="text-[30px] text-violet-800" />
                </div>
                <h3 className="text-center text-[12px] font-bold">UI/UX</h3>
              </div>
              {/* option div 7*/}
              <div className="flex flex-col items-center w-[130px]">
                {/* image div */}
                <div className="flex justify-center rounded-lg items-center w-[70px] h-[70px] border border-blue-500">
                  <RiComputerLine className="text-[30px] text-blue-600" />
                </div>
                <h3 className="text-center text-[12px] font-bold">
                 SCRUM Master
                </h3>
              </div>
              {/* option div 8*/}
              <div className="flex flex-col items-center  w-[130px] ">
                {/* image div */}
                <div className="flex justify-center rounded-lg border border-green-500 items-center w-[70px] h-[70px] ">
                  <RiComputerLine className="text-[30px] text-green-500" />
                </div>
                <h3 className="text-center text-[12px] font-bold">
                  Customer Success
                </h3>
              </div>
            </div>
          </motion.div>
        </header>
        <section>
         <CareerPageSlider />
         <hr className="border-gray-900 border-[2px] mx-10"/>
       <CareerRegistrationForm/>
        </section>
      </div>
    </div>
  );
}

export default Career;
