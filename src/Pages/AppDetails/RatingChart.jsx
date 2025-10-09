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
    <div className="pt-12 pb-10 w-full">
      <h1 className="text-2xl font-bold text-[#001931] mb-4">Ratings</h1>
      <div className="w-full h-[400px] border border-gray-700 p-5 rounded-md">
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
    </div>
  );
};

export default RatingChart;
