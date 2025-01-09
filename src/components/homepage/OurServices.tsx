"use client"
import React from "react";

export function OurServices() {
  return (
    <div className="p-4 md:p-8 bg-white">
      <div className="text-[40px] md:text-4xl text-center font-semibold text-blue-900 my-8">
        Our Services
      </div>
      <div className="text-lg text-center pb-4">
        In DesignRush, we have been featured as one of the top 5 Salesforce
        companies for providing outstanding services
      </div>

      {/* Our services para Container */}
      <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
        {/* First Sub Container */}
        <div className="w-full md:w-[400px] grid grid-rows-3">
          <div>
            <h1 className="font-bold text-blue-500 text-xl md:text-2xl">
              Web Application Development
            </h1>
            <p>
              Welcome your customers with an interactive & highly-professional
              web experience that stays with them forever.
            </p>
          </div>
          <div>
            <h1 className="font-bold text-xl text-blue-500 md:text-2xl">
              Chat Bot Development
            </h1>
            <p>
              Save thousands of dollars by letting one chatbot simultaneously
              handle all your customers&lsquo; queries.
            </p>
          </div>
          <div>
            <h1 className="font-bold text-xl text-blue-500 md:text-2xl">Mobility Solutions</h1>
            <p>
              Your idea is priceless and has the power to bring a change. It&lsquo;s
              high time you develop it into a million-dollar app.
            </p>
          </div>
        </div>

        {/* Second Sub Container */}
        <div className="w-full md:w-[400px] ">
          <img src="/homepagegif.gif" width="100%" height="100%" alt="homepagegif" />
        </div>

        {/* Third Sub Container */}
        <div className="w-full md:w-[400px]  grid grid-rows-3">
          <div>
            <h1 className="font-bold text-blue-500 text-xl md:text-2xl">
              Performance Marketing
            </h1>
            <p>
              It isn&lsquo;t easy to bring customers to your business. But, with us,
              it&lsquo;s quite the opposite.
            </p>
          </div>
          <div>
            <h1 className="font-bold text-xl text-blue-500 md:text-2xl">AR/VR Development</h1>
            <p>
              Step into the tech-terrain of Augmented and Virtual Reality today
              and already leave your competitors behind.
            </p>
          </div>
          <div>
            <h1 className="font-bold text-xl text-blue-500 md:text-2xl">
              Salesforce Development
            </h1>
            <p>
              Our technical proficiency in Salesforce is unbeatable. We weave
              diverse elements to power up your CRM.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
