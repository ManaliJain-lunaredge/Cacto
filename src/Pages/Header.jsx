import React, { useState } from "react";
import { IoMdCall } from "react-icons/io";
import logo from "../assets/Header/logo.png"
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [active, setActive] = useState("#home"); // Track the active link
  const [menuOpen, setMenuOpen] = useState(false); // Track the menu state

  const nav = [
    { id: 1, name: "Home", href: "#home" },
    { id: 2, name: "About", href: "#about" },
    { id: 3, name: "Products", href: "#product" },
    { id: 4, name: "Catalouge", href: "#Catalouge" },
    { id: 5, name: "Sustainability Model", href: "#sustainabilitymodel" },
  ];

  const handleScroll = (href) => {
    const target = document.querySelector(href);
    if (target) {
      setMenuOpen(false); // Close the menu in mobile view
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActive(href); // Update the active link state
  };

  return (
    <div className="container mx-auto mt-[1rem]">
      <div className=" flex justify-around items-center font-poppins rounded-xl">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <img
            src={logo}
            className="w-20 h-20  md:w-20 md:h-20 2xl:w-32 2xl:h-32 object-contain cursor-pointer mt-[1rem]"
            alt="Logo"
            onClick={() => handleScroll("#home")}
          />
        </div>

        {/* Navigation Links */}
        <div className="lg:block hidden">
          <ul className="flex space-x-20 text-[#1C0D5C] font-medium text-[18px]">
            {nav.map((item) => (
              <li
                key={item.id}
                className={`${
                  active === item.href
                    ? "text-green-600 border-b-2 border-green-600"
                    : "text-black"
                } hover:text-green-600 hover:cursor-pointer`}
                onClick={() => handleScroll(item.href)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex items-center bg-green-600 hover:bg-green-900 hover:cursor-pointer px-[1%] py-[0.3%] rounded-md">
          <IoMdCall className="text-xl text-white" />
          <button
            type="button"
            className="text-white px-4 py-2 rounded-lg text-base font-medium transition"
          >
            Contact Us
          </button>
        </div>

        {/* Hamburger Menu */}
        <div
          className="text-black lg:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoClose size={24} /> : <RxHamburgerMenu size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-[80%] h-full bg-green-100 z-50">
          <div className="flex justify-between items-center p-4  border-black">
            <img src={logo} className="w-32 h-24  object-contain" alt="Logo" />
            <div className="flex items-center bg-green-900 hover:bg-[#1c0d5c] px-4 py-2 rounded-md">
              <IoMdCall className="text-xl text-white" />{" "}
              <button
                type="button"
                className="text-white px-1 py-1 rounded-lg text-sm font-medium"
              >
                Contact Us
              </button>
            </div>
          </div>
          <ul className="flex flex-col text-left items-start text-[#1C0D5C] font-medium text-[18px] px-4 py-6">
            {nav.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer w-full py-2 ${
                  active === item.href ? "text-black" : "text-green-900"
                }`}
                onClick={() => handleScroll(item.href)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
