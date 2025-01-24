import React from "react";
import img from "../assets/Cacto/img.png";
import arrow from "../assets/Cacto/arrow.png";
const Cacto = () => {
  return (
    <div>
      <div className="2xl:px-[8rem] p-[2rem] pb-0">
        <div className="md:flex ">
          <div className="2xl:p-[2rem] leading-loose  w-full">
            <h3 className=" 2xl:text-4xl text-2xl font-bold text-green-700 mb-[2rem] mt-[1rem] md:px-[2rem]">
            WHAT IS CACTO ?

            </h3>
            <p className="mt-[1rem] md:text-base 2xl:text-lg md:px-[1rem] pb-[2rem] lg:text-base lg:pb-[1rem]">
            The India's first highly sustainable and environmentally friendly organic material made of vegan cactus, Produce in a large variety of colors, thicknesses and textures. Cacto can exceed the demands of an ever-evolving  industry.

            </p>
            <ul className="md:text-base 2xl:text-lg lg:text-md md:px-[1rem] md:mt-1 lg:text-base">
              <li className="flex"><img src={arrow} className="w-4 h-4 mt-2 me-2"/>Cacto is a patented Nopal cactus – based sustainable material as an alternative to the animals and faux leather.
              </li>
              <li className="flex" ><img src={arrow} className="w-4 h-4 mt-2 me-2"/>It is durable and compliant with the most rigorous quality and environmental standards of the fashion industry.
              </li>
              <li className="flex"> <img src={arrow} className="w-4 h-4 mt-2 me-2"/>Nopal Cacto plantation are perennial, this means that cactuses are not harmed and can live for around 18 years.
              </li>
              
            </ul>
          </div>
          <div className="md:mt-[3rem] ">
                   <img src={img} alt="what_is_cact0" className=" lg:w-[85%] rounded-xl lg:mt-[1rem] lg:ml-[2rem] xl:mt-[0rem] 2xl:mt-0 mt-[2rem] " />
                 </div>
        </div>
      </div>
    </div>
  );
};

export default Cacto;
