import React, { useState } from "react";
import { useParams } from "react-router";
import { useYourData } from "../../Hooks/useYourData";
import RatingChart from "./RatingChart";

const AppDetails = () => {
  const [isInstalled, setIsInstalled] = useState(false);
  const [allApps] = useYourData();
  const { id } = useParams();

  const matchedApp = allApps.find((app) => app.id == id) || {};

  const {
    companyName,
    description,
    downloads,
    title,
    image,
    ratingAvg,
    ratings,
    reviews,
    size,
  } = matchedApp;

  return (
    <div className="bg-base-200 pt-16">
      <div className="flex gap-12 container2 flex-col lg:flex-row">
        <figure className="max-w-sm rounded-lg">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
        </figure>
        <div className="w-full flex flex-col justify-between">
          <div className="border-b border-gray-300 pb-2">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="py-3 text-[#627382]">
              Developed by :{" "}
              <span className="text-[#9F62F2]">{companyName}</span>
            </p>
          </div>
          {/* app state */}
          <div className="flex flex-col lg:flex-row gap-5 mt-5">
            {/* first  */}
            <div className="flex flex-col items-center gap-1 border border-gray-300 shadow p-3 rounded-md text-center">
              <img className="size-8" src="/Images/icon-downloads.png" />
              <span className="text-[#001931] font-extrabold">Downloads</span>
              <h1 className="font-bold text-5xl text-[#001931]">
                {downloads}M
              </h1>
            </div>
            {/* second */}
            <div className="flex flex-col items-center gap-1 border border-gray-300 shadow p-3 rounded-md">
              <img className="size-8" src="/Images/icon-ratings.png" />
              <span className="text-[#001931] font-extrabold">
                Average Ratings
              </span>
              <h1 className="font-bold text-5xl text-[#001931]">{ratingAvg}</h1>
            </div>
            {/* third */}
            <div className="flex flex-col items-center gap-1 border border-gray-300 shadow p-3 rounded-md">
              <img className="size-8" src="/Images/icon-review.png" />
              <span className="text-[#001931] font-extrabold">Reviews</span>
              <h1 className="font-bold text-5xl text-[#001931]">{reviews}</h1>
            </div>
          </div>
          {/* install button */}
          <div className="-translate-y-2.5 pt-10 lg:pt-0 text-center lg:text-left">
            <button
              onClick={() => setIsInstalled(true)}
              className="btn py-3 px-5 text-white bg-[#00D390]"
            >
              {isInstalled ? `Installed` : `Install Now (${size}Mb)`}
            </button>
          </div>
        </div>
      </div>
      {/* ratings recharts and descripion */}
      <div className="container2 mt-10">
        <RatingChart ratings={ratings} />
        {/*app description  */}
        <h1 className="text-2xl font-bold text-[#001931] mb-4 mt-20">
          Description
        </h1>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
