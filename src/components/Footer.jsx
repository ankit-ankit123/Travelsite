import React from "react";
import logo from '../assets/logo.jpg';
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";

const Footer = ({ className = "" }) => {
  return (
    <footer className={`bg-gray-400 text-center text-sm text-gray-600 py-6 mt-6 shadow-inner ${className}`}>
      <div className="container mx-auto px-4 flex flex-col lg:flex-row flex-wrap justify-between items-start gap-8">
        {/* Logo and description */}
        <div className="w-full lg:w-1/3 text-left">
          <Link to="/">
            <img src={logo} className="rounded-full w-20 h-20 mb-4" alt="Logo" />
          </Link>
          <p className="font-semibold text-[16px] text-black">
            At TravelSite, we connect you to unforgettable adventures worldwide.
            Contact us at <span className="underline">support@TravelSite.com</span> | +1-800-TRAVEL.
            Follow us on Facebook, Instagram, YouTube for the latest deals. Your journey is our passion
            lets explore the world together! Book with confidence, flexible cancellations, 24/7 support.
            Find inspiration now.
          </p>
        </div>

        {/* Quick Links */}
        <div className="w-full sm:w-1/2 lg:w-1/4">
          <h1 className="font-semibold text-xl text-black mb-2">Quick Links</h1>
          <ul className="font-bold text-[18px] text-black space-y-2">
            <li><Link to="/Blog" className="hover:underline hover:text-pink-300">Blogs</Link></li>
            <li><Link to="/hotel" className="hover:underline hover:text-pink-300">Hotels</Link></li>
            <li><Link to="/about" className="hover:underline hover:text-pink-300">About</Link></li>
          </ul>
        </div>

        {/* Newsletter and Social Media */}
        <div className="w-full lg:w-1/3 text-left">
          <h1 className="font-bold text-black text-2xl mb-2">Subscribe to Newsletter</h1>
          <input
            placeholder="Enter email"
            className="bg-white px-4 py-2 rounded-md w-full mt-4 mb-4"
          />
          <div className="flex gap-4">
            <FaFacebook size={30} className="cursor-pointer hover:text-blue-700" />
            <RiInstagramLine size={30} className="cursor-pointer hover:text-pink-500" />
            <FaYoutube size={30} className="cursor-pointer hover:text-red-600" />
          </div>
        </div>
      </div>

      <p className="text-center mt-6 text-black font-medium">
         {new Date().getFullYear()} TravelSite. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
