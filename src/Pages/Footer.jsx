import React from "react";
import { FaPinterest } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import footer from "../assets/Footer/footer.png";

const Footer = () => {
  return (
    <div>
      <div className="bg-black p-7 w-full mx-auto">
        <div className="flex justify-center items-center space-x-4 p-7">
          <div className="w-10 h-10 rounded-full bg-green-900 text-white p-3">
            <a href="">
              <FaPinterest />
            </a>
          </div>
          <div className="w-10 h-10 rounded-full bg-green-900 text-white p-3">
            <a href="">
            
              <FaFacebookF />
            </a>
          </div>
          <div className="w-10 h-10 rounded-full bg-green-900 text-white p-3">
            <a href="">
              <FaInstagram />
            </a>
          </div>
          <div className="w-10 h-10 rounded-full bg-green-900 text-white p-3">
            <a href="">
            
              <FaTwitter />
            </a>
          </div>
        </div>
        <div>
          <ul className="md:flex block justify-center items-center mt-2 gap-4 text-white font-semibold">
            <li>
              <a href="#home" className="cursor-pointer hover:text-green-900">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="cursor-pointer hover:text-green-900">
                About Us
              </a>
            </li>
            <li>
              <a
                href="#products"
                className="cursor-pointer hover:text-green-900"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#sustainability"
                className="cursor-pointer hover:text-green-900"
              >
                Sustainability Model
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="relative  text-center p-5 text-white  bg-cover bg-center bg-no-repeat h-16 "
        style={{ backgroundImage: `url(${footer})` }}
      >
        <div className="absolute inset-0 bg-green-900 bg-opacity-95"></div>

        <div className="relative z-10 ">
          2024@ Cacto Agrow Industries Private Limited
        </div>
      </div>
    </div>
  );
};

export default Footer;
