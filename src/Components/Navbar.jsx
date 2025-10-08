import React, { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { Link, NavLink } from "react-router";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  // handle menu click
  const mobileNavRef = useRef();
  const handleMenuClick = () => {
    if (mobileNavRef.current.classList.contains("left-[150%]")) {
      mobileNavRef.current.classList.remove("left-[150%]");
      mobileNavRef.current.classList.add("left-1/2");
    } else {
      mobileNavRef.current.classList.remove("left-1/2");
      mobileNavRef.current.classList.add("left-[150%]");
    }
  };

  const menuList = (
    <>
      <NavLink to="/">
        <li className="py-3 border-b border-gray-500 lg:border-none lg:py-2">
          Home
        </li>
      </NavLink>
      <NavLink to="/apps">
        <li className="py-3 border-b border-gray-500 lg:border-none lg:py-2">
          Apps
        </li>
      </NavLink>
      <NavLink to="/installation">
        <li className="py-2">Installation</li>
      </NavLink>
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm relative">
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
          <ul className="menu menu-horizontal px-1 space-x-7">{menuList}</ul>
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
        <MdMenu
          onClick={handleMenuClick}
          className="lg:hidden cursor-pointer"
          size={24}
        />
      </div>
      <MobileNavbar mobileNavRef={mobileNavRef} menuList={menuList} />
    </div>
  );
};

export default Navbar;
