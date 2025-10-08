import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const menuList = (
    <>
      <NavLink to="/">
        <li>
          <a>Home</a>
        </li>
      </NavLink>
      <NavLink to="/apps">
        <li>
          <a>Apps</a>
        </li>
      </NavLink>
      <NavLink to="/installation">
        <li>
          <a>Installation</a>
        </li>
      </NavLink>
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm">
      <div className="flex w-full items-center min-h-[4rem] container2">
        <Link to="/" className="navbar-start">
          <figure className="mr-0.5">
            <img
              className="w-12 object-cover"
              src="/Images/logo.png"
              alt="navbar logo"
            />
          </figure>
          <a className="text-xl font-bold gradient-text">HERO.IO</a>
        </Link>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuList}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn [background:linear-gradient(30deg,#632EE3,#9F62F2)] text-white font-medium">
            <FaGithub /> <span>Contribute</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
