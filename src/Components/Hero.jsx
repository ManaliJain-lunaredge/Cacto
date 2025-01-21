import React from "react";
import image from "../assets/Hero/image.png";
import mobile from "../assets/Hero/mobile.png";
const Hero = () => {
  return (
    <div>
      <div
        className="lg:block hidden bg-cover md:bg-center  bg-right bg-no-repeat  2xl:px-[14rem] p-[2rem] lg:p-[6rem] xl:p-[12rem] pb-0 "
        style={{ backgroundImage: `url(${image})` }}
      >
        <div>
          <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-[#3A6726] from-[0%] to-[#69B745] to-[38%] md:text-3xl font-semibold 2xl:text-6xl lg:text-4xl xl:text-5xl text-2xl mt-[7rem] 2xl:mt-[4rem] leading-tight font-serif 2xl:w-[50%] w-[100%]">
            Vegan Cactus Alternative to Animal Leather
          </h3>
          <h5 className="2xl:w-[30%] mt-[3rem] 2xl:text-xl lg:text-3xl md:text-2xl">
            Cacto is a patented Nopal cactus – based sustainable material as an
            alternative to the animals and faux leather
          </h5>
          <div>
            <button className=" text-white bg-gradient-to-l from-[#3A6726] to-[#69B745] hover:bg-black rounded-md cursor-pointer 2xl:w-[15rem]  w-[8rem] h-[3rem] 2xl:h-[4rem] mt-[5rem] 2xl:text-2xl mb-[1rem] ">
              Discover More
            </button>
          </div>
        </div>
      </div>
      <div className="md:hidden block p-[2rem] pb-0">
        <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-[#3A6726] from-[0%] to-[#69B745] to-[38%] md:text-3xl font-semibold 2xl:text-6xl lg:text-4xl xl:text-5xl text-2xl mt-[1rem] 2xl:mt-[4rem] leading-tight font-serif 2xl:w-[50%] w-[100%]">
          Vegan Cactus Alternative to Animal Leather
        </h3>
        <h5 className="2xl:w-[30%] mt-[3rem] 2xl:text-xl lg:text-3xl md:text-2xl">
          Cacto is a patented Nopal cactus – based sustainable material as an
          alternative to the animals and faux leather
        </h5>
        <div>
          <button className=" text-white bg-gradient-to-l from-[#3A6726] to-[#69B745] hover:bg-black rounded-md cursor-pointer 2xl:w-[15rem]  w-[8rem] h-[3rem] 2xl:h-[4rem] mt-[5rem] 2xl:text-2xl mb-[1rem] ">
            Discover More
          </button>
        </div>
        <img src={mobile} className="w-[100%] mx-auto pb-0" />
      </div>
    </div>
  );
};

export default Hero;
