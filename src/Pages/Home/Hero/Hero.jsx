import React from "react";
import TrustedBy from "./TrustedBy";

const Hero = () => {
  return (
    <div className="bg-gray-100 min-h-screen pt-[80px]">
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
          <a
            className="flex items-center justify-center p-4 py-6 rounded-md gap-2 border border-gray-100 btn font-semibold hover:shadow-md transition-all duration-300 bg-gray-200"
            href="https://play.google.com/store/games?hl=en"
            target="blank"
          >
            <img src="/Images/playstore.png" alt="" />
            <button>Google Play</button>
          </a>

          <a
            className="flex items-center justify-center p-4 py-6 rounded-md gap-2 border border-gray-100 btn font-semibold hover:shadow-md transition duration-300 bg-gray-200"
            href="https://www.apple.com/app-store/"
            target="blank"
          >
            <img src="/Images/herostore.png" alt="" />
            <button>App Store</button>
          </a>
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
