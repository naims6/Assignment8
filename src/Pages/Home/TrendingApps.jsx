import React from "react";
import Title from "../../Components/Title";
import { useYourData } from "../../Hooks/useYourData";
import AppsCard from "../../Components/AppsCard";
import { Link } from "react-router";
import Loading from "../Loading/Loading";

const TrendingApps = () => {
  const [appData, isLoading] = useYourData();
  const trendingApps = appData.slice(0, 8);

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

        {isLoading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            {trendingApps.map((app) => (
              <AppsCard key={app.id} app={app} />
            ))}
          </div>
        )}

        {/* show more button */}
        <div className="text-center pt-10">
          <Link
            to="/apps"
            className="btn [background:linear-gradient(30deg,#632EE3,#9F62F2)] text-white font-medium px-8"
          >
            Show All
          </Link>
        </div>
      </div>
    </>
  );
};

export default TrendingApps;
