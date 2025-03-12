import React, { useState } from "react";
import useFetch from "../logic/useFetch";

const Players = () => {
  const { players } = useFetch();

  const [isView , setIsView] = useState(false)
  const [view , setView] = useState('view more');

  const handleClickView = ()=>{
    if(isView === false){
      setIsView(true);
      setView('view less')
    }else{
      setIsView(false);
      setView('view more')
    }
  } 

  return (
    <div name="players" className="text-red-500 px-5 sm:px-10 md:px-15 lg:px-15 py-10 bg-gray-400" >
      <div className={`${!isView ? 'h-200' : 'h-auto'} overflow-hidden relative` }>
        <h2 className="uppercase text-3xl font-bold border-l-6 border-red-500 mb-5">
          &nbsp; Players
        </h2>

        <h2 className="font-semibold text-2xl">Football</h2>

        <div className="grid-custom">
          {players &&
            players[0] &&
            players[0].football.map((item, i) => (
              <div
                key={i}
                className="w-40 sm:w-50 rounded-t-full bg-gray-500 flex flex-col p-3 shadow-lg text-white "
              >
                <div className="m-auto rounded-full h-30 w-30 sm:h-40 sm:w-40 overflow-hidden bg-gray-300 opacity-80 outline-2 shadow-2xl">
                  <img
                    className="mix-blend-multiply object-contain h-full w-full"
                    src={item.img}
                    alt=""
                  />
                </div>
                <br />
                <div>
                  <h3 className="border-l-3 border-red-500 font-bold">
                    &nbsp; {item.title}
                  </h3>
                  <h3>
                    <b>Age:</b> {item.age}
                  </h3>
                  <p>
                    <b>Country:</b> {item.country}
                  </p>
                  <p>
                    <b>Position:</b> {item.position}
                  </p>
                </div>
              </div>
            ))}
        </div>

        <br />
        <br />

        <h2 className="font-semibold text-2xl">Cricket</h2>

        <div className="grid-custom">
          {players &&
            players[1] &&
            players[1].cricket.map((item, i) => (
              <div
                key={i}
                className="w-40 sm:w-50 rounded-t-full bg-gray-500 flex flex-col p-3 shadow-lg text-white "
              >
                <div className="m-auto rounded-full h-30 w-30 sm:h-40 sm:w-40 overflow-hidden bg-gray-300 opacity-80 outline-2 shadow-2xl">
                  <img
                    className="mix-blend-multiply object-contain h-full w-full"
                    src={item.img}
                    alt=""
                  />
                </div>
                <br />
                <div>
                  <h3 className="border-l-3 border-red-500 font-bold">
                    &nbsp; {item.title}
                  </h3>
                  <h3>
                    <b>Age:</b> {item.age}
                  </h3>
                  <p>
                    <b>Country:</b> {item.country}
                  </p>
                  <p>
                    <b>Position:</b> {item.position}
                  </p>
                </div>
              </div>
            ))}
        </div>

        <br />
        <br />

        <h2 className="font-semibold text-2xl">Boxing</h2>

        <div className="grid-custom">
          {players &&
            players[2] &&
            players[2].Boxing.map((item, i) => (
              <div
                key={i}
                className="w-40 sm:w-50 rounded-t-full bg-gray-500 flex flex-col p-3 shadow-lg text-white "
              >
                <div className="m-auto rounded-full h-30 w-30 sm:h-40 sm:w-40 overflow-hidden bg-gray-300 opacity-80 outline-2 shadow-2xl">
                  <img
                    className="mix-blend-multiply object-contain h-full w-full"
                    src={item.img}
                    alt=""
                  />
                </div>
                <br />
                <div>
                  <h3 className="border-l-3 border-red-500 font-bold">
                    &nbsp; {item.title}
                  </h3>
                  <h3>
                    <b>Age:</b> {item.age}
                  </h3>
                  <p>
                    <b>Country:</b> {item.country}
                  </p>
                  <p>
                    <b>Position:</b> {item.position}
                  </p>
                </div>
              </div>
            ))}
        </div>

        <br />
        <br />

        <h2 className="font-semibold text-2xl">UFC</h2>

        <div className="grid-custom">
          {players &&
            players[3] &&
            players[3].UFC.map((item, i) => (
              <div
                key={i}
                className="w-40 sm:w-50 rounded-t-full bg-gray-500 flex flex-col p-3 shadow-lg text-white "
              >
                <div className="m-auto rounded-full h-30 w-30 sm:h-40 sm:w-40 overflow-hidden bg-gray-300 opacity-80 outline-2 shadow-2xl">
                  <img
                    className="mix-blend-multiply object-contain h-full w-full"
                    src={item.img}
                    alt=""
                  />
                </div>
                <br />
                <div>
                  <h3 className="border-l-3 border-red-500 font-bold">
                    &nbsp; {item.title}
                  </h3>
                  <h3>
                    <b>Age:</b> {item.age}
                  </h3>
                  <p>
                    <b>Country:</b> {item.country}
                  </p>
                  <p>
                    <b>Position:</b> {item.position}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>

      <br />

      <div className="flex justify-center">
        <button onClick={handleClickView} className="cursor-pointer rounded-full bg-red-500 text-white px-4 py-1 hover:outline-2 outline-red-500 hover:bg-red-200 hover:text-red-500">
          {view}
        </button>
      </div>
    </div>
  );
};

export default Players;
