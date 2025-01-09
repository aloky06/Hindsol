"use client";
import Navbar from "@/components/Navbar";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import SkillDevRegistrationForm from "@/components/register/SkillDevRegistrationForm";

function SkillDev() {
  return (
    <div>
      {/* Navbar component */}
      <Navbar />

      {/*The Content of the Career Page */}
      <div className={`container mx-auto `}>
      <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, delay: 2.4 }}
          className="  w-screen text-black bg-white h-[100%] ml-[calc(50%_-_50vw)] max-sm:pb-10"
        >
          <div className="relative h-44 w-[100%]   overflow-hidden  rounded-lg md:h-[540px] ">
            {/* <!-- Item 1 --> */}
            <div
              className="h-[100%] w-[100%]"
              data-carousel-item
            >
              <img
                src="/skilldev-images/header.jpg"
                className="absolute  block w-[98%] md:w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  object-cover"
                alt="..."
              />
            </div>
          </div>
        </motion.div>
        <div id="2708"></div>
        <SkillDevRegistrationForm />
      </div>

      <Footer />
    </div>
  );
}

export default SkillDev;
