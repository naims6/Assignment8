import { useParams } from "react-router";
import { useYourData } from "../../Hooks/useYourData";
import RatingChart from "./RatingChart";
import { addToDb, getFromDb } from "../../Utility/addToDB";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import NotFoundApp from "../Apps/NotFoundApp";

const AppDetails = () => {
  const [isInstalled, setIsInstalled] = useState(false);
  const [allApps] = useYourData();
  const { id } = useParams();

  const isFound = allApps.find((app) => app.id == id);
  const matchedApp = allApps.find((app) => app.id == id) || {};

  const handleInstallApp = (app) => {
    setIsInstalled(true);

    addToDb(app);
    toast.success(`${app.title} Installed`);
  };

  useEffect(() => {
    const data = getFromDb();
    const isExist = data.find((app) => app.id == id);
    if (isExist) {
      setIsInstalled(true);
    }
  }, [id]);

  const {
    companyName,
    description,
    downloads,
    title,
    image,
    ratingAvg,
    ratings,
    reviews,
    size,
  } = matchedApp;

  if (!isFound) {
    return <NotFoundApp />;
  }

  return (
    <div className="bg-base-200 pt-9 lg:pt-16">
      <div className="flex gap-12 container2 flex-col lg:flex-row">
        <figure className="w-full max-w-[345px] lg:max-w-sm mx-auto rounded-lg">
          <img
            src={image}
            className="w-full max-w-[345px] lg:max-w-sm rounded-lg shadow-2xl"
          />
        </figure>
        <div className="w-full flex flex-col justify-between">
          <div className="border-b border-gray-300 pb-2">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="py-3 text-[#627382]">
              Developed by :{" "}
              <span className="text-[#9F62F2] font-semibold">
                {companyName}
              </span>
            </p>
          </div>
          {/* app state */}
          <div className="flex flex-col lg:flex-row gap-5 mt-5">
            {/* first  */}
            <div className="flex flex-col items-center gap-1 border border-gray-300 shadow p-3 rounded-md text-center">
              <img className="size-8" src="/Images/icon-downloads.png" />
              <span className="text-[#001931] font-extrabold">Downloads</span>
              <h1 className="font-bold text-5xl text-[#001931]">
                {downloads}M
              </h1>
            </div>
            {/* second */}
            <div className="flex flex-col items-center gap-1 border border-gray-300 shadow p-3 rounded-md">
              <img className="size-8" src="/Images/icon-ratings.png" />
              <span className="text-[#001931] font-extrabold">
                Average Ratings
              </span>
              <h1 className="font-bold text-5xl text-[#001931]">{ratingAvg}</h1>
            </div>
            {/* third */}
            <div className="flex flex-col items-center gap-1 border border-gray-300 shadow p-3 rounded-md">
              <img className="size-8" src="/Images/icon-review.png" />
              <span className="text-[#001931] font-extrabold">Reviews</span>
              <h1 className="font-bold text-5xl text-[#001931]">{reviews}</h1>
            </div>
          </div>
          {/* install button */}
          <div className="-translate-y-2.5 pt-10 mt-0 lg:mt-5 lg:pt-0 text-center lg:text-left">
            <button
              disabled={isInstalled}
              onClick={() => handleInstallApp(matchedApp)}
              className={`${
                isInstalled ? "bg-[#00d390d0]" : "bg-[#00D390]"
              } py-3.5 px-6 text-white text-base lg:text-xl font-bold  cursor-pointer rounded-md shadow`}
            >
              {isInstalled ? `Installed` : `Install Now (${size}Mb)`}
            </button>
          </div>
        </div>
      </div>
      {/* ratings recharts and descripion */}
      <div className="container2 mt-6 lg:mt-10">
        <RatingChart ratings={ratings} />
        {/*app description  */}
        <h1 className="text-2xl font-bold text-[#001931] mb-4 pt-3.5 lg:pt-5">
          Description
        </h1>
        <p className="text-gray-600 pb-12">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
