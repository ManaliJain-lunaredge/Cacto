import React from "react";
import footwear from "../assets/Products/footwear.jpg"
import sports from "../assets/Products/sports.jpg"
import appreal from "../assets/Products/appreal.png"
import interior from "../assets/Products/interior.jpg"
import bag from "../assets/Products/bag.jpg"
import automative from "../assets/Products/automative.jpg"

const Products = () => {
    const list = [
        {
          id: 1,
          img: bag,
          name: "Handbag & Accessories",
          description:
            "Cacto created a material that meets all environmental and performance standards, allowing designers to create beautiful accessories with elegant, long-lasting materials, that are reshaping fashion, and achieving a new level of responsible luxury.",
        },
        {
          id: 2,
          img: footwear,
          name: "Footwear",
          description:
            "Our materials adhere to the highest performance standards and environmental criteria, allowing designers to create great footwear styles with attractive, long-lasting materials.",
        },
        {
          id: 3,
          img: appreal,
          name: "Apparel",
          description:
            "There is no compromise when it comes to sustainability, that is why Cacto created a material that meets all environmental and performance standards, allowing designers to create beautiful collections with elegant, long-lasting materials.",
        },
      
      ];

      const list2=[
        {
            id: 4,
            img: interior,
            name: "Interiors",
            description:
              "Studies show that interior materials directly affect human health, and Cacto provides a safe alternative to other synthetic PU leather options because our material is free of toxic chemicals, phthalates,  formaldehyde and PVC. Other unique features of our patented cactus formula make our material strong, durable, and fresh.",
          },
          {
            id: 5,
            img: sports,
            name: "Sports",
            description:
              "Studies show that interior materials directly affect human health, and Cacto provides a safe alternative to other synthetic PU leather options because our material is free of toxic chemicals, phthalates,  formaldehyde and PVC. Other unique features of our patented cactus formula make our material strong, durable.",
          },
          {
            id: 6,
            img: automative,
            name: "Automotive",
            description:
              "Abrasion-resistant and slash-resistant materials are engineered to withstand wear and protect against cuts, respectively. These materials are crucial in various industries, including law enforcement, transportation, and manufacturing, to ensure safety and durability.",
          },
      ]
      
      console.log(list);
      
  return (
    <div className="" id="products">
      <div className="w-full mx-auto 2xl:p-[10rem] 2xl:pt-[2rem] 2xl:pb-[2rem] lg:p-[5rem] md:p-[2rem] pt-0 pb-[4rem]">
        <h3 className=" text-4xl text-center font-bold text-green-700 mb-[4rem] mt-[1rem]">
          Our Products
        </h3>
        <ul className="md:flex block justify-around mb-[3rem] 2xl:p-0 p-[2rem] md:p-[0rem] pt-0 ">
          {list.map((item, i) => (
            <div class="card md:w-[30%] w-[100%] hover:cursor-pointer mb-[1.5rem]">
              <div
                class="card__content text-center relative p-20 transition-transform duration-1000 text-white font-bold 2xl:h-[330px] md:h-[400px] h-[300px]  "
                key={i}
              >
                <div class="card__front absolute top-0 bottom-0 right-0 left-0 p-8 bg-cover  bg-center bg-no-repeat flex items-center justify-center rounded-xl opacity-80" style={{ backgroundImage: `url(${item.img})` }} >
                  <h2 className="capitalize md:text-3xl text-lg text-black bg-slate-100 p-2 rounded-md">{item.name}</h2>
                </div>
                <div class="card__back absolute top-0 bottom-0 right-0 text-xs left-0 p-8 bg-green-900 md:text-sm md:font-normal flex items-center justify-center rounded-xl">
                  <h2>{item.description}</h2>
                </div>
              </div>
            </div>
          ))}
        </ul>
        <ul className="md:flex block justify-around 2xl:p-0 p-[2rem] md:p-[0rem] pt-0 ">
          {list2.map((item, i) => (
            <div class="card md:w-[30%] w-[100%]  hover:cursor-pointer mb-[1.5rem]">
              <div
                class="card__content text-center relative p-20 transition-transform duration-1000 text-white font-bold 2xl:h-[330px] md:h-[400px] h-[300px]"
                key={i}
              >
                <div class="card__front absolute top-0 bottom-0 right-0 left-0 p-8 bg-cover bg-center bg-no-repeat flex items-center justify-center rounded-xl opacity-80"  style={{ backgroundImage: `url(${item.img})` }}>
                  <h2 className="capitalize md:text-3xl text-lg text-black bg-slate-100 p-2 rounded-md">{item.name}</h2>
                </div>
                <div class="card__back absolute top-0 bottom-0 md:text-sm  text-xs md:font-normal  right-0 left-0 p-8 bg-green-900 flex items-center justify-center rounded-xl">
                  <h2>{item.description}</h2>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Products;
