import React, { useState, useRef, useEffect } from "react";
import Logo from "../assets/Rotary logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Track active dropdown
  const [hideTimeout, setHideTimeout] = useState(null);
  const mobileMenuRef = useRef(null); // Create ref for the mobile menu

  const handleNav = () => {
    setNav(!nav);
  };

  const handleMouseEnter = (dropdown) => {
    clearTimeout(hideTimeout);
    setActiveDropdown(dropdown); // Set active dropdown
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null); // Close the active dropdown
    }, 50); // Timer delay
    setHideTimeout(timeout);
  };

  const handleScrollToPaulHarris = () => {
    navigate("/major-donors", { state: { scrollTo: "paul-harris-fellows" } });
  };

  // Function to close the mobile menu if clicked outside
  const handleClickOutside = (event) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target)
    ) {
      setNav(false);
    }
  };

  // Set up and clean up event listener
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center justify-between h-20 w-full mx-auto px-4 bg-white shadow-md">
      <Link to="/" className="flex items-center">
        <img
          src={Logo}
          alt="Logo"
          className="h-16 w-auto max-w-[250px] object-contain"
        />
      </Link>
      {/* Desktop Menu */}
      <ul className="hidden md:flex text-gray-400">
        <li className="relative mx-4">
          <Link
            to="/about"
            className="block p-4 rounded-lg hover:text-gray-800 transition-all duration-300"
          >
            About
          </Link>
        </li>

        {/* Members Dropdown */}
        <li
          className="relative mx-4"
          onMouseEnter={() => handleMouseEnter("members")}
          onMouseLeave={handleMouseLeave}
        >
          <span className="flex items-center p-4 rounded-lg hover:text-gray-800 transition-all duration-300 cursor-pointer">
            Members
            <div className="ml-2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-gray-500"></div>
          </span>
          <ul
            className={`absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-20 transition-opacity duration-300 ${
              activeDropdown === "members"
                ? "opacity-100 visible"
                : "opacity-0 invisible"
            }`}
          >
            <li className="px-4 py-2 hover:bg-gray-100 hover:text-gray-800 rounded-lg transition-all duration-300">
              <Link to="/roster-of-members">Roster of Members</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 hover:text-gray-800 rounded-lg transition-all duration-300">
              <Link to="/past-presidents">Past Presidents</Link>
            </li>
          </ul>
        </li>

        {/* Donors Dropdown */}
        <li
          className="relative mx-4"
          onMouseEnter={() => handleMouseEnter("donors")}
          onMouseLeave={handleMouseLeave}
        >
          <span className="flex items-center p-4 rounded-lg hover:text-gray-800 transition-all duration-300 cursor-pointer">
            Donors
            <div className="ml-2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-gray-500"></div>
          </span>
          <ul
            className={`absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-20 transition-opacity duration-300 ${
              activeDropdown === "donors"
                ? "opacity-100 visible"
                : "opacity-0 invisible"
            }`}
          >
            <li className="px-4 py-2 hover:bg-gray-100 hover:text-gray-800 rounded-lg transition-all duration-300">
              <Link to="/major-donors">Major Donors</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 hover:text-gray-800 rounded-lg transition-all duration-300">
              <button onClick={handleScrollToPaulHarris}>
                Paul Harris Fellows
              </button>
            </li>
          </ul>
        </li>

        {/* Projects Dropdown */}
        <li
          className="relative mx-3"
          onMouseEnter={() => handleMouseEnter("projects")}
          onMouseLeave={handleMouseLeave}
        >
          <span className="flex items-center p-4 rounded-lg hover:text-gray-800 transition-all duration-300 cursor-pointer">
            Projects
            <div className="ml-2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-gray-500"></div>
          </span>
          <ul
            className={`absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-20 transition-opacity duration-300 ${
              activeDropdown === "projects"
                ? "opacity-100 visible"
                : "opacity-0 invisible"
            }`}
          >
            <li className="px-4 py-2 hover:bg-gray-100 hover:text-gray-800 rounded-lg transition-all duration-300">
              <Link to="/signature-projects">Signature Projects</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 hover:text-gray-800 rounded-lg transition-all duration-300">
              <Link to="/global-grant-projects">Global Grant Projects</Link>
            </li>
          </ul>
        </li>

        <li className="relative mx-4">
          <Link
            to="/events"
            className="block p-4 rounded-lg hover:text-gray-800 transition-all duration-300"
          >
            Events
          </Link>
        </li>

        <li className="relative mx-4">
          <Link
            to="/sponsors"
            className="block p-4 rounded-lg hover:text-gray-800 transition-all duration-300"
          >
            Sponsors
          </Link>
        </li>

        <li className="relative mx-4">
          <Link
            to="/contact-us"
            className="block w-[110px] bg-blue-600 hover:bg-blue-700 text-white my-2 py-2 rounded-md text-center"
          >
            Contact Us
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Toggle */}
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef} // Attach ref to the mobile menu
        className={`fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-100 bg-white ease-in-out duration-500 ${
          nav ? "translate-x-0" : "-translate-x-full"
        } z-50`}
      >
        <img
          src={Logo}
          alt="Logo"
          className="h-14 w-auto max-w-[150px] object-contain m-2"
        />
        <ul className="p-4">
          <li className="py-4 border-b border-gray-200 hover:text-blue-500 rounded-lg transition-all duration-300">
            <Link to="/about">About</Link>
          </li>
          <li className="py-4 border-b border-gray-200 hover:text-blue-500 rounded-lg transition-all duration-300">
            <Link to="/roster-of-members">Roster of Members</Link>
          </li>
          <li className="py-4 border-b border-gray-200 hover:text-blue-500 rounded-lg transition-all duration-300">
            <Link to="/past-presidents">Past Presidents</Link>
          </li>
          <li className="py-4 border-b border-gray-200 hover:text-blue-500 rounded-lg transition-all duration-300">
            <Link to="/major-donors">Major Donors</Link>
          </li>
          <li className="py-4 border-b border-gray-200 hover:text-blue-500 rounded-lg transition-all duration-300">
            <button onClick={handleScrollToPaulHarris}>
              Paul Harris Fellows
            </button>
          </li>
          <li className="py-4 border-b border-gray-200 hover:text-blue-500 rounded-lg transition-all duration-300">
            <Link to="/signature-projects">Signature Projects</Link>
          </li>
          <li className="py-4 border-b border-gray-200 hover:text-blue-500 rounded-lg transition-all duration-300">
            <Link to="/global-grant-projects">Global Grant Projects</Link>
          </li>
          <li className="py-4 border-b border-gray-200 hover:text-blue-500 rounded-lg transition-all duration-300">
            <Link to="/events">Events</Link>
          </li>
          <li className="py-4 border-b border-gray-200 hover:text-blue-500 rounded-lg transition-all duration-300">
            <Link to="/sponsors">Sponsors</Link>
          </li>
          <li className="py-4 border-b border-gray-200 hover:text-blue-500 rounded-lg transition-all duration-300">
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
        <div className="text-gray-600 py-4 m-2">
          © Rotary Club of Las Piñas All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Navbar;
