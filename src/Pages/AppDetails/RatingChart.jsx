import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const RatingChart = ({ ratings }) => {
  const data = ratings || [];
  return (
    <div className="pt-12 mb-20 w-full h-[300px]">
      <h1 className="text-2xl font-bold text-[#001931] mb-4">Ratings</h1>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart layout="vertical" data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Bar dataKey="count" barSize={30} fill="#FF8811" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingChart;
