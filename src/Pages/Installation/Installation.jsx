import React, { useState } from "react";
import Title from "../../Components/Title";
import { getFromDb } from "../../Utility/addToDB";
import InstallAppCard from "./InstallAppCard";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState(() => getFromDb());

  return (
    <div className="bg-[#d9d9d9c9]">
      <div className="container2 pt-12 pb-8">
        <Title
          title="Your Installed Apps"
          description="Explore All Trending Apps on the Market developed by us"
        />
        {/* sorting actions */}
        <div className="flex flex-col lg:flex-row gap-3.5 items-center justify-between pt-10 pb-4">
          <h1 className="text-2xl text-[#001931] font-semibold">
            ({installedApps.length}) Apps Found
          </h1>
          <select className="border border-gray-500 rounded-md py-2.5 px-4 outline-none">
            <option value="a">Sort by Size</option>
            <option value="a">Sort by Ratings</option>
            <option value="a">Sort by Nothing</option>
          </select>
        </div>
        {/* installed app */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          {/* first  */}
          {installedApps.map((app) => (
            <InstallAppCard app={app} setInstalledApps={setInstalledApps} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Installation;
