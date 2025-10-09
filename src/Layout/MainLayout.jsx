import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
      <ToastContainer position="top-right" autoClose={3500} />
    </div>
  );
};

export default MainLayout;
