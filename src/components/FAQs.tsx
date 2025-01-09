"use client";
import React, { useEffect } from "react";

import "flowbite";
import { initFlowbite } from "flowbite";

function FAQs() {
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <div id="FAQs">
      {/* accordian element */}

      <div className="container mt-5 mx-auto">
        <h1 className="text-[40px]  font-bold ml-3 text-blue-950 mt-16 mb-5">
          Frequently Asked Questions(FAQs)
        </h1>
        <div
          id="accordion-flush"
          data-accordion="collapse"
          data-active-classes="bg-blue-500 dark:bg-gray-900 text-gray-900 dark:text-white"
          data-inactive-classes="bg-blue-950 text-white dark:text-gray-400"
        >
          <h2 id="accordion-flush-heading-1">
            <button
              type="button"
              className="flex px-5 items-center justify-between w-full py-5 font-medium rtl:text-right  border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
              data-accordion-target="#accordion-flush-body-1"
              aria-expanded="true"
              aria-controls="accordion-flush-body-1"
            >
              <span>
                What services does Hindsol Software Private Limited offer?
              </span>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-flush-body-1"
            className="hidden"
            aria-labelledby="accordion-flush-heading-1"
          >
            <div className="py-5 px-5 bg-gray-800  border-b border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-white dark:text-gray-400">
                Hindsol Software Private Limited offers a range of IT services,
                including software development, web development, mobile
                application development, IT consulting, and more. Please visit
                our Services page for a detailed list.
              </p>
            </div>
          </div>
          <h2 id="accordion-flush-heading-2">
            <button
              type="button"
              className="flex px-5 items-center justify-between w-full py-5 font-medium rtl:text-right  border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
              data-accordion-target="#accordion-flush-body-2"
              aria-expanded="false"
              aria-controls="accordion-flush-body-2"
            >
              <span>How can I request a quote for a project? </span>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-flush-body-2"
            className="hidden"
            aria-labelledby="accordion-flush-heading-2"
          >
            <div className="py-5 px-5 bg-gray-800  border-b border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-white dark:text-gray-400">
                You can request a quote by filling out the contact form on our
                website or by reaching out to us via email or phone. Please
                provide as much detail as possible about your project
                requirements so we can provide an accurate quote.
              </p>
            </div>
          </div>
          <h2 id="accordion-flush-heading-3">
            <button
              type="button"
              className="flex px-5 items-center justify-between w-full py-5 font-medium rtl:text-right  border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
              data-accordion-target="#accordion-flush-body-3"
              aria-expanded="false"
              aria-controls="accordion-flush-body-3"
            >
              <span>
                What is the typical timeline for completing a project?
              </span>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-flush-body-3"
            className="hidden"
            aria-labelledby="accordion-flush-heading-3"
          >
            <div className="py-5 px-5 bg-gray-800  border-b border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-white dark:text-gray-400">
                Project timelines vary depending on the scope and complexity of
                the project. We will provide an estimated timeline during the
                initial consultation phase based on your project requirements.
              </p>
            </div>
          </div>
          {/* ==================================================================================== */}
          <h2 id="accordion-flush-heading-4">
            <button
              type="button"
              className="flex px-5 items-center justify-between w-full py-5 font-medium rtl:text-right  border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
              data-accordion-target="#accordion-flush-body-4"
              aria-expanded="false"
              aria-controls="accordion-flush-body-4"
            >
              <span>How do you ensure the security of my data?</span>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-flush-body-4"
            className="hidden"
            aria-labelledby="accordion-flush-heading-4"
          >
            <div className="py-5 px-5 bg-gray-800  border-b border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-white dark:text-gray-400">
                At Hindsol, we take data security seriously. We implement
                industry-standard security measures to protect your data from
                unauthorized access, disclosure, alteration, or destruction.
              </p>
            </div>
          </div>
          <h2 id="accordion-flush-heading-5">
            <button
              type="button"
              className="flex px-5 items-center justify-between w-full py-5 font-medium rtl:text-right  border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
              data-accordion-target="#accordion-flush-body-5"
              aria-expanded="false"
              aria-controls="accordion-flush-body-5"
            >
              <span>
                Do you provide ongoing support after the project is completed?
              </span>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-flush-body-5"
            className="hidden"
            aria-labelledby="accordion-flush-heading-5"
          >
            <div className="py-5 px-5 bg-gray-800  border-b border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-white dark:text-gray-400">
                Yes, we offer ongoing support and maintenance services to ensure
                the smooth operation of your software, website, or application
                after launch. Our support plans can be customized to meet your
                specific needs.
              </p>
            </div>
          </div>
          <h2 id="accordion-flush-heading-6">
            <button
              type="button"
              className="flex px-5 items-center justify-between w-full py-5 font-medium rtl:text-right  border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
              data-accordion-target="#accordion-flush-body-6"
              aria-expanded="false"
              aria-controls="accordion-flush-body-6"
            >
              <span>
                Can you work with our existing technology stack or
                infrastructure?
              </span>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-flush-body-6"
            className="hidden"
            aria-labelledby="accordion-flush-heading-6"
          >
            <div className="py-5 px-5 bg-gray-800  border-b border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-white dark:text-gray-400">
                Yes, we have experience working with a wide range of
                technologies and can adapt to your existing technology stack or
                infrastructure. Our goal is to provide solutions that integrate
                seamlessly with your current systems.
              </p>
            </div>
          </div>
          <h2 id="accordion-flush-heading-7">
            <button
              type="button"
              className="flex px-5 items-center justify-between w-full py-5 font-medium rtl:text-right  border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
              data-accordion-target="#accordion-flush-body-7"
              aria-expanded="false"
              aria-controls="accordion-flush-body-3"
            >
              <span>What is your approach to project management?</span>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-flush-body-7"
            className="hidden"
            aria-labelledby="accordion-flush-heading-7"
          >
            <div className="py-5 px-5 bg-gray-800  border-b border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-white dark:text-gray-400">
                We follow agile project management methodologies to ensure
                transparency, collaboration, and flexibility throughout the
                development process. We provide regular updates and seek
                feedback from clients to ensure project success.
              </p>
            </div>
          </div>
          <h2 id="accordion-flush-heading-8">
            <button
              type="button"
              className="flex px-5 items-center justify-between w-full py-5 font-medium rtl:text-right  border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
              data-accordion-target="#accordion-flush-body-8"
              aria-expanded="false"
              aria-controls="accordion-flush-body-3"
            >
              <span>How can I get in touch with your team?</span>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-flush-body-8"
            className="hidden"
            aria-labelledby="accordion-flush-heading-8"
          >
            <div className="py-5 px-5 bg-gray-800  border-b border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-white dark:text-gray-400">
                You can contact our team by filling out the contact form on our
                website, sending us an email, or giving us a call. We are
                available during business hours to assist you with any inquiries
                or requests
              </p>
            </div>
          </div>
        </div>
        <h2 className="text-gray-800 mt-5 md:mx-2 mx-4 text-[20px] mb-10">
          <strong>
            If you have any other questions or need further assistance, please
            don&apos;t hesitate to reach out to us. We&apos;re here to help!
          </strong>
        </h2>
      </div>
    </div>
  );
}

export default FAQs;
