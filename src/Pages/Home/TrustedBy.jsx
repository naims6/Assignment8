import React from "react";

const TrustedBy = () => {
  return (
    <div className="bg-[linear-gradient(45deg,#632EE3,#9F62F2)]">
      <div className="container2 py-20 flex flex-col items-center justify-center">
        <h1 className="text-white text-center text-2xl lg:text-5xl font-semibold pb-10">
          Trusted By Millions, Build For You
        </h1>
        <div className="flex flex-col lg:flex-row  gap-5 w-full max-w-[900px] justify-between text-center items-center">
          {/* first */}
          <div className="text-white border border-gray-600 lg:border-none w-full p-4 rounded-md shadow-md lg:shadow-none">
            <h2 className="font-medium">Total Download</h2>
            <h1 className="font-bold text-4xl lg:text-7xl py-4 pb-2.5">
              29.6M
            </h1>
            <span className="text-sm font-medium">
              21% More Than Last Month
            </span>
          </div>
          {/* two */}
          <div className="text-white border border-gray-600 lg:border-none w-full p-4 rounded-md shadow-md lg:shadow-none">
            <h2 className="font-medium">Total Reviews</h2>
            <h1 className="font-bold text-4xl lg:text-7xl py-4 pb-2.5">906K</h1>
            <span className="text-sm font-medium">
              46% more than last month
            </span>
          </div>
          {/* three */}
          <div className="text-white border border-gray-600 lg:border-none w-full p-4 rounded-md shadow-md lg:shadow-none">
            <h2 className="font-medium">Active Apps</h2>
            <h1 className="font-bold text-4xl lg:text-7xl py-4 pb-2.5">132+</h1>
            <span className="text-sm font-medium">31 more will Launch</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
