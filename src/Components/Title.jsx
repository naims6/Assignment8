import React from "react";

const Title = ({ title, description }) => {
  return (
    <div className="container2 text-center">
      <h1 className="text-4xl text-[#001931] pb-4 font-semibold">{title}</h1>
      <p className="text-[#627382]">{description}</p>
    </div>
  );
};

export default Title;
