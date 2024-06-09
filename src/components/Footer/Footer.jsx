import React from "react";
import { FaInstagram, FaLocationArrow, FaMobileAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-dark dark:text-white text-justify">
      <span id="contact"></span>
      <div className="container mx-auto py-8">
        <div className="flex flex-col items-center md:flex-row md:justify-between text-center md:text-left">
          {/* Company Details */}
          <div className="mb-6 md:mb-0">
            <h1 className="sm:text-3xl text-xl mb-3 font-normal">
              Ovation Auto Detail
            </h1>
            <p className="text-sm mb-3">
              At Ovation Auto Detail, we provide top-notch mobile auto detailing
              services to keep your car looking brand new.
            </p>
          </div>
          {/* Location and Contact */}
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <div className="flex items-center gap-3 mb-3">
              <FaLocationArrow />
              <p>Los Angeles, California</p>
            </div>
            <div className="flex items-center gap-3">
              <FaMobileAlt />
              <p>(818) 625-4488</p>
            </div>
          </div>
          {/* Social Handles */}
          <div className="flex items-center gap-3">
            <a href="https://www.instagram.com/ovationautodetail/">
              <FaInstagram className="text-3xl hover:text-primary duration-300" />
            </a>
            {/* <a href="#">
              <FaFacebook className="text-3xl hover:text-primary duration-300" />
            </a>
            <a href="#">
              <FaLinkedin className="text-3xl hover:text-primary duration-300" />
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
