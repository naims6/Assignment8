import React from "react";
import { Link } from "react-router";

const AppsCard = ({ app }) => {
  return (
    <Link to={`/apps/${app.id}`}>
      <div
        key={app.id}
        className="flex flex-col rounded-md justify-between items-center h-full bg-gray-100 py-6 px-5 shadow-md w-full hover:-translate-y-2.5 transition-all duration-300"
      >
        <figure className="-m-3">
          <img className="w-[210px]" src={app.image} alt="Apps Logo" />
        </figure>
        <h2 className="text-2xl font-semibold my-5 text-left w-full">
          {app.title}
        </h2>
        <div className="flex justify-between items-center w-full">
          <p className="flex items-center justify-center gap-2 shadow bg-[#F1F5E8] px-2.5 py-2 rounded-md">
            <img className="size-5" src="/Images/icon-downloads.png" alt="" />
            <span className="text-[#00D390] font-semibold">
              {app.downloads}M
            </span>
          </p>
          <p className="flex items-center justify-center gap-2 shadow bg-[#FFF0E1] px-2.5 py-2 rounded-md">
            <img className="size-5" src="/Images/icon-ratings.png" alt="" />
            <span className="text-[#FF8811] font-semibold">
              {app.ratingAvg}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default AppsCard;
