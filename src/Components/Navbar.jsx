import React, { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { MdClose, MdMenu } from "react-icons/md";
import { Link, NavLink } from "react-router";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // handle menu click
  const mobileNavRef = useRef(null);
  const menuButtonRef = useRef(null);

  const handleMenuClick = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        mobileNavRef.current &&
        !mobileNavRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleNavLinkClick = () => setIsMenuOpen(false);

  const menuList = (
    <>
      <NavLink to="/" onClick={handleNavLinkClick}>
        <li className="flex py-3 border-b border-gray-500 lg:border-none lg:py-2 lg:hover:bg-gray-200/50 hover:bg-gray-100/20 rounded-md transition-all duration-300 px-5 lg:text-gray-900 font-semibold text-gray-200">
          Home
        </li>
      </NavLink>
      <NavLink to="/apps" onClick={handleNavLinkClick}>
        <li className="py-3 border-b border-gray-500 lg:border-none lg:py-2 lg:hover:bg-gray-200/50 hover:bg-gray-100/20 rounded-md transition-all duration-200 px-5 lg:text-gray-900 font-semibold text-gray-200">
          Apps
        </li>
      </NavLink>
      <NavLink to="/installation" onClick={handleNavLinkClick}>
        <li className="py-2 lg:hover:bg-gray-200/50 hover:bg-gray-100/20 rounded-md transition-all duration-300 px-5 lg:text-gray-900 font-semibold text-gray-200">
          Installation
        </li>
      </NavLink>
    </>
  );

  return (
    <div className="bg-base-100/50 shadow-sm fixed w-full backdrop-blur-md z-50">
      <div className="flex w-full justify-between items-center min-h-[4rem] container2">
        <Link to="/" className="navbar-start cursor-pointer">
          <figure className="mr-0.5">
            <img
              className="w-12 object-cover"
              src="/Images/logo.png"
              alt="navbar logo"
            />
          </figure>
          <span className="text-xl font-bold gradient-text">HERO.IO</span>
        </Link>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2">{menuList}</ul>
        </div>
        <div className="navbar-end hidden lg:inline-flex">
          <a
            href="https://github.com/naims6"
            target="blank"
            className="btn [background:linear-gradient(30deg,#632EE3,#9F62F2)] text-white font-medium"
          >
            <FaGithub /> <span>Contribute</span>
          </a>
        </div>
        <span ref={menuButtonRef}>
          {isMenuOpen ? (
            <MdClose
              onClick={handleMenuClick}
              className="lg:hidden cursor-pointer"
              size={24}
            />
          ) : (
            <span>
              <MdMenu
                onClick={handleMenuClick}
                className="lg:hidden cursor-pointer"
                size={24}
              />
            </span>
          )}
        </span>
      </div>
      <MobileNavbar
        mobileNavRef={mobileNavRef}
        menuList={menuList}
        isMenuOpen={isMenuOpen}
      />
    </div>
  );
};

export default Navbar;
