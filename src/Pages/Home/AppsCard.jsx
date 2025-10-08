import React from "react";

const AppsCard = ({ app }) => {
  return (
    <div key={app.id} className="card bg-gray-100 p-6 shadow-md">
      <figure>
        <img className="w-[250px]" src={app.image} alt="Apps Logo" />
      </figure>
      <div className="">
        <h2 className="text-2xl font-semibold my-5">{app.title}</h2>
        <div className="flex justify-between items-center">
          <p className="flex items-center justify-center gap-2 shadow bg-[#F1F5E8] px-2.5 py-2 rounded-md">
            <img
              className="size-5"
              src="/public/Images/icon-downloads.png"
              alt=""
            />
            <span className="text-[#00D390] font-semibold">
              {app.downloads}M
            </span>
          </p>
          <p className="flex items-center justify-center gap-2 shadow bg-[#FFF0E1] px-2.5 py-2 rounded-md">
            <img
              className="size-5"
              src="/public/Images/icon-ratings.png"
              alt=""
            />
            <span className="text-[#FF8811] font-semibold">{app.reviews}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppsCard;
