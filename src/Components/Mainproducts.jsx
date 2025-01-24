import React from "react";
import arrow from "../assets/Cacto/arrow.png";
import seed from "../assets/Products/seed.jpg";

const Mainproducts = () => {
  return (
    <div>
      <section className="bg-gray-50 text-justify">
        <div className="2xl:p-[8rem] p-[2rem] xl:p-[7rem] lg:p-[5rem]" >
          <h3 className=" text-4xl text-center font-bold text-green-700 mb-[4rem] mt-[1rem]">
            Our Product
          </h3>
          <div className="md:flex block items-center gap-8">
            <div>
              <h2 className="text-3xl  font-bold text-gray-900 ">
                High Yield Seeds
              </h2>
              <ul className=" mt-[2rem] 2xl:text-xl md:text-base lg:text-base ">
                <li className="flex leading-loose">
                  <img src={arrow} className="w-4 h-4 mt-3 lg:mt-1 2xl:mt-3 me-2" />
                  We have high-yield cactus seeds developed by genetic selection
                  to obtain large volumes of biomass. They have been tested
                  under extreme rain and temperature conditions.
                </li>
                <li className="flex leading-loose">
                  <img src={arrow} className="w-4 h-4 mt-3 lg:mt-1 2xl:mt-3 me-2" />
                  Yields of 800 - 1,000 tons / hectare / year, usable in the
                  production of energy and food.
                </li>
                <li className="flex leading-loose">
                  {" "}
                  <img src={arrow} className="w-4 h-4 mt-3 lg:mt-1 2xl:mt-3 me-2" />
                  These seeds allow the development of healthy and resistant
                  crops for the production of fruit, energy, and animal feed.
                </li>
                <li className="flex leading-loose">
                  {" "}
                  <img src={arrow} className="w-4 h-4 mt-3 lg:mt-1 2xl:mt-3 me-2" />
                  Each bag contains 1 kg of seeds, approximately 52,000 units
                  with a 60% germination guarantee.
                </li>
              </ul>
              <div className="mt-[4rem]">
                <a
                  href="/contact"
                  className="text-white rounded-md bg-green-700 p-[1rem] hover:text-white font-normal hover:bg-emerald-500"
                >
                  Know More
                  <span className="ml-2 font-bold">&#8594;</span>
                </a>
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <img
                src={seed}
                alt="Product"
                className="object-cover  rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mainproducts;
