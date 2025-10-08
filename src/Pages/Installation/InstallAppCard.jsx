import React from "react";
import { removeFromDb } from "../../Utility/addToDB";

const InstallAppCard = ({ app, setInstalledApps }) => {
  const handleUnstallApp = () => {
    setInstalledApps(removeFromDb(app));
  };

  const { image, title, downloads, size, ratingAvg } = app;
  return (
    <div className="bg-white p-3 rounded-xl flex justify-between items-center">
      {/* left side */}
      <div className="flex gap-5">
        <div className="size-20">
          <img className="w-full rounded-md " src={image} alt="" />
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-semibold text-[22px]">{title}</h2>
          <div className="flex justify-between items-center">
            <div className="flex gap-3">
              <span className="text-[#00D390] flex items-center gap-2 ">
                {" "}
                <img
                  src="/public/Images/icon-downloads.png"
                  className="size-4"
                  alt=""
                />{" "}
                {downloads}M
              </span>
              <span className="text-[#FF8811] flex items-center gap-2 ">
                {" "}
                <img
                  src="/public/Images/icon-ratings.png"
                  className="size-4"
                  alt=""
                />{" "}
                {ratingAvg}
              </span>
              <span className="text-[#627382]">{size} MB</span>
            </div>
          </div>
        </div>
      </div>
      {/* right side */}
      <div>
        <button
          onClick={() => handleUnstallApp(app)}
          className="btn text-white bg-[#00D390]"
        >
          Unstall
        </button>
      </div>
    </div>
  );
};

export default InstallAppCard;
