import React from "react";
import useFetch from "../logic/useFetch";

const Smallnews = () => {
  const { news } = useFetch();

  return (
    <div className="h-150 w-full rounded-xl pl-1 space-y-2 lg:">
      <h2 className="text-2xl font-semibold border-l-4">&nbsp;Trending</h2>
      <div className="h-14/15 w-full overflow-y-scroll space-y-2 scrollbar scrollbar-custom">
      {news &&
        news[1] &&
        news[1].small_news.map((item, index) => (
          <div key={index} className="flex flex-col lg:flex-col sm:flex-row space-x-2 xl:flex-row">
            <img className="w-screen h-40 sm:w-50  rounded-md px-1 lg:w-full xl:w-60 xl:h-40 " src={item.img} alt="" />
            <div className="space-y-1">
              <h2 className="text-lg font-semibold pl-1">{item.title}</h2>
              <p className="text-sm pl-1 w-60">{item.info}</p>
            </div>
          </div>
        ))}
        </div>
    </div>
  );
};

export default Smallnews;
