import React from "react";
import { removeFromDb } from "../../Utility/addToDB";
import { toast } from "react-toastify";

const InstallAppCard = ({ app, setInstalledApps, index }) => {
  const handleUnstallApp = () => {
    setInstalledApps(removeFromDb(app));
    toast.success(`${app.title} Unstalled`);
  };

  const { image, title, downloads, size, ratingAvg } = app;
  return (
    <div className="bg-white p-3 rounded-xl flex justify-between items-center">
      {/* left side */}
      <div className="flex gap-5">
        <div className="size-15 lg:size-20 flex gap-2 text-gray-800 font-semibold justify-center ml-2">
          <span className="text-xl">{index + 1}.</span>
          <img className="w-full rounded-md object-cover" src={image} alt="" />
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-semibold text-lg lg:text-[22px]">{title}</h2>
          <div className="flex justify-between items-center">
            <div className="flex gap-2.5">
              <span className="text-[#00D390] flex items-center gap-2 text-sm lg:text-base">
                {" "}
                <img
                  src="/Images/icon-downloads.png"
                  className="size-4"
                  alt=""
                />{" "}
                {downloads}M
              </span>
              <span className="text-[#FF8811] flex items-center gap-2 text-sm lg:text-base">
                {" "}
                <img
                  src="/Images/icon-ratings.png"
                  className="size-4"
                  alt=""
                />{" "}
                {ratingAvg}
              </span>
              <span className="text-[#627382] text-sm lg:text-base">
                {size} MB
              </span>
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
