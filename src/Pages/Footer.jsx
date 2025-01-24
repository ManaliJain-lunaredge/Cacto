import React from "react";
import { FaPinterest } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter,FaLinkedin } from "react-icons/fa";
import footer from "../assets/Footer/footer.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="bg-black p-7 w-full mx-auto">
        <div className="flex justify-center items-center space-x-4 p-7">
          <div className="w-10 h-10 rounded-full bg-green-900 text-white p-3 hover:bg-emerald-500 hover:cursor-pointer">
            <a href="https://www.linkedin.com/company/the-cacto/">
              <FaLinkedin />
            </a>
          </div>
          <div className="w-10 h-10 rounded-full bg-green-900 text-white p-3 hover:bg-emerald-500 hover:cursor-pointer">
            <a href="">
            
              <FaFacebookF />
            </a>
          </div>
          <div className="w-10 h-10 rounded-full bg-green-900 text-white p-3 hover:bg-emerald-500 hover:cursor-pointer">
            <a href="https://www.instagram.com/cacto.agrow2k23?utm_source=qr&igsh=MThwbXNxNnJrNHNwZg==">
              <FaInstagram />
            </a>
          </div>
          <div className="w-10 h-10 rounded-full bg-green-900 text-white p-3 hover:bg-emerald-500 hover:cursor-pointer">
            <a href="">
            
              <FaTwitter />
            </a>
          </div>
        </div>
        <div>
          <ul className="md:flex inline-block justify-center md:text-sm items-center mt-2 gap-5 text-white font-semibold">
            <li>
              <Link to="/" className="cursor-pointer hover:text-green-600 2xl:text-xl">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="cursor-pointer hover:text-green-600 2xl:text-xl">
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="cursor-pointer hover:text-green-600 2xl:text-xl"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/catalouge"
                className="cursor-pointer hover:text-green-600 2xl:text-xl"
              >
               Catalouge
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="cursor-pointer hover:text-green-600 2xl:text-xl"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/sustainabilitymodel"
                className="cursor-pointer hover:text-green-600 2xl:text-xl"
              >
                Sustainability Model
              </Link>
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
          2025@ Cacto Agrow Industries Private Limited
        </div>
      </div>
    </div>
  );
};

export default Footer;
