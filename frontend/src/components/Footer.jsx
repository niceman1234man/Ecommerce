import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold">e-Shop</h3>
          <p className="mt-4">
            your one step for all your needs. shop with use and experience the
            best online shopping experience.
          </p>
        </div>
        <div className="flex flex-col md:items-center">
          <h4 className="text-xl font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2">
            <li>
              <Link className="hover:underline" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="/shop">
                Shop
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold">Follow Us</h4>
          <div className="flex space-x-4 mt-4">
            <a href="" className="hover:text-gray-400">
              <FaFacebook />
            </a>
            <a href="" className="hover:text-gray-400">
              <FaGithub />
            </a>
            <a href="" className="hover:text-gray-400">
              <FaLinkedin />
            </a>
            <a href="" className="hover:text-gray-400">
              <FaTwitter />
            </a>
          </div>
          <form className="flex items-center justify-center mt-8">
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter Email"
              className="w-full p-2 rounded-l-lg  bg-gray-800 border border-gray-600"
            />
            <button className="bg-red-600 text-whitepx-4 py-2 rounded-r-lg ">
              subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4">
        <div className="container flex flex-col md:flex-row justify-between items-center mx-auto ">
          <p>&copy; 2025 e-shop all rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="" className="hover:underline">policy privacy</a>
            <a href="" className="hover:underline">Terms & conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
