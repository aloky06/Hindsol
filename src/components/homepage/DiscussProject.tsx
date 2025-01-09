"use client";
import React from "react";
import styles from "./styles/DiscussProject.module.css";
import Typewriter from "typewriter-effect";

function DiscussProject() {
  const courses = [
    "Educational Software",
    "Banking Software",
    "E-learning Software",
    "E-Commerce Software",
    "Medical Software"
  ];

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32">
      <h1 className="text-4xl md:text-5xl lg:text-6xl pt-20 pb-8 md:pb-12">
        Ready to discuss your
        <br />
        <span className="font-bold">project</span> concept?
      </h1>

      <div className="w-full overflow-hidden relative border border-black">
        <video
          autoPlay
          muted
          loop
          className={styles.myVideo + " w-full h-auto"}
        >
          <source src="/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute z-40 md:bottom-28  md:right-60 bottom-[10%] right-[20%] text-white text-[25px] md:text-[80px]">
          <Typewriter
            options={{
              strings:courses,
              autoStart: true,
              loop: true,
            }}
            
          />
        </div>
        {/* other content goes here */}
      </div>
    </div>
  );
}

export default DiscussProject;
