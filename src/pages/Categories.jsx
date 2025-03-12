import React, { useState } from "react";
import useFetch from "../logic/useFetch";

const Categories = () => {
  const { categories } = useFetch("http://localhost:8000/categories");

  return (
    <div name="categories" className="text-red-500 px-5 sm:px-10 md:px-15 lg:px-15 py-10 bg-gray-200">
      <div className="h-auto">
        <h2 className="uppercase text-xl sm:text-2xl md:text-4xl   font-bold border-l-6 border-red-500 mb-5">
          &nbsp; Categories
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {categories &&
            categories.map((item) => (
              <div key={item.id}>
                <div className="h-40 flex justify-center items-center rounded-lg bg-gray-400 shadow-lg">
                  <img
                    className="cursor-pointer transition-all hover:scale-120 h-8/12 drop-shadow-2xl"
                    src={item.img}
                    alt=""
                  />
                </div>
                <p className="text-lg font-medium text-center">{item.title}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
