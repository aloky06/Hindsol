"use client";
import Navbar from "@/components/Navbar";
import React, { useContext,useEffect, useState } from "react";
import Image from "next/image";
import { FaLaptopCode } from "react-icons/fa";
import { TbDeviceMobileCode } from "react-icons/tb";
import { DiAndroid } from "react-icons/di";
import { FaApple } from "react-icons/fa";
import { DiHtml5Multimedia } from "react-icons/di";
import { DiBrackets } from "react-icons/di";
import { DiHtml53DEffects } from "react-icons/di";
import { TbDeviceImacCode } from "react-icons/tb";
import { FaCheckSquare } from "react-icons/fa";
import PaymentCalculatorSubComponent from "@/components/PaymentCalculatorSubComponent.jsx";
import FAQs from "@/components/FAQs";
import { BiArrowToTop } from "react-icons/bi";
import PriceContext from "@/library/context/PriceContext";

function PriceCalculation() {
  const [isDesktop, setIsDesktop] = useState(true);
  // ios clicked
  const [isIOSClicked, setIOSClicked] = useState(false);
  // android clicked
  const [isAndroidClicked, setAndroidClicked] = useState(false);
  //   subcategory clicked
const [isSubCategoryClicked,setIsSubcategoryClicked]=useState(false);
  // app category clicked
  const [mvpApp,setMvpApp]=useState(false);
  const [basicApp,setBasicApp]=useState(false);
  const [refinedApp,setRefinedApp]=useState(false);
  const [scroll,setScroll]=useState(false);
 

  const {totalPrice,setTotalPrice,webPrice,setWebPrice,mobilePrice,setMobilePrice} =useContext(PriceContext);

  useEffect(()=>{
    if(isDesktop)
    {
      setIOSClicked(false);
      setAndroidClicked(false);
      setMobilePrice(0);
      
    }
    else{
      setWebPrice(0);
    }
    calculatePrice();
    
  },[isAndroidClicked,isIOSClicked,mvpApp,basicApp,refinedApp]);

  const calculatePrice = () => {
    let totalPrice = 0;
    console.log("calculate price called");
    if (isDesktop) {
      if (refinedApp) {
        totalPrice += 63000; // Adjust prices as needed
      } else if (basicApp) {
        totalPrice += 39000;
      } else if (mvpApp) {
        totalPrice += 28000;
      }
      setWebPrice(totalPrice);
    } else {
      if (isIOSClicked && isAndroidClicked) {
        if (refinedApp) {
          totalPrice = totalPrice + 63000 * 2; // Adjust prices as needed
        } else if (basicApp) {
          totalPrice = totalPrice + 39000 * 2;
        } else if (mvpApp) {
          totalPrice = totalPrice + 28000 * 2;
        }
      } else if (isIOSClicked || isAndroidClicked) {
        if (refinedApp) {
          totalPrice += 63000; // Adjust prices as needed
        } else if (basicApp) {
          totalPrice += 39000;
        } else if (mvpApp) {
          totalPrice += 28000;
        }
      }
      setMobilePrice(totalPrice);
    }
    console.log("price:", totalPrice);
    console.log("refined state:",refinedApp)
    setTotalPrice(totalPrice);
  };

 

  
 

  return (
    <div>
      {/* Navbar component */}
      <Navbar />

      {/* Header */}
      <header>
        <div>
          <Image
            src="/hindsol.png"
            className="mx-auto"
            alt="hindsol"
            width={200}
            height={200}
          />
          <h1 className="text-center text-[40px] text-gray-900 font-semibold">
            Project Price Calculator
          </h1>
          <h3 className="text-[20px] text-center text-gray-900 md:px-20">
            <strong>
              Select the features of your application that you would like to
              implement to receive an approximate cost estimate.
            </strong>
          </h3>
          <h3 className="text-[16px] text-center md:px-20">
            You will receive an approximate estimate for your application. It is
            not final but will provide you with only an approximate idea of the
            schedule and costs for the development of your app.
          </h3>
        </div>
        <div>
          <div>
            <div className="flex  justify-center m-0 ">
              {/* desktop switch */}
              <div
                onClick={() => {
                  setIsDesktop(true);
                  

                }}
                className={`flex items-center mr-2   font-semibold ${
                  isDesktop ? " text-blue-900" : "text-gray-900"
                }`}
              >
                <FaLaptopCode className="text-[40px]  mb-0" />
                <h1 className="text-[40px] hover:text-blue-900  ">WEB</h1>
              </div>
              {/* mobile switch */}
              <div
                onClick={() =>{
                 setIsDesktop(false);
              
                }
                }
                className={`flex items-center ml-2 font-semibold ${
                  isDesktop
                    ? "text-gray-900"
                    : "underline underline-offset-1 text-blue-900"
                }`}
              >
                <TbDeviceMobileCode className="text-[40px] mb-0" />
                <h1 className="text-[40px] hover:text-blue-900">MOBILE</h1>
              </div>
            </div>
            <hr className="border-gray-400 border-2 mt-[-13px] mx-[13px] " />
          </div>

          {/* main content div */}
          <div className="flex md:flex-row flex-col  mt-4 ">
            {/* left div */}
            <div className="md:w-[65%] w-full">
              {/* Project Type Selection */}
              <div>
                {isDesktop ? (
                  <div className="w-full  ">
                    <h3 className="text-[30px] mt-10   text-center font-semibold text-blue-800">
                      How BIG Is Your APP?
                    </h3>
                    <div className="flex md:flex-row justify-center mx-auto flex-col pr-4 w-[80%] md:w-auto ">
                      <div
                        onClick={()=>{
                          setMvpApp(!mvpApp);
                          setRefinedApp(false);
                          setBasicApp(false);
                         
                        }}
                        title="App with Core functionality ,but without other side features."
                        className="border-gray-300 md:ml-16 mx-auto mt-6 flex items-center bg-gray-200 rounded justify-center w-72 h-36 md:h-32 border"
                      >
                        <div>
                          <DiBrackets className="text-[40px]" />
                          <h3 className="text-[20px]">Basic</h3>
                        </div>
                      </div>

                      <div
                        onClick={()=>{
                          setBasicApp(!basicApp);
                          setMvpApp(false);
                          setRefinedApp(false);
                         
                        }}
                        title="App Core functionality + some side features that make addition to core functionality."
                        className="border-gray-300 md:ml-16 mx-auto mt-6 flex  items-center bg-gray-200 rounded justify-center  w-72 h-36 md:h-32 border"
                      >
                        <div>
                          <DiHtml5Multimedia className="text-[40px]" />
                          <h3 className="text-[20px]">Standard</h3>
                        </div>
                      </div>

                      <div
                        onClick={()=>{
                          setRefinedApp(!refinedApp);
                          setMvpApp(false);
                          setBasicApp(false);
                         
                        }}
                        title="Fully Build Application with all Core and Side Features. "
                        className="border-gray-300 md:ml-16 mx-auto mt-6 flex items-center bg-gray-200 rounded justify-center  w-72 h-36 md:h-32 border"
                      >
                        <div>
                          <DiHtml53DEffects className="text-[40px]" />
                          <h3 className="text-[20px]">Premium</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                  >
                    <div className="flex md:flex-row items-center flex-col  ">
                      <div
                        onClick={() => setIOSClicked(!isIOSClicked)}
                        className={`border-2  ${
                          isIOSClicked ? "border-blue-800" : "border-gray-300"
                        } md:ml-16 mt-12 flex items-center mx-auto bg-gray-200 rounded justify-center  md:w-72 w-[80%] md:h-32 h-36 border`}
                      >
                        <div>
                          {isIOSClicked ? (
                            <FaCheckSquare className="text-blue-800 absolute " />
                          ) : null}
                          <FaApple className="mx-auto text-[40px] " />
                          <h3> iOS APP</h3>
                        </div>
                      </div>
                      <div
                        onClick={() => setAndroidClicked(!isAndroidClicked)}
                        className={`border-2  ${
                          isAndroidClicked
                            ? "border-blue-800"
                            : "border-gray-300"
                        } md:ml-16 mt-12 flex items-center mx-auto bg-gray-200 rounded justify-center  md:w-72 w-[80%] md:h-32 h-36 border`}
                      >
                        <div>
                          {isAndroidClicked ? (
                            <FaCheckSquare className="text-blue-800 " />
                          ) : null}
                          <DiAndroid className="mx-auto text-[40px]" />
                          <h3>ANDROID APP</h3>
                        </div>
                      </div>
                    </div>

                    {/* type of projects options for mobile devices */}
                    {isAndroidClicked || isIOSClicked ? (
                      <div>
                        <h3 className="text-[30px] mt-10 text-center font-semibold text-blue-800">
                          How BIG Is Your APP?
                        </h3>

                        <div className="flex md:flex-row flex-col  pr-4">
                          <div
                            onClick={()=>{
                               setMvpApp(!mvpApp);
                               setBasicApp(false);
                               setRefinedApp(false);
                             
                            
                            }}
                            title="App with Core functionality ,but without other side features."
                            className={`border-2 ${(mvpApp)?"border-blue-900":'border-gray-300'} md:ml-16 mx-auto mt-6 flex items-center bg-gray-200 rounded justify-center  md:w-72 w-[80%] h-36 md:h-32 border`}
                          >
                            <div>
                              <DiBrackets className="text-[40px]" />
                              <h3 className="text-[20px]">Basic</h3>
                            </div>
                          </div>

                          <div
                           onClick={()=>{
                             setBasicApp(!basicApp);
                             setMvpApp(false);
                             setRefinedApp(false);
                            
                          }
                          }
                            title="App Core functionality + some side features that make addition to core functionality."
                            className={`border-2 ${(basicApp)?"border-blue-900":"border-gray-300"} md:ml-16 mx-auto mt-6 flex  items-center bg-gray-200 rounded justify-center  md:w-72 w-[80%] h-36 md:h-32 border`}
                          >
                            <div>
                              <DiHtml5Multimedia className="text-[40px]" />
                              <h3 className="text-[20px]">Standard</h3>
                            </div>
                          </div>

                          <div
                           onClick={()=>{
                             setRefinedApp(!refinedApp);
                             setMvpApp(false);
                             setBasicApp(false);
                            
                           }
                          }
                            title="Fully Build Application with all Core and Side Features. "
                            className={`border-2 ${(refinedApp)?"border-blue-900":"border-gray-300"} md:ml-16 mx-auto mt-6 flex items-center bg-gray-200 rounded justify-center  md:w-72 w-[80%] md:h-32 h-36 border`}
                          >
                            <div>
                              <DiHtml53DEffects className="text-[40px]" />
                              <h3 className="text-[20px]">Premium</h3>
                            </div>
                          </div>
                        </div>
                       {/* addition div */}
                       {(basicApp||mvpApp||refinedApp)?(
                        <PaymentCalculatorSubComponent  />
                       ):null}
                     
                      </div>
                     
                    ) : null}
                  </div>
                )}
              </div>
            </div>
            {/* right div */}
            <div className="md:w-[35%] w-full bg-white z-50 ">
              <div className={`flex gap-5 md:flex-col flex-col-reverse justify-end md:justify-start bg-blue-800 transparen md:sticky md:top-0 fixed ${(scroll)?'bottom-0' :'-bottom-[240px]'}  md:w-[90%] w-[100%] pt-4 md:h-[100vh] h-[440px] md:my-10 text-white rounded mx-auto`}>
                {/* first div */}
                <div className="border border-white mx-4 bg-blue-600  rounded">
                  <div className="flex justify-between">
                    <div className="flex items-center m-2">
                      <TbDeviceImacCode className="text-[25px]" />
                      <h3 className="text-[18px]">WEB</h3>
                    </div>

                    <h3 className="m-2 text-[18px]">NOTHING TO CALCULATE</h3>
                  </div>
                  <h3 className="text-[28px] ml-4">${webPrice}</h3>
                </div>

                {/* second div */}
                <div className="border border-white mx-4 mt-4 bg-blue-600  rounded">
                  <div className="flex justify-between">
                    <div className="flex items-center m-2">
                      <TbDeviceMobileCode className="text-[25px]" />
                      <h3 className="text-[18px]">Mobile</h3>
                    </div>

                    <h3 className="m-2 text-[18px]">NOTHING TO CALCULATE</h3>
                  </div>
                  <h3 className="text-[28px] ml-4">${mobilePrice}</h3>
                </div>

                {/* third div */}
                <div className=" mx-4 mt-4  rounded">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center m-2">
                      <h3 className="text-[18px]">Total Cost:</h3>
                    </div>
                    <div className="w-[60px] flex md:hidden justify-center items-center h-[60px] rounded-lg bg-white"
                     onClick={()=>{
                        setScroll(!scroll);
                    }}>
                    <BiArrowToTop className="text-black text-[35px]" />
                    </div>
                  </div>
                  <h3 className="text-[35px] font-semibold ml-2">${totalPrice}</h3>
                </div>

                <hr className="mx-4 mt-6" />

               
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="mt-20">
        <FAQs/>
      </section>
    </div>
  );
}

export default PriceCalculation;