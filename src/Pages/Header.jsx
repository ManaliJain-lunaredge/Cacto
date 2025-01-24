import React, { useState } from "react";
import { IoMdCall } from "react-icons/io";
import logo from "../assets/Header/logo.png"
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState("/"); // Track the active link
  const [menuOpen, setMenuOpen] = useState(false); // Track the menu state
  

  const nav = [
    { id: 1, name: "Home", to: "/" },
    { id: 2, name: "About", to: "/about" },
    { id: 3, name: "Products", to: "/products" },
    { id: 4, name: "Catalouge", to: "/catalouge" },
    { id: 5, name: "Services", to: "/services" },
    { id: 6, name: "Sustainability Model", to: "/sustainabilitymodel" },
  ];

  const handleScroll = (to) => {
    setActive(to); // Update the active link state
    setMenuOpen(false); // Close the menu in mobile view
  };
  
  return (
    <div className="container mx-auto mt-[1rem]">
      <div className=" flex justify-between px-[2rem] md:px-[2rem] items-center font-poppins rounded-xl">
        {/* Logo Section */}
        <div className="flex-shrink-0">
         <Link to="/"> <img
            src={logo}
            className="w-34 h-24  md:w-20 md:h-20 2xl:w-32 2xl:h-32 object-contain cursor-pointer mt-[1rem]"
            alt="Logo"
            
          /></Link>
        </div>

        {/* Navigation Links */}
        <div className="lg:block hidden">
          <ul className="flex space-x-20 2xl:space-x-20 lg:space-x-8 text-[#1C0D5C] font-medium text-[18px]">
            {nav.map((item) => (
              <li
              key={item.id}
              >

<Link
  to={`${item.to}`}
  className={`${
    active === item.to ? "text-green-600 border-green-600" : "text-black"
  } hover:text-green-600 hover:cursor-pointer`}
  onClick={() => handleScroll(item.to)} // Pass item.to to update the active state
>
  {item.name}
</Link>

              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="lg:flex  hidden items-center bg-green-600 hover:bg-green-900 hover:cursor-pointer px-[1%] py-[0.3%] rounded-md">
          <IoMdCall className="text-xl text-white" />
          <a
           href="/contact"
            className="text-white px-4 py-2 rounded-lg text-base font-medium transition"
          >
            Contact Us
          </a>
        </div>

        {/* Hamburger Menu */}
        <div
          className="text-black lg:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "" : <RxHamburgerMenu size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-[100%] h-full bg-green-100 z-50">
          <div className="flex justify-between items-center p-4  border-black">
            <img src={logo} className="w-20 h-20  object-contain" alt="Logo" />
            {/* <div className="flex items-center bg-green-900 hover:bg-[#1c0d5c] px-4 py-2 rounded-md">
              <IoMdCall className="text-xl text-white" />{" "}
              <button
                type="button"
                className="text-white px-1 py-1 rounded-lg text-sm font-medium"
              >
                Contact Us
              </button>
            </div> */}
             <div
          className="text-black lg:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoClose size={24} /> : <RxHamburgerMenu size={24} />}
        </div>
          </div>
          <ul className="flex  gap-5 flex-col text-left items-start text-[#1C0D5C] font-medium text-[18px] px-[2rem]  py-6">
          {nav.map((item) => (
              <li
              key={item.id}
              >

<Link
  to={`${item.to}`}
  className={`${
    active === item.to ? "text-green-600 border-green-600" : "text-black"
  } hover:text-green-600 hover:cursor-pointer`}
  onClick={() => handleScroll(item.to)} // Pass item.to to update the active state
>
  {item.name}
</Link>

              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
