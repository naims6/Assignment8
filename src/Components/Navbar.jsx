import React from "react";
import { NavLink } from "react-router";

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
      <div className="navbar  container2">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">Hero Io</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuList}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Github</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
