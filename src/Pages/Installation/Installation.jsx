import React, { useState } from "react";
import Title from "../../Components/Title";
import { getFromDb } from "../../Utility/addToDB";
import InstallAppCard from "./InstallAppCard";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState(() => getFromDb());
  const [sortType, setSortType] = useState("");

  const sortingApp = () => {
    if (sortType == "ltoh") {
      const sortByLowToHigh = [...installedApps].sort(
        (a, b) => a.downloads - b.downloads
      );
      return sortByLowToHigh;
    } else if (sortType == "htol") {
      const sortByHighToLow = [...installedApps].sort(
        (a, b) => b.downloads - a.downloads
      );
      return sortByHighToLow;
    } else {
      return installedApps;
    }
  };

  return (
    <div className="bg-[#d9d9d9c9] min-h-[70vh]">
      <div className="container2 pt-5 lg:pt-12 pb-8">
        <Title
          title="Your Installed Apps"
          description="Explore All Trending Apps on the Market developed by us"
        />
        {/* sorting actions */}
        <div className="flex flex-col lg:flex-row gap-3.5 items-center justify-between pt-6 lg:pt-10 pb-4">
          <h1 className="text-2xl text-[#001931] font-semibold">
            ({sortingApp().length}) Apps Found
          </h1>
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border font-semibold bg-white border-gray-500 rounded-md py-2.5 px-2 outline-none"
          >
            <option disabled selected>
              Sort by Size
            </option>
            <option value="ltoh">Low - High</option>
            <option value="htol">High - Low</option>
          </select>
        </div>
        {/* installed app */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          {/* card  */}
          {sortingApp().length === 0 ? (
            <h1 className="text-center mt-2.5 font-2xl">
              No Installed App Found.
            </h1>
          ) : (
            sortingApp().map((app, index) => (
              <InstallAppCard
                index={index}
                key={app.id}
                app={app}
                setInstalledApps={setInstalledApps}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Installation;
