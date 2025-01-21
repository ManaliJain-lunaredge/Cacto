import React from 'react'
import image from "../assets/Catlogue/image.png";
const Catlogue = () => {
  return (
    <div className='py-[3rem] lg:py-0 'id="catalouge">
         <h3 className=" text-4xl text-center font-bold text-green-700 mb-[4rem] mt-[1rem]">
          Our Catalouge
        </h3>
        <img src={image} className='w-[1200px] md:h-[600px] h-auto  mx-auto flex justify-center items-center'/>
    </div>
  )
}

export default Catlogue