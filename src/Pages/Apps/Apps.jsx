import React, { useState } from "react";
import AllApps from "./AllApps";
import Title from "../../Components/Title";
import { useYourData } from "../../Hooks/useYourData";

const Apps = () => {
  const [Apps, isLoading] = useYourData();
  const [searchingApp, setSearchingApp] = useState("");

  // why not working
  // const [myApp, setMyApp] = useState(Apps);
  // console.log(myApp);

  const searchedApp =
    searchingApp.length === 0
      ? Apps
      : Apps.filter((app) =>
          app.title
            .toLowerCase()
            .includes(searchingApp.toLocaleLowerCase().trim())
        );
  return (
    <div className="container2 py-5 lg:py-10">
      <Title
        title="Our All Applications"
        description="Explore All Apps on the Market developed by us. We code for Millions"
      />
      {/* search apps */}
      <div className="container2 flex flex-col lg:flex-row gap-3.5 items-center justify-between pt-6 lg:pt-10 pb-4">
        <h1 className="text-2xl text-[#001931] font-semibold">
          ({searchedApp.length}) Apps Found
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
          <input
            value={searchingApp}
            onChange={(e) => setSearchingApp(e.target.value)}
            type="search"
            className=""
            required
            placeholder="Search"
          />
        </label>
      </div>
      <AllApps
        searchingApp={searchingApp}
        searchedApp={searchedApp}
        setSearchingApp={setSearchingApp}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Apps;
