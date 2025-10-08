import React from "react";
import Title from "../../Components/Title";

const TrendingApps = () => {
  return (
    <>
      <div className="container2 py-20">
        <div className="pb-10">
          <Title
            title="Trending Apps"
            description="Explore All Trending Apps on the Market developed by us"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="card bg-base-100  shadow-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Card Title</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center pt-10">
          <button className="btn [background:linear-gradient(30deg,#632EE3,#9F62F2)] text-white font-medium px-8">
            Show All
          </button>
        </div>
      </div>
    </>
  );
};

export default TrendingApps;
