import React, { useContext ,useState } from "react";
import PriceContext from "@/library/context/PriceContext";
import { DiAndroid } from "react-icons/di";
import { FaApple } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { LuTruck } from "react-icons/lu";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import { FaTools } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { MdOutlineMailLock } from "react-icons/md";
import { SiFacebook } from "react-icons/si";
import { FaGooglePlus } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import { MdDashboardCustomize } from "react-icons/md";
import { PiVideoFill } from "react-icons/pi";
import { MdSettingsInputComposite } from "react-icons/md";
import { PiFileVideoFill } from "react-icons/pi";
import { TbFilterSearch } from "react-icons/tb";
import { FaMapLocationDot } from "react-icons/fa6";
import { TbMapStar } from "react-icons/tb";
import { FaMagnifyingGlassLocation } from "react-icons/fa6";
import { GrSchedule } from "react-icons/gr";
import { FaSwatchbook } from "react-icons/fa6";
import { IoLogoWechat } from "react-icons/io5";
import { LiaCommentsSolid } from "react-icons/lia";
import { GiCardExchange } from "react-icons/gi";
import { FaPushed } from "react-icons/fa6";
import { SiAppstore } from "react-icons/si";
import { SiPaytm } from "react-icons/si";
import { MdAdminPanelSettings } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";
import { GrDocumentPerformance } from "react-icons/gr";
import { FaExternalLinkAlt } from "react-icons/fa";
import { RiOpenaiFill } from "react-icons/ri";
import { PiPhoneCallBold } from "react-icons/pi";




function PaymentCalculatorSubComponent() {

  const {totalPrice,setTotalPrice,webPrice,setWebPrice,mobilePrice,setMobilePrice} =useContext(PriceContext);

  // ios clicked
  const [isIOSClicked, setIOSClicked] = useState(false);
  // android clicked
  const [isAndroidClicked, setAndroidClicked] = useState(false);
  // features selected
  const [features, setFeatures] = useState({
    ecommerce: { active: false, amount: 12000 },
    logistics: { active: false, amount: 8000 },
    healthcare: { active: false, amount: 10000 },
    education: { active: false, amount: 7000 },
    custom: { active: false, amount: 15000 },
    emailSignup: { active: false, amount: 2000 },
    facebookSignup: { active: false, amount: 2000 },
    googleSignup: { active: false, amount: 2000 },
    multilanguage: { active: false, amount: 4000 },
    invitationEmails: { active: false, amount: 1000 },
    dashboard: { active: false, amount: 12000 },
    mediaUploading: { active: false, amount: 3000 },
    sendingEmail: { active: false, amount: 1000 },
    userInteractions: { active: false, amount: 2500 },
    audioVideoProcessing: { active: false, amount: 8000 },
    searchingAndFiltering: { active: false, amount: 3000 },
    geolocation: { active: false, amount: 3000 },
    workingWithMaps: { active: false, amount: 4000 },
    locationTracking: { active: false, amount: 6000 },
    scheduling: { active: false, amount: 6000 },
    bookings: { active: false, amount: 4000 },
    chat: { active: false, amount: 14000 },
    commentsAndReviews: { active: false, amount: 4000 },
    dataExchange: { active: false, amount: 1000 },
    pushNotifications: { active: false, amount: 4000 },
    cart: { active: false, amount: 3000 },
    inAppPurchasing: { active: false, amount: 3000 },
    paymentProcessing: { active: false, amount: 8000 },
    subscriptions: { active: false, amount: 1000 },
    inAppMarketplace: { active: false, amount: 15000 },
    productManagement: { active: false, amount: 8000 },
    adminPanel: { active: false, amount: 2000 },
    analytics: { active: false, amount: 2000 },
    performanceMonitoring: { active: false, amount: 1000 },
    thirdPartyIntegration: { active: false, amount: 2000 },
    openApi: { active: false, amount: 2000 },
    sms: { active: false, amount: 3000 },
    audioVideoCalls: { active: false, amount: 3000 }
  });

  const [totalAmount, setTotalAmount] = useState(0);

  const toggleFeature = (key) => {
   setFeatures((prev) => {
      const newFeatures = { ...prev };
      newFeatures[key] = { ...prev[key], active: !prev[key].active };
  
     
  
      return newFeatures;
    });

   
     // Deduct the amount if the feature is becoming inactive
     if (features[key].active) {
      setTotalPrice((prevTotalPrice) => prevTotalPrice - features[key].amount);
    } else {
      // Add the amount if the feature is becoming active
      setTotalPrice((prevTotalPrice) => prevTotalPrice + features[key].amount);
    }

  };
  

  



  console.log(features.ecommerce.active);
  console.log("totalstate:", totalAmount);

  return (
    <div>
      <div>
        <h3 className="text-[30px] mt-10 text-center font-semibold text-blue-800">
         App Field
        </h3>
        <div>
        <div className="flex md:flex-row items-center flex-col  ">
          <div
           onClick={() => toggleFeature("ecommerce")}
            className={`border-2  ${
              features.ecommerce.active ? "border-blue-800" : "border-gray-300"
            }  md:ml-16 mt-12 flex items-center mx-auto bg-gray-200 rounded justify-center  md:w-72 w-[80%] md:h-32 h-36 border`}
          >
            <div>
              {features.ecommerce.active ? (
                <FaCheckSquare className="text-blue-800 absolute " />
              ) : null}
             
              <FiShoppingCart className="mx-auto text-[40px]" /> 
              <h3>E-Commerce</h3>
            </div>
          </div>
          <div
           onClick={() => toggleFeature("logistics")}
            className={`border-2  ${
              features.logistics.active ? "border-blue-800" : "border-gray-300"
            }  md:ml-16 mt-12 flex items-center mx-auto bg-gray-200 rounded justify-center  md:w-72 w-[80%] md:h-32 h-36 border`}
          >
            <div>
              {features.logistics.active ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
            <LuTruck className='mx-auto text-[40px]' />
              <h3>Logistics</h3>
            </div>
          </div>
        </div>

        {/* second row */}
        <div className="flex md:flex-row items-center flex-col">
          <div
            onClick={() => toggleFeature("healthcare")}
            className={`border-2  ${
             features.healthcare.active ? "border-blue-800" : "border-gray-300"
            }  md:ml-16 mt-12 flex items-center mx-auto bg-gray-200 rounded justify-center  md:w-72 w-[80%] md:h-32 h-36 border`}
          >
            <div>
              {features.healthcare.active ? (
                <FaCheckSquare className="text-blue-800 absolute " />
              ) : null}
            <MdOutlineHealthAndSafety className="mx-auto text-[40px]" />
              <h3>Healthcare</h3>
            </div>
          </div>
          <div
            onClick={() => toggleFeature("education")}
            className={`border-2  ${
              features.education.active ? "border-blue-800" : "border-gray-300"
            } md:ml-16 mt-12 flex items-center mx-auto bg-gray-200 rounded justify-center  md:w-72 w-[80%] md:h-32 h-36 border`}
          >
            <div>
              {features.education.active ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
             <GiGraduateCap className="mx-auto text-[40px]"/>

              <h3>Education</h3>
            </div>
          </div>
          <div
           onClick={() => toggleFeature("custom")}
            className={`border-2  ${
              features.custom.active ? "border-blue-800" : "border-gray-300"
            }  md:ml-16 mt-12 flex items-center mx-auto bg-gray-200 rounded justify-center  md:w-72 w-[80%] md:h-32 h-36 border`}
          >
            <div>
              {features.custom.active ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
          <FaTools className="text-[40px] mx-auto" />
              <h3>Custom</h3>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* second component */}
      <div>
        <h3 className="text-[30px] mt-10 text-center font-semibold text-blue-800">
         Users And Accounts
        </h3>
        <div>
        <div className="flex md:flex-row items-center flex-col">
          <div
           onClick={() => toggleFeature("emailSignup")}
            className={`border-2  ${
             features.emailSignup.active ? "border-blue-800" : "border-gray-300"
            } md:ml-16 mt-12 flex items-center mx-auto bg-gray-200 rounded justify-center  md:w-72 w-[80%] md:h-32 h-36 border`}
          >
            <div>
              {features.emailSignup.active? (
                <FaCheckSquare className="text-blue-800 absolute " />
              ) : null}
             
             <MdOutlineMailLock className="mx-auto text-[40px]"/>
              <h3>E-Mail and Password Sign Up</h3>
            </div>
          </div>
          <div
            onClick={() => toggleFeature("facebookSignup")}
            className={`border-2  ${
              features.facebookSignup.active ? "border-blue-800" : "border-gray-300"
            }  md:ml-16 mt-12 flex items-center mx-auto bg-gray-200 rounded justify-center  md:w-72 w-[80%] md:h-32 h-36 border`}
          >
            <div>
              {features.facebookSignup.active ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
           <SiFacebook  className="mx-auto text-[40px]"/>
              <h3>Facebook Signup</h3>
            </div>
          </div>
         
        </div>

        {/* second row */}
        <div className="flex md:flex-row items-center flex-col">
          <div
           onClick={() => toggleFeature("googleSignup")}
            className={`border-2  ${
              features.googleSignup.active ? "border-blue-800" : "border-gray-300"
            }  md:ml-16 mt-12 flex items-center mx-auto bg-gray-200 rounded justify-center  md:w-72 w-[80%] md:h-32 h-36 border`}
          >
            <div>
              {features.googleSignup.active ? (
                <FaCheckSquare className="text-blue-800 absolute " />
              ) : null}
           <FaGooglePlus className="mx-auto text-[40px]" />
              <h3>Google Signup</h3>
            </div>
          </div>
          <div
          onClick={() => toggleFeature("multilanguage")}
            className={`border-2  ${
              features.multilanguage.active ? "border-blue-800" : "border-gray-300"
            } md:ml-16 mt-12 flex items-center mx-auto bg-gray-200 rounded justify-center  md:w-72 w-[80%] md:h-32 h-36 border`}
          >
            <div>
              {features.multilanguage.active ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
             <IoLanguage className="mx-auto text-[40px]" />

              <h3>Multilanguage System</h3>
            </div>
          </div>
          <div
           onClick={() => toggleFeature("invitationEmails")}
            className={`border-2  ${
              features.invitationEmails.active ? "border-blue-800" : "border-gray-300"
            }  md:ml-16 mt-12 flex items-center mx-auto bg-gray-200 rounded justify-center  md:w-72 w-[80%] md:h-32 h-36 border`}
          >
            <div>
              {features.invitationEmails.active ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
          <SiGmail className="mx-auto text-[40px]" />
              <h3>User Invitation Emails</h3>
            </div>
          </div>
        </div>
        </div>
      </div>

        {/* third component */}
        <div>
        <h3 className="text-[30px] mt-10 text-center font-semibold text-blue-800">
         App Content
        </h3>
        <div>
        <div className="flex md:flex-row items-center flex-col ">
          <div
           onClick={() => toggleFeature("dashboard")}
            className={`border-2  ${
              features.dashboard.active ? "border-blue-800" : "border-gray-300"
            }  md:ml-16 mt-12 flex items-center mx-auto bg-gray-200 rounded justify-center  md:w-72 w-[80%] md:h-32 h-36 border`}
          >
            <div>
              {features.dashboard.active ? (
                <FaCheckSquare className="text-blue-800 absolute " />
              ) : null}
             
             <MdDashboardCustomize className="text-[40px] mx-auto"/>
              <h3>Dashboard</h3>
            </div>
          </div>
          <div
           onClick={() => toggleFeature("mediaUploading")}
            className={`border-2  ${
              features.mediaUploading.active ? "border-blue-800" : "border-gray-300"
            }  md:ml-16 mt-12 flex items-center mx-auto bg-gray-200 rounded justify-center  md:w-72 w-[80%] md:h-32 h-36 border`}
          >
            <div>
              {features.mediaUploading.active ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
          <PiVideoFill className="text-[40px] mx-auto" />
              <h3>Media Uploading</h3>
            </div>
          </div>
          <div
           onClick={() => toggleFeature("sendingEmail")}
            className={`border-2  ${
              features.sendingEmail.active ? "border-blue-800" : "border-gray-300"
            }  md:ml-16 mt-12 flex items-center mx-auto bg-gray-200 rounded justify-center  md:w-72 w-[80%] md:h-32 h-36 border`}
          >
            <div>
              {features.sendingEmail.active ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
             <SiGmail className="mx-auto text-[40px]" />
              <h3>Email Notifications</h3>
            </div>
          </div>
        </div>

        {/* second row */}
        <div className="flex md:flex-row items-center flex-col">
          <div
           onClick={() => toggleFeature("userInteractions")}
            className={`border-2  ${
              features.userInteractions.active ? "border-blue-800" : "border-gray-300"
            }  md:ml-16 mt-12 flex items-center mx-auto bg-gray-200 rounded justify-center  md:w-72 w-[80%] md:h-32 h-36 border`}
          >
            <div>
              {features.userInteractions.active ? (
                <FaCheckSquare className="text-blue-800 absolute " />
              ) : null}
           <MdSettingsInputComposite className="text-[40px] mx-auto" />
              <h3>User Interactions</h3>
            </div>
          </div>
          <div
          onClick={() => toggleFeature("audioVideoProcessing")}
            className={`border-2  ${
              features.audioVideoProcessing.active ? "border-blue-800" : "border-gray-300"
            }  md:ml-16 mt-12 flex items-center mx-auto bg-gray-200 rounded justify-center  md:w-72 w-[80%] md:h-32 h-36 border`}
          >
            <div>
              {features.audioVideoProcessing.active ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
          <PiFileVideoFill className="mx-auto text-[40px]"/>

              <h3>Audio/Video Processing</h3>
            </div>
          </div>
          <div
          onClick={() => toggleFeature("searchingAndFiltering")}
            className={`border-2  ${
              features.searchingAndFiltering.active ? "border-blue-800" : "border-gray-300"
            }  md:ml-16 mt-12 flex items-center mx-auto bg-gray-200 rounded justify-center  md:w-72 w-[80%] md:h-32 h-36 border`}
          >
            <div>
              {features.searchingAndFiltering.active ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
          <TbFilterSearch className="mx-auto text-[40px]"/>
              <h3>Search & Filtering</h3>
            </div>
          </div>
        </div>
        </div>
      </div>

           {/* fourth component */}
        <div>
        <h3 className="text-[30px] mt-10 text-center font-semibold text-blue-800">
         GEOLOCATION
        </h3>
        <div>
        <div className="flex md:flex-row items-center flex-col">
          <div
           onClick={() => toggleFeature("geolocation")}
            className={`border-2  ${
              features.geolocation.active ? "border-blue-800" : "border-gray-300"
            } md:ml-16 mt-12 flex items-center mx-auto bg-gray-200 rounded justify-center  md:w-72 w-[80%] md:h-32 h-36 border`}
          >
            <div>
              {features.geolocation.active ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
           <FaMapLocationDot className="text-[40px] mx-auto"/>
              <h3>Geolocation</h3>
            </div>
          </div>
        </div>

        {/* second row */}
        <div className="flex md:flex-row items-center flex-col">
          <div
          onClick={() => toggleFeature("workingWithMaps")}
            className={`border-2  ${
              features.workingWithMaps.active ? "border-blue-800" : "border-gray-300"
            } md:ml-16 mt-12 flex items-center mx-auto bg-gray-200 rounded justify-center  md:w-72 w-[80%] md:h-32 h-36 border`}
          >
            <div>
              {features.workingWithMaps.active ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
            <TbMapStar className="mx-auto text-[40px]"/>

              <h3>Working With Maps</h3>
            </div>
          </div>
          <div
          onClick={() => toggleFeature("locationTracking")}
            className={`border-2  ${
              features.locationTracking.active ? "border-blue-800" : "border-gray-300"
            } md:ml-16 mt-12 flex items-center mx-auto bg-gray-200 rounded justify-center  md:w-72 w-[80%] md:h-32 h-36 border`}
          >
            <div>
              {features.locationTracking.active ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
         <FaMagnifyingGlassLocation className="text-[40px] mx-auto"/>
              <h3>Live Location Tracking</h3>
            </div>
          </div>
        </div>
        </div>
      </div>

          {/* fifth component */}
          <div>
        <h3 className="text-[30px] mt-10 text-center font-semibold text-blue-800">
         SCHEDULING / BOOKINGS
        </h3>
        <div>
        <div className="flex md:flex-row items-center flex-col">
          <div
          onClick={() => toggleFeature("scheduling")}
            className={`border-2  ${
              features.scheduling.active ? "border-blue-800" : "border-gray-300"
            } md:ml-16 mt-12 flex items-center mx-auto bg-gray-200 rounded justify-center  md:w-72 w-[80%] md:h-32 h-36 border`}
          >
            <div>
              {features.scheduling.active ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
           <GrSchedule className="text-[40px] mx-auto"/>
              <h3>Scheduling</h3>
            </div>
          </div>
          <div
           onClick={() => toggleFeature("bookings")}
            className={`border-2  ${
              features.bookings.active ? "border-blue-800" : "border-gray-300"
            } md:ml-16 mt-12 flex items-center mx-auto bg-gray-200 rounded justify-center  md:w-72 w-[80%] md:h-32 h-36 border`}
          >
            <div>
              {features.bookings.active ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
           <FaSwatchbook className="text-[40px] mx-auto"/>
              <h3>Bookings</h3>
            </div>
          </div>
        </div>
       </div>
      </div>

            {/* sixth component */}
            <div>
        <h3 className="text-[30px] mt-10 text-center font-semibold text-blue-800">
        USER INTERACTIONS
        </h3>
        <div>
        <div className="flex md:flex-row items-center flex-col">
          <div
           onClick={() => toggleFeature("chat")}
            className={`border-2  ${
              features.chat.active ? "border-blue-800" : "border-gray-300"
            }  md:ml-16 mt-12 flex items-center mx-auto bg-gray-200 rounded justify-center  md:w-72 w-[80%] md:h-32 h-36 border`}
          >
            <div>
              {features.chat.active ? (
                <FaCheckSquare className="text-blue-800 absolute " />
              ) : null}
             
             <IoLogoWechat className="text-[40px] mx-auto"/>
              <h3>Chat</h3>
            </div>
          </div>
          <div onClick={() => toggleFeature("commentsAndReviews")}
            className={`border-2  ${
              features.commentsAndReviews.active ? "border-blue-800" : "border-gray-300"
            } md:ml-16 mt-12 flex items-center mx-auto bg-gray-200 rounded justify-center  md:w-72 w-[80%] md:h-32 h-36 border`}
          >
            <div>
              {features.commentsAndReviews.active ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
           <LiaCommentsSolid className="text-[40px] mx-auto"/>
              <h3>Comment / Reviews</h3>
            </div>
          </div>
         
        </div>

        {/* second row */}
        <div className="flex md:flex-row items-center flex-col">
          <div
          onClick={() => toggleFeature("dataExchange")}
            className={`border-2  ${
              features.dataExchange.active ? "border-blue-800" : "border-gray-300"
            } md:ml-16 mt-12 flex items-center mx-auto bg-gray-200 rounded justify-center  md:w-72 w-[80%] md:h-32 h-36 border`}
          >
            <div>
              {features.dataExchange.active ? (
                <FaCheckSquare className="text-blue-800 absolute " />
              ) : null}
         <GiCardExchange className="text-[40px] mx-auto"/>
              <h3>Data Exchange</h3>
            </div>
          </div>
          <div
           onClick={() => toggleFeature("pushNotifications")}
            className={`border-2  ${
             features.pushNotifications.active ? "border-blue-800" : "border-gray-300"
            } md:ml-16 mt-12 flex items-center mx-auto bg-gray-200 rounded justify-center  md:w-72 w-[80%] md:h-32 h-36 border`}
          >
            <div>
              {features.pushNotifications.active ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
             <FaPushed className="text-[40px] mx-auto"/>

              <h3>Push Notifications</h3>
            </div>
          </div>
  
        </div>
        </div>
      </div>

        {/* Seventh component */}
        <div>
        <h3 className="text-[30px] mt-10 text-center font-semibold text-blue-800">
       ECOMMERCE
        </h3>
        <div>
        <div className="flex md:flex-row items-center flex-col">
          <div
           onClick={() => toggleFeature("cart")}
            className={`border-2  ${
              features.cart.active ? "border-blue-800" : "border-gray-300"
            }  md:ml-16 mt-12 flex items-center mx-auto bg-gray-200 rounded justify-center  md:w-72 w-[80%] md:h-32 h-36 border`}
          >
            <div>
              {features.cart.active ? (
                <FaCheckSquare className="text-blue-800 absolute " />
              ) : null}
             
              <FiShoppingCart className="mx-auto text-[40px]" /> 
              <h3>Shopping Cart</h3>
            </div>
          </div>
          <div
            onClick={() => toggleFeature("inAppPurchasing")}
            className={`border-2  ${
              features.inAppPurchasing.active ? "border-blue-800" : "border-gray-300"
            } md:ml-16 mt-12 flex items-center mx-auto bg-gray-200 rounded justify-center  md:w-72 w-[80%] md:h-32 h-36 border`}
          >
            <div>
              {features.inAppPurchasing.active ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
           <SiAppstore className="text-[40px] mx-auto"/>
              <h3>In App Purchasing</h3>
            </div>
          </div>
         
        </div>

        {/* second row */}
        <div className="flex md:flex-row items-center flex-col">
          <div
            onClick={() => toggleFeature("paymentProcessing")}
            className={`border-2  ${
             features.paymentProcessing.active ? "border-blue-800" : "border-gray-300"
            } md:ml-16 mt-12 flex items-center mx-auto bg-gray-200 rounded justify-center  md:w-72 w-[80%] md:h-32 h-36 border`}
          >
            <div>
              {features.paymentProcessing.active ? (
                <FaCheckSquare className="text-blue-800 absolute " />
              ) : null}
            <SiPaytm className="mx-auto text-[40px]"/>
              <h3>Payment Processing</h3>
            </div>
          </div>
          <div
           onClick={() => toggleFeature("subscriptions")}
            className={`border-2  ${
              features.subscriptions.active ? "border-blue-800" : "border-gray-300"
            } md:ml-16 mt-12 flex items-center mx-auto bg-gray-200 rounded justify-center  md:w-72 w-[80%] md:h-32 h-36 border`}
          >
            <div>
              {features.subscriptions.active ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
             <GiGraduateCap className="mx-auto text-[40px]"/>

              <h3>Subscriptions</h3>
            </div>
          </div>
  
        </div>

            {/* third row */}
            <div className="flex md:flex-row items-center flex-col">
          <div
           onClick={() => toggleFeature("inAppMarketplace")}
            className={`border-2  ${
              features.inAppMarketplace.active ? "border-blue-800" : "border-gray-300"
            } md:ml-16 mt-12 flex items-center mx-auto bg-gray-200 rounded justify-center  md:w-72 w-[80%] md:h-32 h-36 border`}
          >
            <div>
              {features.inAppMarketplace.active ? (
                <FaCheckSquare className="text-blue-800 absolute " />
              ) : null}
            <MdOutlineHealthAndSafety className="mx-auto text-[40px]" />
              <h3>In App Marketplace</h3>
            </div>
          </div>
          <div
          onClick={() => toggleFeature("productManagement")}
            className={`border-2  ${
             features.productManagement.active ? "border-blue-800" : "border-gray-300"
            }  md:ml-16 mt-12 flex items-center mx-auto bg-gray-200 rounded justify-center  md:w-72 w-[80%] md:h-32 h-36 border`}
          >
            <div>
              {features.productManagement.active ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
             <GiGraduateCap className="mx-auto text-[40px]"/>

              <h3>Product Management</h3>
            </div>
          </div>
  
        </div>
        </div>
      </div>

               {/* eigth component */}
               <div>
        <h3 className="text-[30px] mt-10 text-center font-semibold text-blue-800">
         ADMIN, FEEDBACK & ANALYTICS
        </h3>
        <div>
        <div className="flex md:flex-row items-center flex-col">
          <div
           onClick={() => toggleFeature("adminPanel")}
            className={`border-2  ${
             features.adminPanel.active? "border-blue-800" : "border-gray-300"
            } md:ml-16 mt-12 flex items-center mx-auto bg-gray-200 rounded justify-center  md:w-72 w-[80%] md:h-32 h-36 border`}
          >
            <div>
              {features.adminPanel.active ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
         <MdAdminPanelSettings className="text-[40px] mx-auto" />
              <h3>Admin Panel</h3>
            </div>
          </div>
        </div>

        {/* second row */}
        <div className="flex md:flex-row items-center flex-col">
          <div
           onClick={() => toggleFeature("analytics")}
            className={`border-2  ${
              features.analytics.active ? "border-blue-800" : "border-gray-300"
            } md:ml-16 mt-12 flex items-center mx-auto bg-gray-200 rounded justify-center  md:w-72 w-[80%] md:h-32 h-36 border`}
          >
            <div>
              {features.analytics.active ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
            <SiGoogleanalytics className="text-[40px] mx-auto"/>

              <h3>Analytics</h3>
            </div>
          </div>
          <div
           onClick={() => toggleFeature("performanceMonitoring")}
            className={`border-2  ${
              features.performanceMonitoring.active ? "border-blue-800" : "border-gray-300"
            } md:ml-16 mt-12 flex items-center mx-auto bg-gray-200 rounded justify-center  md:w-72 w-[80%] md:h-32 h-36 border`}
          >
            <div>
              {features.performanceMonitoring.active ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
         <GrDocumentPerformance className="mx-auto text-[40px]"/>
              <h3>Performance Monitoring</h3>
            </div>
          </div>
        </div>
        </div>
      </div>

            {/* ninth component */}
            <div>
        <h3 className="text-[30px] mt-10 text-center font-semibold text-blue-800">
        EXTERNAL APIS AND INTEGRATIONS
        </h3>
        <div>
        <div className="flex md:flex-row items-center flex-col">
          <div
          onClick={() => toggleFeature("thirdPartyIntegration")}
            className={`border-2  ${
              features.thirdPartyIntegration.active ? "border-blue-800" : "border-gray-300"
            }  md:ml-16 mt-12 flex items-center mx-auto bg-gray-200 rounded justify-center  md:w-72 w-[80%] md:h-32 h-36 border`}
          >
            <div>
              {features.thirdPartyIntegration.active ? (
                <FaCheckSquare className="text-blue-800 absolute " />
              ) : null}
             
             <FaExternalLinkAlt className="text-[40px] mx-auto" />
              <h3>Third Party Integrations</h3>
            </div>
          </div>
          <div
          onClick={() => toggleFeature("openApi")}
            className={`border-2  ${
              features.openApi.active ? "border-blue-800" : "border-gray-300"
            } md:ml-16 mt-12 flex items-center mx-auto bg-gray-200 rounded justify-center  md:w-72 w-[80%] md:h-32 h-36 border`}
          >
            <div>
              {features.openApi.active ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
            <RiOpenaiFill className="text-[40px] mx-auto"/>
              <h3>Open Api</h3>
            </div>
          </div>
         
        </div>

        {/* second row */}
        <div className="flex md:flex-row items-center flex-col">
          <div
           onClick={() => toggleFeature("sms")}
            className={`border-2  ${
              features.sms.active ? "border-blue-800" : "border-gray-300"
            }  md:ml-16 mt-12 flex items-center mx-auto bg-gray-200 rounded justify-center  md:w-72 w-[80%] md:h-32 h-36 border`}
          >
            <div>
              {features.sms.active ? (
                <FaCheckSquare className="text-blue-800 absolute " />
              ) : null}
              <LiaCommentsSolid className="text-[40px] mx-auto"/>
              <h3>SMS Messaging</h3>
            </div>
          </div>
          <div
          onClick={() => toggleFeature("audioVideoCalls")}
            className={`border-2  ${
              features.audioVideoCalls.active ? "border-blue-800" : "border-gray-300"
            }  md:ml-16 mt-12 flex items-center mx-auto bg-gray-200 rounded justify-center  md:w-72 w-[80%] md:h-32 h-36 border`}
          >
            <div>
              {features.audioVideoCalls.active ? (
                <FaCheckSquare className="text-blue-800 " />
              ) : null}
           <PiPhoneCallBold className="text-[40px] mx-auto" />

              <h3>Audio / Video Calls</h3>
            </div>
          </div>
  
        </div>
        </div>
      </div>
      
    </div>
  );
}

export default PaymentCalculatorSubComponent;
