import React, { useState } from "react";
import useFetch from "../logic/useFetch";

const Bignews = () => {
  const { data } = useFetch();
  const news = data.news
  const [translate, setTranslate] = useState();

  const handleClickScroll = (e) => {
    if (e.target.id === "s1") {
      setTranslate("translate-x-0" );
    } else if (e.target.id === "s2") {
      setTranslate("-translate-x-full");
    } else if (e.target.id === "s3") {
      setTranslate("-translate-x-4/2");
    } else {
      console.log("wrong click");
    }
  };

  return (
    <div className=" h-100 min-w-40 lg:h-full flex relative rounded-lg overflow-hidden shadow-2xl">
      {news &&
        news[0] &&
        news[0].big_news.map((item, index) => (
          <div
            key={index}
            className={`min-w-full relative text-white ${translate} transition-all duration-400 `}
          >
            <img
              className={`h-full w-full object-cover`}
              src={item.img}
              alt=""
            />
            <div
              className={`absolute h-full w-full top-0 left-0 bg-gradient-to-t from-gray-800 to bg-transparent `}
            ></div>

            <div className="space-y-2">
              <h2 className="absolute border-l-4 border-red-500 bottom-35 left-9 text-xl font-semibold lg:text-3xl md:text-2xl">
                &nbsp; {item.title}
              </h2>

              <p className="opacity-90 absolute bottom-15 left-9 text-sm lg:text-lg md:text-lg">
                {item.info}
              </p>
            </div>
          </div>
        ))}

      <div className={`absolute bottom-5 left-3/7 inline-block space-x-7`}>
        <label class="relative ">
          <input
            onClick={handleClickScroll}
            id="s1"
            class="absolute opacity-0 peer"
            type="radio"
            name="scroll"
            defaultChecked
          />
          <span className="absolute peer-checked:bg-red-500 h-5 w-5 rounded-full bg-white opacity-75"></span>
        </label>

        <label class="relative">
          <input
            onClick={handleClickScroll}
            id="s2"
            class="absolute opacity-0 peer "
            type="radio"
            name="scroll"
            
          />
          <span className="absolute peer-checked:bg-red-500 h-5 w-5 rounded-full bg-white opacity-75"></span>
        </label>
        <label class="relative">
          <input
            onClick={handleClickScroll}
            id="s3"
            class="absolute opacity-0 peer"
            type="radio"
            name="scroll"
          />
          <span className="absolute peer-checked:bg-red-500 h-5 w-5 rounded-full bg-white opacity-75"></span>
        </label>
      </div>
    </div>
  );
};

export default Bignews;
