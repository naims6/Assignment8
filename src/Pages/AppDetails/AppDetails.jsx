import React from "react";
import { useParams } from "react-router";

const AppDetails = () => {
  const { id } = useParams();
  console.log(id);
  return <div>app details</div>;
};

export default AppDetails;
