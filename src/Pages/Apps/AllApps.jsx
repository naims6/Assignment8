import AppsCard from "../../Components/AppsCard";
import NotFoundApp from "./NotFoundApp";

const AllApps = ({ searchedApp, isLoading, setSearchingApp }) => {
  if (isLoading) {
    return (
      <div className="text-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="pt-10 pb-6 container2">
      {/* all apps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {/* card */}
        {searchedApp.length === 0 ? (
          <NotFoundApp setSearchingApp={setSearchingApp} />
        ) : (
          searchedApp.map((app) => <AppsCard key={app.id} app={app} />)
        )}
      </div>
    </div>
  );
};

export default AllApps;
