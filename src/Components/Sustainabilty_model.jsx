import React from "react";
import image1 from "../assets/Sb_Model/image1.png";
import image2 from "../assets/Sb_Model/image2.png";
import image3 from "../assets/Sb_Model/image3.png";
import image4 from "../assets/Sb_Model/image4.png";
import image5 from "../assets/Sb_Model/image5.png";
import image6 from "../assets/Sb_Model/image6.png";
import image7 from "../assets/Sb_Model/image7.png";
import image8 from "../assets/Sb_Model/image8.png";
import image9 from "../assets/Sb_Model/image9.png";

const Sustainabilty_model = () => {
  return (
    <div
      className="md:p-[1rem] lg:p-[4rem] xl:p-[3rem] 2xl:p-[7rem]  pt-0 2xl:py-[2rem] pb-[1rem]" 
      id="sustainabilitymodel" 
    >
      <h3 className=" text-2xl text-center font-bold text-green-700 mb-[2rem] md:text-4xl mt-[1rem] lg:mb-[5rem]">
        Sustainability Model
      </h3>
      <div className="grid grid-cols-2    gap-8 p-8 lg:p-0 xl:p-8 md:p-16 ">
        <div className="col-span-4 sm:col-span-2 lg:col-span-1 hover:bg-emerald-50 hover:cursor-pointer relative px-5 pt-10 pb-2 flex flex-col justify-start md:w-full  items-center border-2 border-green-900 rounded-xl text-white">
          <span className="absolute -top-6 p-3 border-2 w-[90%]  md:w-[50%] lg:w-[60%] 2xl:w-[30%]  text-sm lg:text-md md:text-xs text-center border-green-900  rounded-full bg-green-900">
            CARBON SEQUESTRATION
          </span>
          <div className="md:flex block">
            <img
              src={image1}
              alt="image1"
              className="rounded-full mx-auto 2xl:w-[20%] md:w-[30%] w-[40%] xl:w-[20%] xl:pb-[1rem] 2xl:pb-[1rem] "
            />
            <p className="py-2 text-center  md:text-lg 2xl:text-xl lg:text-base text-md text-black flex justify-center items-center px-[2rem]">
              Cactus is a natural carbon sink, our acres sequester +8,100 tons
              of CO2/year.
            </p>
          </div>
        </div>
        <div className="col-span-4 sm:col-span-2 hover:bg-emerald-50 hover:cursor-pointer lg:col-span-1 relative px-5 pt-10 pb-2 flex flex-col justify-start items-center border-2 border-green-900 rounded-xl text-white">
          <span className="absolute -top-6 p-3 border-2 w-[90%]  md:w-[50%] lg:w-[60%] 2xl:w-[30%] lg:text-md md:text-xs text-sm text-center border-green-900  rounded-full bg-green-900">
            PERENNIAL CROPS
          </span>
          <div className="md:flex block">
            <img
              src={image2}
              alt="image1"
              className="rounded-full  mx-auto 2xl:w-[20%] md:w-[30%] xl:w-[20%] w-[40%] 2xl:pb-[1rem]"
            />
            <p className="py-2 text-center  md:text-lg 2xl:text-xl lg:text-base text-md text-black flex justify-center items-center px-[2rem]">
              Cactus don't need to be replanted each year. After harvest, they
              automatically grow back.
            </p>
          </div>
        </div>
        <div className="col-span-4 sm:col-span-2 hover:bg-emerald-50 hover:cursor-pointer lg:col-span-1 relative px-5 pt-10 pb-2 flex flex-col justify-start items-center border-2 border-green-900 rounded-xl text-white">
          <span className="absolute -top-6 p-3 border-2 w-[90%]  md:w-[50%] lg:w-[60%] 2xl:w-[30%] lg:text-md md:text-xs  text-sm text-center border-green-900  rounded-full bg-green-900">
            NO IRRIGATION
          </span>
          <div className="md:flex block">
            <img
              src={image3}
              alt="image1"
              className="rounded-full  mx-auto 2xl:w-[20%] md:w-[30%] xl:w-[20%] w-[40%]  pb-[1rem]"
            />
            <p className=" text-center  md:text-lg 2xl:text-xl lg:text-base text-md text-black flex justify-center items-center px-[2rem]">
              Cactus leather stands out as an eco-friendly material that
              conserves water and reduces environmental impact.
            </p>
          </div>
        </div>
        <div className="col-span-4 sm:col-span-2 hover:bg-emerald-50 hover:cursor-pointer lg:col-span-1 relative px-5 pt-10 pb-2 flex flex-col justify-start items-center border-2 border-green-900 rounded-xl text-white">
          <span className="absolute -top-6 p-3 border-2 w-[90%] md:w-[50%] lg:w-[60%] 2xl:w-[30%] lg:text-md md:text-xs text-sm text-center border-green-900  rounded-full bg-green-900">
            NO CHEMICALS
          </span>
          <div className="md:flex block">
            <img
              src={image4}
              alt="image1"
              className="rounded-full  mx-auto 2xl:w-[20%] md:w-[30%] xl:w-[20%] w-[40%] pb-[1rem]"
            />
            <p className=" text-center  md:text-lg 2xl:text-xl lg:text-base text-md text-black flex justify-center items-center px-[2rem]">
              At the farm, we preserve biodiversity as no chemicals are used
              like herbicides or pesticides.
            </p>
          </div>
        </div>
        <div className="col-span-4 sm:col-span-2 hover:bg-emerald-50 hover:cursor-pointer lg:col-span-1 relative px-5 pt-10 pb-2 flex flex-col justify-start items-center border-2 border-green-900 rounded-xl text-white">
          <span className="absolute -top-6 p-3 border-2 w-[90%]  md:w-[50%] lg:w-[60%] 2xl:w-[30%] lg:text-md md:text-xs  text-sm text-center border-green-900  rounded-full bg-green-900">
            ENERGY SAVINGS
          </span>
          <div className="md:flex block">
            <img
              src={image5}
              alt="image1"
              className="rounded-full  mx-auto 2xl:w-[20%] md:w-[30%] xl:w-[20%] w-[40%] pb-[1rem]"
            />
            <p className=" text-center  md:text-lg 2xl:text-xl lg:text-base text-md text-black flex justify-center items-center px-[2rem]">
              Using cactus-derived materials in construction can reduce the need
              for energy-intensive cooling and heating systems.  
            </p>
          </div>
        </div>
        <div className="col-span-4 sm:col-span-2 hover:bg-emerald-50 hover:cursor-pointer lg:col-span-1 relative px-5 pt-10 pb-2 flex flex-col justify-start items-center border-2 border-green-900 rounded-xl text-white">
          <span className="absolute -top-6 p-3 border-2 w-[90%]  md:w-[50%] lg:w-[60%] 2xl:w-[30%] lg:text-md md:text-xs text-sm text-center border-green-900  rounded-full bg-green-900">
            VISIBILITY
          </span>
          <div className="md:flex block">
            <img
              src={image6}
              alt="image1"
              className="rounded-full  mx-auto 2xl:w-[20%] md:w-[30%] xl:w-[20%] w-[40%] pb-[1rem]"
            />
            <p className=" text-center  md:text-lg 2xl:text-xl lg:text-base text-md text-black flex justify-center items-center px-[2rem]">
              Transparency and traceability are a fundamental aspects of our
              sustainable practices.
            </p>
          </div>
        </div>
        <div className="col-span-4 sm:col-span-2 hover:bg-emerald-50 hover:cursor-pointer lg:col-span-1 relative px-5 pt-10 pb-2 flex flex-col justify-start items-center border-2 border-green-900 rounded-xl text-white">
          <span className="absolute -top-6 p-3 border-2 w-[90%]  md:w-[50%] lg:w-[60%] 2xl:w-[30%] text-sm text-center border-green-900  rounded-full bg-green-900">
            CROSS-INDUSTRY COOPERATION
          </span>
          <div className="md:flex block">
            <img
              src={image7}
              alt="image1"
              className="rounded-full  mx-auto 2xl:w-[20%] md:w-[30%] xl:w-[20%] w-[40%] pb-[1rem]"
            />
            <p className=" text-center  md:text-lg 2xl:text-xl lg:text-base text-md text-black flex justify-center items-center px-[2rem]">
              We give cactus its  highest added value benefiting farmers and the
              food industry as well.
            </p>
          </div>
        </div>
        <div className="col-span-4 sm:col-span-2 hover:bg-emerald-50 hover:cursor-pointer lg:col-span-1 relative px-5 pt-10 pb-2 flex flex-col justify-start items-center border-2 border-green-900 rounded-xl text-white">
          <span className="absolute -top-6 p-3 border-2 w-[90%] md:w-[50%] lg:w-[60%] 2xl:w-[30%] text-sm text-center border-green-900  rounded-full bg-green-900">
            Cacto MATERIALS
          </span>
          <div className="md:flex block">
            <img
              src={image8}
              alt="image1"
              className="rounded-full  mx-auto 2xl:w-[20%] md:w-[30%] w-[40%] xl:w-[20%] pb-[1rem]"
            />
            <p className=" text-center  md:text-lg 2xl:text-xl lg:text-base text-md text-black flex justify-center items-center px-[2rem]">
              Our  sustainable materials help companies to accomplish
              environmental goals. 
            </p>
          </div>
        </div>
        <div className="col-span-4 sm:col-span-2  hover:bg-emerald-50 hover:cursor-pointer lg:col-span-1 relative px-5 pt-10 pb-2 flex flex-col justify-start items-center border-2 border-green-900 rounded-xl text-white">
          <span className="absolute -top-6 p-3 border-2 w-[90%]  md:w-[50%] lg:w-[60%] 2xl:w-[30%] text-sm text-center border-green-900  rounded-full bg-green-900">
            AUTOMOTIVE APPLICATIONS
          </span>
          <div className="md:flex block">
            <img
              src={image9}
              alt="image1"
              className="rounded-full  mx-auto 2xl:w-[20%] md:w-[30%]  w-[40%] xl:w-[20%] pb-[1rem]"
            />
            <p className=" text-center md:text-lg 2xl:text-xl lg:text-base text-md text-black flex justify-center items-center px-[2rem]">
              Cactus leather represents a promising sustainable alternative for
              automotive interiors, offering durability. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sustainabilty_model;
