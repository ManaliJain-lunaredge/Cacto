import React,{useState,useEffect} from "react";
import about_us from "../assets/Aboutus/about_us.png";
import tree from "../assets/Aboutus/tree.png";


const Aboutus = () => {
  const [isAbout, setIsAbout] = useState(false);

 
  useEffect(() => {
    const pathname = window.location.pathname;
 
    if (pathname === '/about') {
      setIsAbout(true);
      
    } else if (pathname === '/') {
      
      setIsAbout(false);
    }
  }, []);
  return (
    <div  className={`${isAbout ? "2xl:h-[60vh] h-[150vh] py-[5rem]" : ""}`}>
      <div className="2xl:px-[8rem] p-[2rem] pb-0 pt-0" id="about">
        <div className="md:flex ">
          <div className=" md:mt-[10rem] xl:mt-[0rem] lg:mt-[3rem] 2xl:mt-0">
            <img
              src={tree}
              alt="about_us"
              className=" rounded-xl "
            />
          </div>
          <div  className="2xl:p-[2rem] leading-loose  w-full ">
            <h3  className=" 2xl:text-4xl text-2xl font-bold text-green-700 mb-[2rem] mt-[1rem] 2xl:mt-0  md:px-[2rem]">
              About Us
            </h3>
            <p className="mt-[1rem] md:text-base lg:text-base 2xl:text-lg md:px-[2rem]">
              We produce green methane. We use the nopal (opuntia ficus),
              prickly pear, cactus, prickly pear, prickly pear, to generate
              high-density, nutritionally balanced crops for biomass production.
              This raw material is used for energy and food production,
              obtaining Biogas and electricity. Its simple implementation, low
              cost and pollutant-free energy production is an ecological and
              profitable response to the demand for food and energy. The nopal,
              prickly pear or prickly pear has extraordinary characteristics for
              large-scale biomass production, it is a plant mainly from arid
              areas, however, its development is possible from the south of
              Spain to Cape Town in South Africa.
            </p>
            <p className="mt-[1rem] md:text-base lg:text-base 2xl:text-lg md:px-[2rem] md:pt-0">
              It can grow in areas where other crops are not possible. Even in
              rainy places up to 1200 mm. The cactus for energy is a crop
              developed by genetic selection for high biomass productivity,
              which allows Delivering the equivalent of 25,000 liters of Diesel
              / hectare / year.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
