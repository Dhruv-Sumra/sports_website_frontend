import React from "react";
import {Link as ScrollLink} from 'react-scroll'
import {Link } from 'react-router-dom'

const Main = () => {
  return (
    <div className="relative sm:flex-row flex flex-col-reverse xl:flex-row-reverse justify-center items-center h-[calc(100%-2.5rem)] text-center sm:text-start ">

      <div className="absolute w-full flex sm:flex-row sm:justify-between items-center mt-10 z-10 ">

        <div className="w-full space-y-2 absolute sm:w-70 sm:right-5 sm:mb-10 md:right-20 lg:right-40">
          <h1 className="text-2xl md:w-100 font-bold text-red-500 sm:ml-5 md:text-4xl ld:text-5xl">
            Unleash Your Passion, Elevate Your Game!
          </h1>
         

          <p className="text-sm opacity-80 ml-5 md:w-100 md:text-lg ">
            Sports bring together individuals and communities in a shared
            passion for competition and camaraderie.
          </p>
          <br />

          <Link to="#"><img className="opacity-70 w-35 mx-auto md:mx-5 md:w-40" src="src/imgs/store_links.png" alt="" /></Link>
          <ScrollLink activeClass="active" to="categories" smooth spy offset={-10} duration={500}><button className="hidden hover:opacity-100 cursor-pointer border-2 border-red-500 rounded-2xl bg-red-500 opacity-90 text-2xl font-semibold px-4 py-1">Check out ↓</button></ScrollLink>
        </div>
      </div>

      <div className="absolute top-30 w-70 h-100 left-5 items-center overflow-hidden sm:left-5 md:h-150 md:w-100">
        {/* <img className="h-full w-full opacity-80 hidden" src="src/imgs/poster.png" alt="poster" /> */}
        <img className="h-full w-full opacity-30 lg:opacity-70" src="src/imgs/poster2.png" alt="poster" />
      </div>
    </div>
  );
};

export default Main;
