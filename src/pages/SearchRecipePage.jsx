import React from "react";
import CategoryCard from "../components/atoms/CategoryCard";
import Navigation from "../components/layouts/Navigation";

const SearchRecipePage = () => {
  return (
    <>
      <Navigation />
      <div className="w-full mt-20">
        <h1 className="text-xl font-bold px-8">Result of search</h1>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="w-full">
            <div className="w-full object-cover px-8 overflow-hidden">
              <img
                src="https://source.unsplash.com/600x600/?food"
                className="w-full rounded-md"
                alt=""
              />
            </div>
            <div className="px-8 w-full">
              <h1 className="text-xl font-bold p-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium, nesciunt!
              </h1>
            </div>
            <div className="px-8 py-4">
              <p>10 minutes</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchRecipePage;
