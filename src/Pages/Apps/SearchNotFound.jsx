const NotFoundApp = ({ setSearchingApp, searchingApp }) => {
  return (
    <div className="container2 text-center col-span-full flex flex-col items-center justify-center gap-7">
      <h1 className="text-bold text-5xl text-[#001931]">
        {`No App Found for '${searchingApp}'`}
      </h1>
      <button
        onClick={() => setSearchingApp("")}
        className="btn px-7 w-fit mb-7 text-white bg-[linear-gradient(45deg,_#e855de,_#5400ee)]"
      >
        Show All Apps
      </button>
    </div>
  );
};

export default NotFoundApp;
