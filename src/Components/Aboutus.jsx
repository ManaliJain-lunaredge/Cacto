import React from "react";
import about_us from "../assets/Aboutus/about_us.png";
import tree from "../assets/Aboutus/tree.png";

const Aboutus = () => {
  return (
    <div>
      <div className="2xl:px-[8rem] p-[2rem] pb-0 pt-0" id="about">
        <div className="lg:flex ">
          <div className=" w-full lg:mt-[6rem] xl:mt-0 ">
            <img src={tree} alt="about_us" className="2xl:w-[90%] lg:w-[90%] rounded-xl " />
          </div>
          <div className="2xl:p-[2rem] leading-loose  w-full text-justify">
            <h3 className=" 2xl:text-4xl text-2xl font-bold text-green-700 mb-[2rem] mt-[1rem]">
              About Us
            </h3>
            <p className="mt-[1rem] ">
              Climate change has become one of the biggest challenges for the
              sustainable crop production. Prolonged droughts and
              desertification are among the issues faced by Indian hot arid zone
              where the rural poor and smallholders are most heavily affected.
              People have to survive in these types of conditions; thus their
              crops need to withstand such harsher calamities viz., drought,
              high temperatures and poor soils.
            </p>
            <p className="mt-[1rem]">
              NOPAL Cactus pear can be grown on land where no other crops are
              able to grow; it can be used to restore degraded land. It is the
              only crop that can be relied on when everything else fails. NOPAL
              Cactus plant and its cladode, fruits are popularly known by
              several names such as prickly pear, cactus pear.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
