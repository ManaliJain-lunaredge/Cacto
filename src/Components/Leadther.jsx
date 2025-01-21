import React from "react";
import arrow from "../assets/Cacto/arrow.png";

const Leadther = () => {
  return (
    <div className="md:px-[4rem]  2xl:px-[10rem] pt-0 p-[2rem] pb-0">
      <h3 className=" 2xl:text-4xl text-xl text-center font-bold text-green-700 mb-[4rem] mt-[1rem]">
        ANIMALS LEATHER REPLACEMENT BY CACTUS VEGAN
      </h3>
      <ul className="leading-loose text-xl">
        <li className="flex">
          <img src={arrow} className="w-4 h-4 mt-4 me-2" />
          There are so many fashion brands on the market making gorgeous vegan leather goods that are totally animal-free — but most of those brands use plastic-derived materials to achieve the look. However, a new brand out of called Cactus is shaking things up by turning Nopal cactus leaves into organic, all-natural, cruelty-free leather. Cactus is the first cactus-based leather on the market, and the material has the potential to make the vegan leather industry much more sustainable.

        </li>
        <li className="flex">
          <img src={arrow} className="w-4 h-4 mt-4 me-2" />
          The innovative brand Cactus, at the International Leather Fair Lineapelle 2019 in Milan . And then, Cactus showed at Raw Assembly, a sustainable raw materials sourcing event in Australia. Vogue Australia reported that Cactus had the most buzz of all companies at the entire event — so the brand is certainly one to watch out for. 

        </li>
        <li className="flex">
          {" "}
          <img src={arrow} className="w-4 h-4 mt-4 me-2" />
          We came up with the idea for Cactus after learning about the plastic pollution crisis. As explained by Fashion United, the two innovators were intrigued by the nopal cactus because it grows in abundance throughout Nashik Maharashtra. and does not require any water to grow. They spent the past two years doing research and development, and finally figured out how to turn Nopal cactus leaves into the perfect cactus-based leather.
        </li>
        <li className="flex"> <img src={arrow} className="w-4 h-4 mt-4 me-2" />Cacto's cactus leather is organic, partially biodegradable, soft, durable, and high enough quality that it can be used to make clothing, accessories, furniture, and even car interiors. “After two years of research and development, we managed to produce a suitable material that complies with the features and technical/mechanical specifications required by those industries that use animal or synthetic leather. 
        </li>
      </ul>
    </div>
  );
};

export default Leadther;
