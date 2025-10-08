import React from "react";
import Title from "../../Components/Title";
import { useYourData } from "../../Hooks/useYourData";
import AppsCard from "../../Components/AppsCard";

const AllApps = () => {
  const [Apps] = useYourData();

  return (
    <div className="pt-16 pb-10 container2">
      <Title
        title="Our All Applications"
        description="Explore All Apps on the Market developed by us. We code for Millions"
      />
      {/* search apps */}
      <div className="flex flex-col lg:flex-row gap-3.5 items-center justify-between pt-10 pb-4">
        <h1 className="text-2xl text-[#001931] font-semibold">
          (132) Apps Fount
        </h1>
        <label className="input lg:max-w-[300px]">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" className="" required placeholder="Search" />
        </label>
      </div>
      {/* all apps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {/* card */}
        {Apps.map((app) => (
          <AppsCard key={app.id} app={app} />
        ))}
      </div>
    </div>
  );
};

export default AllApps;
