import React from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ServicePage = () => {
  return (
    <div>
        {/* Navbar */}
        <Navbar />
    <div className="bg-gray-100 min-h-screen p-8">
       
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Our Services</h1>

        {/* Web Development Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Web Development</h2>
          <p className="text-gray-700 mb-4">
            We specialize in creating modern and responsive websites tailored to meet your business needs.
          </p>
          <ul className="list-disc list-inside">
            <li>Custom Website Development</li>
            <li>E-commerce Solutions</li>
            <li>Content Management Systems (CMS)</li>
            <li>Responsive Design</li>
          </ul>
        </div>

        {/* App Development Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">App Development</h2>
          <p className="text-gray-700 mb-4">
            Transform your ideas into powerful and user-friendly mobile applications with our app development expertise.
          </p>
          <ul className="list-disc list-inside">
            <li>iOS App Development</li>
            <li>Android App Development</li>
            <li>Cross-Platform App Development</li>
            <li>App UI/UX Design</li>
          </ul>
        </div>

        {/* Software Development Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Software Development</h2>
          <p className="text-gray-700 mb-4">
            We provide innovative software solutions to streamline your business processes and enhance efficiency.
          </p>
          <ul className="list-disc list-inside">
            <li>Custom Software Development</li>
            <li>Enterprise Software Solutions</li>
            <li>Database Management</li>
            <li>Integration Services</li>
          </ul>
        </div>

      </div>
    </div>
    {/* footer */}
    <Footer />
    </div>
  );
};

export default ServicePage;