const NotFoundApp = ({ setSearchingApp }) => {
  return (
    <div className="container2 text-center col-span-full flex flex-col items-center justify-center gap-7">
      <figure className="mt-8">
        <img className="w-[350px]" src="/Images/App-Error.png" alt="" />
      </figure>
      <h1 className="text-bold text-5xl text-[#001931]">
        OPPS!! NO Apps Found
      </h1>
      <p className="text-[#627382]">
        The App you are requesting is not found on our system. please try
        another apps
      </p>

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
