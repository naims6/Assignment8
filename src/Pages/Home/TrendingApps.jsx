import React from "react";
import Title from "../../Components/Title";
import { useYourData } from "../../Hooks/useYourData";
import AppsCard from "./AppsCard";

const TrendingApps = () => {
  const [appData] = useYourData();

  const featuredApps = appData.slice(0, 6);
  console.log(featuredApps);
  return (
    <>
      <div className="container2 py-20">
        {/* title */}
        <div className="pb-10">
          <Title
            title="Trending Apps"
            description="Explore All Trending Apps on the Market developed by us"
          />
        </div>

        {/* companyName "CreativeLabs"
description: "A powerful photo editing app with advanced filters and tools."
downloads: 500000
id: 1
image: "https://via.placeholder.com/512x512.png?text=App+Logo+1"ratingAvg: 4.5
ratings: (5) [{…}, {…}, {…}, {…}, {…}]
reviews: 12345
size: 85
title: 
"Photo Editor Pro" */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {featuredApps.map((app) => (
            <AppsCard key={app.id} app={app} />
          ))}
        </div>
        {/* show more button */}
        <div className="text-center pt-10">
          <button className="btn [background:linear-gradient(30deg,#632EE3,#9F62F2)] text-white font-medium px-8">
            Show All
          </button>
        </div>
      </div>
    </>
  );
};

export default TrendingApps;
