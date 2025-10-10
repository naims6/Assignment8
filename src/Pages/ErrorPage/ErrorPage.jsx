import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="container2 flex flex-col items-center justify-center gap-5 py-16">
      <title>Error Occured</title>
      <figure className="mt-6 w-full">
        <img
          className="w-[380px] lg:w-[450px] mx-auto"
          src="/Images/error-404.png"
        />
      </figure>
      <h1 className="text-bold text-5xl text-[#001931]">
        Oops, page not found!
      </h1>
      <p className="text-[#627382]">
        The page you are looking for is not available.
      </p>
      <Link to="/">
        <button className="px-7 w-fit mb-7 cursor-pointer py-3.5 rounded-md text-white font-bold bg-[linear-gradient(45deg,_#e855de,_#5400ee)]">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
