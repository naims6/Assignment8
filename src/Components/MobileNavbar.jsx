import React from "react";
import { FaGithub } from "react-icons/fa";

const MobileNavbar = ({ menuList, mobileNavRef }) => {
  return (
    <div
      ref={mobileNavRef}
      className="lg:hidden absolute top-full left-[150%] -translate-x-1/2 w-9/10 border border-gray-700 rounded-md bg-gray-800/90 backdrop-blur-md p-5 text-white transition-all duration-300"
    >
      <ul className="space-y-6 ">{menuList}</ul>
      <div className=" block lg:hidden">
        <a className="btn mt-3 [background:linear-gradient(30deg,#632EE3,#9F62F2)] text-white font-medium">
          <FaGithub /> <span>Contribute</span>
        </a>
      </div>
    </div>
  );
};

export default MobileNavbar;
