import React from "react";
import TrustedBy from "./TrustedBy";

const Hero = () => {
  return (
    <div className="bg-[#container2] min-h-screen">
      <div className="container2 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold md:text-7xl w-full text-[#001931] pt-10 lg:pt-20 pb-6 lg:pb-4">
          <span>We Build</span>{" "}
          <span className="block mt-2">
            <span className=" gradient-text">Productive</span> Apps
          </span>
        </h1>
        <p className="text-[#627382] text-sm md:text-base max-w-[750px] w-full pb-10">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="flex gap-2 pb-10">
          <button className="flex items-center justify-center p-4 py-5 rounded-md gap-2 border border-gray-100 btn font-semibold hover:shadow-md transition-all duration-300">
            <img src="/Images/playstore.png" alt="" />
            <span>Google Play</span>
          </button>
          <button className="flex items-center justify-center p-4 py-5 rounded-md gap-2 border border-gray-100 btn font-semibold hover:shadow-md transition duration-300">
            <img src="/Images/herostore.png" alt="" />
            <span>App Store</span>
          </button>
        </div>
        <div>
          <img src="/Images/hero.png" alt="" />
        </div>
      </div>
      <TrustedBy />
    </div>
  );
};

export default Hero;
