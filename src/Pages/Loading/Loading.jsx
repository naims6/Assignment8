import React from "react";

const Loading = () => {
  return (
    <div className="text-center mt-6">
      <h1 className="text-center font-bold text-3xl lg:text-6xl text-gray-900 flex items-center justify-center">
        L{" "}
        <img
          className="w-14 lg:w-32 animate-spin"
          src="/public/Images/logo.png"
        />{" "}
        ADING...
      </h1>
    </div>
  );
};

export default Loading;
