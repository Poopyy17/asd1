import React from "react";
import { FaFacebookF, FaYoutube, FaVideo } from "react-icons/fa";
import rotary from "../assets/Rotary logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-4 border-t border-gray-300 mt-auto">
      <div className="flex flex-col items-center">
        <div className="flex space-x-4 mb-2 mt-2">
          <Link
            to="https://www.facebook.com/RCLPC3830"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2d2958] text-white p-2 rounded-xl hover:bg-blue-700"
          >
            <FaFacebookF size={24} />
          </Link>
          <Link
            to="https://www.youtube.com/@rotarycluboflaspinas5234"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2d2958] text-white p-2 rounded-xl hover:bg-red-700"
          >
            <FaYoutube size={24} />
          </Link>
          <Link
            to="https://www.example.com/your-video-link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2d2958] text-white p-2 rounded-xl hover:bg-gray-700"
          >
            <FaVideo size={24} />
          </Link>
        </div>
        <img
          src={rotary}
          alt="Rotary Logo"
          className="w-30 h-20 mb-4" // Adjust the width and height as needed
        />
        <p className="text-sm text-center">
          © {new Date().getFullYear()} Rotary Club of Las Piñas. Any associated
          logos <br />
          are trademarks, service marks, and/or are registered <br />
          trademarks of Rotary Club of Las Piñas.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
