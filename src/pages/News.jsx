import React from "react";
import Bignews from "../components/Bignews";
import Smallnews from "../components/Smallnews";

const News = () => {
  return (
    <div name="news" className="text-red-500 py-10 bg-gray-200 px-5 sm:px-10 md:px-15 lg:px-15 ">
      <div className="h-auto">
        <h2 className="uppercase text-3xl font-bold border-l-6 border-red-500 mb-5">
          &nbsp; news
        </h2>

        <div className="flex flex-col lg:flex-row space-x-2 ">
          <Bignews />
          <br />
          <Smallnews />
        </div>
      </div>
    </div>
  );
};

export default News;
