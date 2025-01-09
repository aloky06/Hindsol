"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  email: string;
  name: string;
  address: string;
  phoneNumber: string;
  pincode: string;
  remark: string;
}

function CareerRegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    name: "",
    address: "",
    phoneNumber: "",
    pincode: "",
    remark: "",
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileInput = e.target;

    // Check if files are selected
    if (fileInput.files && fileInput.files.length > 0) {
      const selectedFile = fileInput.files[0];

      // Validate file type (allow only PDF)
      if (selectedFile.type === "application/pdf") {
        console.log("Selected file:", selectedFile);
        // Update state or perform other actions with the selected file
      } else {
        // Display an error message or perform other actions for invalid file type
        console.error("Invalid file type. Please select a PDF document.");
        // Reset the file input to clear the selected file
        fileInput.value = "";
      }
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("email", formData.email);
    formDataToSend.append("name", formData.name);
    formDataToSend.append("address", formData.address);
    formDataToSend.append("phoneNumber", formData.phoneNumber);
    formDataToSend.append("pincode", formData.pincode);
    formDataToSend.append("remark", formData.remark);

    // Append file data if needed
    const fileInput = document.getElementById(
      "user_avatar"
    ) as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      formDataToSend.append("resume", fileInput.files[0]);
    }

    try {
      const response = await fetch("/api/it/career/careerSavingForm", {
        method: "POST",
        body: formDataToSend, // No need to stringify FormData
      });

      if (response.ok) {
        // Handle successful form submission
        console.log("Form submitted successfully");
      } else {
        // Handle form submission failure
        console.error("Form submission failed");
      }

      setFormData({
        email: "",
        name: "",
        address: "",
        phoneNumber: "",
        pincode: "",
        remark: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
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
          // style={{
          //   backgroundImage:
          //     "linear-gradient(to right, #fa709a 0%, #fee140 100%)",
          // }}
          className="rounded-lg mx-auto shadow-md  bg-blue-950 mt-6 p-6  my-10"
        >
          <h2 className="text-xl md:text-2xl mb-4 font-semibold text-white text-center">
            Apply Now
          </h2>
          <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={handleInputChange}
                value={formData.email}
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
                id="floating_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={handleInputChange}
                value={formData.name}
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
                id="floating_address"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={handleInputChange}
                value={formData.address}
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
                  name="phoneNumber"
                  id="floating_phone_number"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  onChange={handleInputChange}
                  value={formData.phoneNumber}
                  required
                />
                <label
                  htmlFor="floating_phone_number"
                  className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone number
                </label>
              </div>
              {/* courses */}
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="number"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="pincode"
                  id="floating_pincode"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  onChange={handleInputChange}
                  value={formData.pincode}
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
                name="remark"
                id="floating_remark"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={handleInputChange}
                value={formData.remark}
                required
              />
              <label
                htmlFor="floating_remark"
                className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                REMARK
              </label>

              {/* upload file */}
              <div className="mt-4">
                <label
                  className="block mb-2 text-sm font-medium text-white dark:text-white"
                  htmlFor="user_avatar"
                >
                  Upload Your Resume
                </label>
                <input
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  aria-describedby="user_avatar_help"
                  id="user_avatar"
                  onChange={handleFileChange}
                  type="file"
                />
              </div>
              <div
                className="mt-1 text-sm text-white dark:text-gray-300"
                id="user_avatar_help"
              >
                Please Upload Your Resume.
              </div>
            </div>
            <div className=" flex md:flex-row  h-[120px]  flex-col justify-center items-center gap-5">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full md:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
            <button
              type="reset"
              className="text-white  bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full md:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
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

export default CareerRegistrationForm;
