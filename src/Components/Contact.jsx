import React from "react";
import contact from "../assets/Contact/contact.png";
import { IoLogoWhatsapp } from "react-icons/io5";
const Contact = () => {
  return (
    <div id="contact">
      <section className="bg-blue-50 mt-[3rem] dark:bg-slate-800 " id="contact" >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-4">
            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
              {/* <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
                Contact
              </p> */}
              <h2 className="font-heading mb-4 font-bold tracking-tight text-green-900 dark:text-white text-3xl sm:text-5xl">
                Get in Touch
              </h2>
             
            </div>
          </div>
          <div className="md:flex block items-stretch justify-center">
            <div className="grid md:grid-cols-2">
              <div className="h-full 2xl:pr-6 pl-[2rem]">
                <p className="2xl:mt-[5rem] mt-[2rem] mb-12 2xl:text-xl lg:text-xl text-gray-600 dark:text-slate-400 ">
                We're here to help and answer any question you might have. We look forward to hearing from you.
                </p>
                <ul className="mb-6 md:mb-0">
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded p-[8px] 2xl:p-0  bg-green-900 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 2xl:text-xl lg:text-xl font-medium leading-6 text-gray-900 dark:text-white">
                        Our Address
                      </h3>
                      <p className="text-gray-600  2xl:text-lg lg:text-md dark:text-slate-400">
                        Cacto Agrow Industires Pvt Ltd
                      </p>
                      <p className="text-gray-600 2xl:text-lg lg:text-md dark:text-slate-400">
                        Office No 177, V Mall , Thakur Complex , Kandivali East,
                        Mumbai{" "}
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-green-900 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 2xl:text-xl lg:text-xl font-medium leading-6 text-gray-900 dark:text-white">
                        Contact
                      </h3>
                      <p className="text-gray-600 dark:text-slate-400 2xl:text-xl lg:text-md">
                       022-40135012<br/> 8983626021
                      </p>
                     
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-green-900 text-gray-50">
                    <IoLogoWhatsapp className="text-2xl"/>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 2xl:text-xl lg:text-xl font-medium leading-6 text-gray-900 dark:text-white">
                      Whastapp
                      </h3>
                      <p className="text-gray-600 dark:text-slate-400 2xl:text-xl lg:text-md">
                     <a href="https://wa.me/+918976370407"> 8976370407</a>
                      </p>
                     
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-green-900 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        ></path>
                       
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 2xl:text-xl lg:text-xl font-medium leading-6 text-gray-900 dark:text-white">
                        Email 
                      </h3>
                      <p className="text-gray-600 dark:text-slate-400  lg:text-md">
                     <a href="mailto:cactoagro@gmail.com" className="2xl:text-2xl"> cactoagro@gmail.com</a>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="w-[70%] 2xl:w-[70%] flex justify-center items-center mx-auto 2xl:mt-[10rem] xl:w-[70%] md:mt-[5rem] md:w-[90%]" id="form">
                
                <img src={contact} alt="conatct" className="rounded-lg"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
