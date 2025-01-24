import React from "react";
import image from "../assets/Vision/image.jpg";

const Missiom_vision = () => {
  return (
    <div className="2xl:p-[10rem] 2xl:pt-[3rem] 2xl:pb-[3rem] p-[2rem] ">
      <section className="bg-gray-100  2xl:p-[3rem] p-[1rem] ">
        <div className=" mx-auto 2xl:px-4 md:px-1 px-0 sm:px-6 lg:px-8">
          <h3 className=" 2xl:text-4xl text-xl md:text-2xl text-center font-bold text-green-700 2xl:mb-[2rem] mb-[0rem] mt-[1rem]">
            Our Mission & Vision
          </h3>
          <div className="lg:flex  block ">
            <div className="2xl:w-[90%] w-full ">
              <div className="2xl:flex block gap-5 2xl:mt-[5rem] mt-[3rem]">
                <div className="flex items-center justify-center 2xl:h-[4rem] 2xl:w-[14rem] w-[5rem] h-[4rem] mx-auto    rounded-md bg-green-900 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                    />
                  </svg>
                </div>
                <div className="2xl:text-left text-center">
                  <h3 className="text-2xl font-semibold text-gray-900 mt-[1rem] 2xl:mt-0">
                    Mission
                  </h3>
                  <p className="mt-2 text-md text-gray-500 text-justify">
                    Our mission as a company is to be at the forefront of
                    innovation going beyond the needs of the leather goods
                    market, offering high quality materials made with
                    sustainable alternatives. All this,  with a vision of
                    inclusion, impulsing students, entrepreneurs and companies
                    involved with the objective of utilizing more sustainable
                    materials since the change requires participation of us all.
                  </p>
                </div>
              </div>
              <div className="2xl:flex block gap-5 2xl:mt-[5rem] ">
                <div className=" flex  items-center justify-center 2xl:h-[4rem] 2xl:w-[9rem] w-[5rem] h-[4rem] mx-auto rounded-md bg-green-900 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="2xl:text-left text-center">
                  <h3 className="text-2xl font-semibold text-gray-900 mt-[1rem] 2xl:mt-0">
                    Vision
                  </h3>
                  <p className="mt-2 text-md text-gray-500 text-justify">
                    Mr. Pankaj Wadibhasme( Preet Kumar)had the idea after
                    working on Nopal Cactus base Vegan And Other various
                    technology and Energy base product from Nopal, a company to
                    focus on developing Cacto , which nowadays is known as Nopal
                    Cactus vegan leather. 
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                src={image}
                className="2xl:w-[60%] md:w-[50%] xl:w-[65%] lg:w-[80%] lg:mt-[10rem] mt-[3rem] xl:mt-[2rem]   2xl:mt-0 w-[100%]  flex justify-center items-center mx-auto rounded-md"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Missiom_vision;
