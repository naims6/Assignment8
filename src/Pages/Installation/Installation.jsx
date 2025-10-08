import React from "react";
import Title from "../../Components/Title";

const Installation = () => {
  return (
    <div className="bg-[#D9D9D9]">
      <div className="container2 pt-16 pb-10">
        <Title
          title="Your Installed Apps"
          description="Explore All Trending Apps on the Market developed by us"
        />
        {/* sorting actions */}
        <div className="flex flex-col lg:flex-row gap-3.5 items-center justify-between pt-10 pb-4">
          <h1 className="text-2xl text-[#001931] font-semibold">
            (1) Apps Found
          </h1>
          <select className="border border-gray-500 rounded-md py-2.5 px-4 outline-none">
            <option value="a">Sort by Size</option>
            <option value="a">Sort by Ratings</option>
            <option value="a">Sort by Nothing</option>
          </select>
        </div>
        {/* installed app */}
        <div className="flex flex-col gap-4">
          {/* first  */}
          <div className="bg-white p-3 rounded-md flex justify-between items-center">
            {/* left side */}
            <div className="flex gap-5">
              <div className="size-20">
                <img
                  className="w-full rounded-md "
                  src="/public/Images/demo-app (1).webp"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="font-semibold text-[22px]">
                  Forest: Focus For PRoductivity
                </h2>
                <div className="flex justify-between items-center">
                  <div className="flex gap-3">
                    <span className="text-[#00D390] flex items-center gap-2 ">
                      {" "}
                      <img
                        src="/public/Images/icon-downloads.png"
                        className="size-4"
                        alt=""
                      />{" "}
                      9M
                    </span>
                    <span className="text-[#FF8811] flex items-center gap-2 ">
                      {" "}
                      <img
                        src="/public/Images/icon-ratings.png"
                        className="size-4"
                        alt=""
                      />{" "}
                      5
                    </span>
                    <span className="text-[#627382]">258 MB</span>
                  </div>
                </div>
              </div>
            </div>
            {/* right side */}
            <div>
              <button className="btn text-white bg-[#00D390]">Unstall</button>
            </div>
          </div>
          {/* second  */}
          <div className="bg-white p-3 rounded-md flex justify-between items-center">
            {/* left side */}
            <div className="flex gap-5">
              <div className="size-20">
                <img
                  className="w-full rounded-md "
                  src="/public/Images/demo-app (1).webp"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="font-semibold text-[22px]">
                  Forest: Focus For PRoductivity
                </h2>
                <div className="flex justify-between items-center">
                  <div className="flex gap-3">
                    <span className="text-[#00D390] flex items-center gap-2 ">
                      {" "}
                      <img
                        src="/public/Images/icon-downloads.png"
                        className="size-4"
                        alt=""
                      />{" "}
                      9M
                    </span>
                    <span className="text-[#FF8811] flex items-center gap-2 ">
                      {" "}
                      <img
                        src="/public/Images/icon-ratings.png"
                        className="size-4"
                        alt=""
                      />{" "}
                      5
                    </span>
                    <span className="text-[#627382]">258 MB</span>
                  </div>
                </div>
              </div>
            </div>
            {/* right side */}
            <div>
              <button className="btn text-white bg-[#00D390]">Unstall</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Installation;
