"use client";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import CountdownTimer from "./CountdownTimer";
import "./styles/SkilldevRegistrationForm.css";

interface ApiResponse {
  status: boolean;
  id?: string; // Optional property if the API response includes an ID
  // Add other properties as needed based on your API response
}

interface FormData {
  email: string;
  name: string;
  address: string;
  phoneNumber: string;
  pincode: string;
  remark: string;
  courses: string[]; // Array of course names
}

function SkillDevRegistrationForm() {
  const [isLoading, setIsLoading] = useState(false);

  const paymentRouter = useRouter();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    name: "",
    address: "",
    phoneNumber: "",
    pincode: "",
    remark: "",
    courses: [],
  });

  // form validtion function start
  const validateForm = () => {
    // Validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    // Validate name (only lowercase and trimmed)
    formData.name = formData.name.toLowerCase().trim();
    if (formData.name === "") {
      alert("Please enter a name.");
      return false;
    }

    // Validate address (only lowercase and trimmed)
    formData.address = formData.address.toLowerCase().trim();
    if (formData.address === "") {
      alert("Please enter an address.");
      return false;
    }

    // Validate phone number (10 characters)
    if (formData.phoneNumber.length !== 10) {
      alert("Please enter a valid phone number (10 characters).");
      return false;
    }

    // Validate pincode (6 characters)
    if (formData.pincode.length !== 6) {
      alert("Please enter a valid pincode (6 characters).");
      return false;
    }

    // Validate remark (maximum 200 words)
    if (formData.remark.length > 200) {
      alert("Please enter a remark with a maximum of 200 words.");
      return false;
    }

    // Validate at least one checkbox submission is mandatory
    if (formData.courses.length === 0) {
      alert("Please select at least one course.");
      return false;
    }

    return true;
  };

  // form validation function end

  async function callPhonePay(id: any) {
    // Redirect to the phone payment gateway page with database _id and amount
    const paymentUrl = `/api/it/payment/initiatePayment/${id}`;
    const response = await fetch(paymentUrl, {
      method: "GET",
    });

    const responseData = await response.json();
    if (responseData.status) {
      paymentRouter.replace(responseData.data);
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData((prevData) => ({
        ...prevData,
        courses: [...prevData.courses, value],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        courses: prevData.courses.filter((course) => course !== value),
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true); // Set loading state to true

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((v) => formDataToSend.append(key, v));
        } else {
          formDataToSend.append(key, value);
        }
      });

      const response = await fetch("/api/it/skilldev/skilldevSavingForm", {
        method: "POST",
        body: formDataToSend,
      });

      const responseData = (await response.json()) as ApiResponse;

      if (responseData.status) {
        console.log("phonepay called");
        callPhonePay(responseData.id);
      } else {
        console.log("phone pay is not called");
        throw new Error("phone pay is not called!");
      }

      // Handle response as needed
      console.log("Response:", response);
    } catch (error) {
      alert(
        "Something went wrong. Please refresh the page and continue again....."
      );
      setFormData({
        email: "",
        name: "",
        address: "",
        phoneNumber: "",
        pincode: "",
        remark: "",
        courses: [],
      });
      console.error("Error:", error);
    } finally {
      setIsLoading(false); // Set loading state to false after the request is completed
    }
  };

  return (
    <div>
      <div className="mx-20 my-10">
        <h2 className="text-3xl md:text-5xl font-bold text-green-500">
          Ready To Unlock Your Potential?
        </h2>
        <h4 className="text-lg md:text-xl font-semibold text-blue-900">
          Join us on a journey of Discovering and Working with Trending
          Technologies!
        </h4>
        <h4 className="text-lg md:text-xl font-semibold text-blue-900">
          Enroll in our Training today and pave the way to a brighter future.
        </h4>
      </div>
      {/* Registration Form */}
      <div className="container px-5 md:px-20">
        <div
          
          className="rounded-lg relative mx-auto shadow-md  md:mt-6 p-6  my-10 mt-28 bg-blue-950 text-white"
        >
          <h2 className="text-xl md:text-2xl  mb-4 font-semibold text-center">
            Apply Now
          </h2>
          {/* counter */}
         <div className="rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 absolute md:-top-8 md:-left-24 -top-[104px] left-[18%] waving-animation shadow-wave-animation"> 
            <CountdownTimer />
            {/* ... */}
         </div>
          <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                value={formData.email}
                onChange={handleChange}
                name="email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                id="floating_name"
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_name"
                className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                id="floating_address"
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_address"
                className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Address
              </label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  name="phoneNumber"
                  id="floating_phone_number"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_phone_number"
                  className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone
                </label>
              </div>
              {/* courses */}
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="number"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  value={formData.pincode}
                  onChange={handleChange}
                  name="pincode"
                  id="floating_pincode"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_pincode"
                  className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  PIN CODE
                </label>
              </div>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                value={formData.remark}
                onChange={handleChange}
                name="remark"
                id="floating_remark"
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_remark"
                className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                REMARK
              </label>
            </div>

            {/* chech box */}
            <div>
              <label className="">
                PROGRAMS:<sup className="text-[20px]">*</sup>
              </label>
              <div className="flex items-center mb-4 mt-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  onChange={handleCheckboxChange}
                  value="FULL STACK WITH NEXT JS"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 text-sm font-medium text-white dark:text-gray-300"
                >
                  FULL STACK WITH NEXT JS
                </label>
              </div>

              <div className="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="FRONT END"
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 text-sm font-medium text-white dark:text-gray-300"
                >
                  FRONT END
                </label>
              </div>

              <div className="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="BACK END WITH NEXT JS"
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 text-sm font-medium text-white dark:text-gray-300"
                >
                  BACK END WITH NEXT JS
                </label>
              </div>

              <div className="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="CORE JAVA"
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 text-sm font-medium text-white dark:text-gray-300"
                >
                  CORE JAVA
                </label>
              </div>

              <div className="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="ADVANCE JAVA"
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 text-sm font-medium text-white dark:text-gray-300"
                >
                  ADVANCE JAVA
                </label>
              </div>

              <div className="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="FULL STACK WITH JAVA"
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 text-sm font-medium text-white dark:text-gray-300"
                >
                  FULL STACK WITH JAVA
                </label>
              </div>

              <div className="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="BACK END WITH JAVA"
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 text-sm font-medium text-white dark:text-gray-300"
                >
                  BACK END WITH JAVA
                </label>
              </div>

              <div className="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="DIGITAL MARKETING"
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 text-sm font-medium text-white dark:text-gray-300"
                >
                  DIGITAL MARKETING
                </label>
              </div>

              <div className="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="ORACLE"
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 text-sm font-medium text-white dark:text-gray-300"
                >
                  ORACLE
                </label>
              </div>

              <div className="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="GRAPHICS DESIGN"
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 text-sm font-medium text-white dark:text-gray-300"
                >
                  GRAPHICS DESIGN
                </label>
              </div>
            </div>
            <div className=" flex md:flex-row  h-[120px]  flex-col justify-center items-center gap-5">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                disabled={isLoading} // Disable the button while loading
              >
                {isLoading ? (
                  <div className="flex justify-center items-center">
                    <div
                      className="spinner-border animate-spin inline-block w-4 h-4 border-4 rounded-full"
                      role="status"
                    >
                      {/* <span className="visually-hidden">Loading...</span> */}
                    </div>
                    <span className="ml-2">Loading...</span>
                  </div>
                ) : (
                  "Submit"
                )}
              </button>
              <button
                type="reset"
                className="text-white  bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                onClick={() => {
                  setFormData({
                    email: "",
                    name: "",
                    address: "",
                    phoneNumber: "",
                    pincode: "",
                    remark: "",
                    courses: [],
                  });
                }}
              >
                Clear Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SkillDevRegistrationForm;
