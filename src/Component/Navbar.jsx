import React, { useState } from "react";
import logo from "../assets/logo2-1.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
        
        className="bg-[#6900b5] dark:bg-gray-900 font-custom py-3 px-4 md:px-12 lg:px-44 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600"
      >
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between">
          <img
            src={logo}
            className="md:max-w-[40%] h-[60px] md:h-[78px] max-w-[58%]"
            alt="Flowbite Logo"
          />
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="bg-white md:block hidden text-[#6900b5] py-2 rounded-full  text-lg px-4"
            >
              Buy Now
            </button>

            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isMenuOpen ? "" : "hidden"
            }`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col text-[16px] p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-[#6900b5] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[#6900b5] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  onClick={() => {
                    
                    const Element = document.getElementById("home");
                    if (Element) {
                      Element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="block py-2 px-3 cursor-pointer text-white rounded hover:bg-transparent  hover:text-[#855ff0] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                 
                    const Element = document.getElementById("about");
                    if (Element) {
                      Element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="block py-2 px-3 cursor-pointer text-white rounded hover:bg-transparent  hover:text-[#855ff0] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    
                    const Element = document.getElementById("buy");
                    if (Element) {
                      Element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="block py-2 px-3 cursor-pointer text-white rounded  hover:bg-transparent  hover:text-[#855ff0] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  How to Buy
                </a>
              </li>
              <button
                type="button"
                className="bg-white block md:hidden text-[#6900b5] py-2 rounded-full  text-lg px-4"
              >
                Buy Now
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
