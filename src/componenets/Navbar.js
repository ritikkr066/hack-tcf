import React, { useState } from 'react';
import {FaBars,FaTimes} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="absolute px-4 py-2 w-full">
      <div className=" flex justify-between items-center">
       
        <div className="hidden md:flex font-semibold space-x-4 text-[20px] ">
          <a href="#" className="text-white hover:text-gray-300">
          About Us
          </a>
          <a href="#" className="text-white hover:text-gray-300">
           Events
          </a>
          <a href="#" className="text-white hover:text-gray-300">
          Sponsers
          </a>
         
        </div>
       
        <div className="md:hidden flex  w-[75vw]  ">
          <button
            onClick={toggleNavbar}
            className="text-white focus:outline-none"
          >
            {/* <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg> */}
            <FaBars size={30}/>
          </button>
        </div>
        <div className="text-white font-bold  text-xl flex flex-col sm:flex-row">
        <img src='/NITPlogo.png' width={80} height={90} alt='img' />
        <img src='/NITPlogo2.png' width={80} height={90} alt='img' />
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden  h-screen absolute  bg-gradient-to-b from-red-900 to-orange-400   w-[70vw] py-2">
           <a href="#" className="block text-center text-white py-2 ">
            About Us
          </a>
          <a href="#" className="block text-center text-white py-2 ">
           Events 
          </a>
          <a href="#" className="block text-center text-white py-2 ">
           Sponsers
          </a>
         
        </div>
      )}
    </nav>
  );
};

export default Navbar;
