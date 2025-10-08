import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="container2 flex flex-col items-center justify-center gap-5">
      <figure className="mt-6">
        <img className="w-[450px]" src="/Images/error-404.png" alt="" />
      </figure>
      <h1 className="text-bold text-5xl text-[#001931]">
        Oops, page not found!
      </h1>
      <p className="text-[#627382]">
        The page you are looking for is not available.
      </p>
      <Link to="/">
        <button className="btn px-7 w-fit mb-7 text-white bg-[linear-gradient(45deg,_#e855de,_#5400ee)]">
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
