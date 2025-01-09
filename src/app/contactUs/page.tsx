"use client"
import Navbar from '../../components/Navbar';
import React,{useState,useEffect} from 'react';
import Pulsating from '@/components/Pulsating';
import Footer from '@/components/Footer';
import AddressComponent from "../../components/contact/AddressComponent";

const ContactUs = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to demonstrate the loading animation
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the duration as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="font-sans min-h-screen">
      {/* Navigation */}
      <Navbar />

        {/* Pulsating div for loading animation */}
        {
        (loading && (<Pulsating/>))
       }
       {/* pulsating end */}

      <div className={`${loading ? "hidden" : ""}`}>
      {/* Contact Form */}
      <div className="flex flex-col md:flex-row  relative">

        {/* Contact Image */}
        <img
          src='/contact-images/contactPage.jpg'
          width={600}
          height={600}
          className='md:w-1/2 object-cover'
          alt='Contact Image SVG'
        />

        {/* Form Container */}
        <div className="md:w-1/2 p-8 bg-white rounded shadow-lg">
          {/* Title */}
          <h1 className="text-2xl font-bold mb-6">Contact Us</h1>

          {/* Form */}
          <form action="#" method="POST">

            {/* Name Input */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
              <input
                type="text"
                placeholder='Enter Your Name'
                id="name"
                name="name"
                className="w-full p-2 border rounded"
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
              <input
                type="email"
                placeholder='Enter Your Email'
                id="email"
                name="email"
                className="w-full p-2 border rounded"
              />
            </div>

            {/* Message Textarea */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message:</label>
              <textarea
                id="message"
                placeholder='Write a Message'
                name="message"
                className="w-full p-2 border rounded"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition duration-300">Submit</button>

          </form>
        </div>
         
      </div>
      
      <div className=' my-10  flex items-center justify-center'>
      <AddressComponent />
    </div>
     
     
      {/* footer */}
      <Footer/> 
      </div>
        
    </div>
  );
};

export default ContactUs;
