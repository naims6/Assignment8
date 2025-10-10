import AppsCard from "../../Components/AppsCard";
import Loading from "../Loading/Loading";
import NotFoundApp from "./NotFoundApp";
import SearchNotFound from "./SearchNotFound";
const AllApps = ({
  searchedApp,
  isLoading,
  setSearchingApp,
  searchingApp,
  searchLoading,
}) => {
  if (isLoading) {
    return <Loading />;
  }

  if (searchLoading) {
    return (
      <div className="text-center mt-5">
        <h1 className="text-center font-bold text-6xl text-green-500">
          LOADING...
        </h1>
      </div>
    );
  }

  return (
    <div className="pt-6 lg:pt-10 pb-5 lg:pb-6 container2">
      {/* all apps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {/* card */}
        {searchedApp.length === 0 ? (
          <SearchNotFound
            setSearchingApp={setSearchingApp}
            searchingApp={searchingApp}
          />
        ) : (
          searchedApp.map((app) => <AppsCard key={app.id} app={app} />)
        )}
      </div>
    </div>
  );
};

export default AllApps;
