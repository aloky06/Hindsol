"use client";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <footer>
      <div className="mx-auto bg-blue-950 w-[100%]  p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between ">
          <div className="mb-6 md:mb-0">
            <Link href="https://hindsol.com/" className="flex items-center">
              <img
                src="/logo.png"
                className="h-[150px] me-3"
                alt="FlowBite Logo"
              />
            </Link>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 ">
            <div>
              <h2 className="mb-6 text-lg font-semibold text-blue-400 uppercase underline ">
                Company
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <Link
                    href="/aboutUs"
                    className="hover:underline text-[15px] md:text[25px]"
                  >
                   About Us
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/contactUs"
                    className="hover:underline text-[15px] md:text[25px]"
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/career"
                    className="hover:underline text-[15px] md:text[25px]"
                  >
                   Career
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/skillDev"
                    className="hover:underline text-[15px] md:text[25px]"
                  >
                 SkillDev
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-lg font-semibold text-blue-400 uppercase dark:text-white underline">
               SERVICES
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <Link
                    href="/services"
                    className="hover:underline text-[15px] md:text[25px]"
                  >
                    Web Development
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/services"
                    className="hover:underline text-[15px] md:text[25px]"
                  >
                    App Development
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/services"
                    className="hover:underline text-[15px] md:text[25px]"
                  >
                  Software Development
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/priceCalculation"
                    className="hover:underline text-[15px] md:text[25px]"
                  >
                   Project Estimate
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-lg font-semibold text-blue-400 uppercase dark:text-white underline" >
                POLICIES
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <Link href="/policies/privacyPolicy" className="hover:underline text-[15px] md:text[25px]">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/policies/termsAndConditions" className="hover:underline text-[15px] md:text[25px]">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/policies/refundPolicy" className="hover:underline text-[15px] md:text[25px]">
                    Refund Policy
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/#FAQs" className="hover:underline text-[15px] md:text[25px]">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center mb-4 sm:mb-0 sm:mr-4">
            {" "}
            <div className="flex gap-2 flex-col md:flex-row md:gap-4">
              <div>
              <Link href="/#" className="hover:underline">
              HINDSOL SOFTWARE PVT. LTD.
            </Link>
              </div>
              <div>
              <h2>All Rights Reserved.</h2>
              </div>
              <div>
                <h2>Copyright @2024</h2>
              </div>
                

            </div>
           
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <Link
              href="https://www.facebook.com/hindsolsoftware/"
              className="text-white hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link
              href="https://www.youtube.com/@hindsolsoftwarepvtltd"
              className="text-white hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 14"
              >
                <path
                  fill-rule="evenodd"
                  d="M19.7 3.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.84c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.84A4.225 4.225 0 0 0 .3 3.038a30.148 30.148 0 0 0-.2 3.206v1.5c.01 1.071.076 2.142.2 3.206.094.712.363 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.15 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965c.124-1.064.19-2.135.2-3.206V6.243a30.672 30.672 0 0 0-.202-3.206ZM8.008 9.59V3.97l5.4 2.819-5.4 2.8Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Youtube page</span>
            </Link>
            <Link
              href="https://www.instagram.com/hindsolsoftware/"
              className="text-white hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <FaInstagram className="w-4 h-4" />
              <span className="sr-only">Instagram account</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
