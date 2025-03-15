import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { CgMenuCheese } from "react-icons/cg";
import { RiCloseFill } from "react-icons/ri";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Testimonial", path: "/testimonial" },
  ];

  return (
    <div className="navbar fixed w-full border-b border-b-gray-300 flex items-center justify-between px-6 md:px-32 py-6 text-lg bg-white">
      <div className="header-left">
        <Link to="/">
          <h1 className="text-2xl md:text-3xl font-semibold">Eccomerce (final)</h1>
        </Link>
      </div>

      <div className="header-middle hidden md:flex items-center gap-6 text-base lg:text-lg">
        {navLinks.map((link) => (
          <Link key={link.name} to={link.path}>
            {link.name}
          </Link>
        ))}
      </div>

      <div className="header-right hidden md:flex items-center gap-6">
        <input
          type="text"
          className="border border-gray-400 rounded-2xl text-black px-4 py-1 outline-none shadow-sm hover:bg-gray-50 text-sm"
          placeholder="Search ..."
        />
        <Link to="/basket">
          <FaCartShopping className="text-2xl" />
        </Link>
      </div>

      <div className="md:hidden flex items-center">
        {isOpen ? (
          <RiCloseFill className="text-3xl cursor-pointer" onClick={() => setIsOpen(false)} />
        ) : (
          <CgMenuCheese className="text-3xl cursor-pointer" onClick={() => setIsOpen(true)} />
        )}
      </div>

      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 right-0 w-2/3 h-screen bg-white shadow-lg flex flex-col items-center gap-6 py-10 text-lg md:hidden"
        >
          <RiCloseFill
            className="text-3xl absolute top-5 right-6 cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-lg"
            >
              {link.name}
            </Link>
          ))}
          <input
            type="text"
            className="border w-40 border-gray-400 rounded-2xl text-black px-4 py-1 outline-none shadow-sm hover:bg-gray-50 text-sm"
            placeholder="Search ..."
          />
          <Link to="/basket" onClick={() => setIsOpen(false)}>
            <FaCartShopping className="text-2xl" />
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
