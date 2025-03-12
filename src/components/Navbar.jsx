import React from "react";
import ScrollLinks from "./ScrollLinks";
import SearchBar  from "./SearchBar";

const Navbar = () => {
  return (
    <div className="px-5 sm:px-10 md:px-15 lg:px-25 bg-gradient-to-r from-black to bg-gray-400  z-20  fixed top-0 left-0 w-full h-13 flex justify-between items-center shadow-lg">
      <div className="hidden md:block">
        <i className="text-2xl fa-solid fa-medal text-red-500 relative ">AthletHub</i>
      </div>
    

       <ScrollLinks/>

       <div className="md:hidden visible">
        <i className="sm:text-2xl fa-solid fa-medal text-red-500 text-xl relative left-5">AthletHub</i>
      </div>

      <SearchBar/>
    </div>
  );
};

export default Navbar;
