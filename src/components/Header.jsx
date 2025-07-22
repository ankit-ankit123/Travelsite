import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import logo from '../assets/logo.jpg';

const Header = ({ className = "" }) => {
  return (
    <header className={`bg-blue-400 text-white p-4 shadow w-full ${className}`}>
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Logo */}
        <div className="flex justify-between items-center w-full sm:w-auto">
          <Link to="/">
            <img src={logo} className="rounded-full w-10 h-10 ml-2 sm:ml-6" alt="Logo" />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <Link to="/blogpost" className="hover:underline">Blogs</Link>
          <Link to="/hotel" className="hover:underline">Hotels</Link>

          <Link to="/wishlist" className="flex items-center gap-1 hover:underline">
            Wishlist
          </Link>

          <Link to="/about" className="hover:underline sm:mr-2">About</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
