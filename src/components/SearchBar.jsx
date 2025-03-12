import React, { useState } from 'react'
import useSearch from "../logic/useSearch";
import { Link as ScrollLink } from "react-scroll";

const Search = () => {
    const {filteredItems , query ,setQuery} = useSearch();

    const [isClick , setIsClick] = useState(true)

    const handleSearch = ()=>{
      setIsClick(!isClick)
    }
  return (
    <div className="rounded-md bg-gray-500 relative w-25 md:w-30 xl:w-40 text-sm flex items-center">
        <input
          onChange={(e) => setQuery(e.target.value)}
          className={`${!isClick ? 'block' : 'hidden'} md:block outline-none pl-1 py-0.5 `}
          type="text"
          placeholder=" search..."
        />


        <div className="absolute top-5 h-auto w-25 md:w-30 xl:w-40 bg-gray-500 rounded-b-md space-y-1 md:block">
          {query &&
            filteredItems.map((item) => (
                <ScrollLink to='categories' className="searcheditem px-2 opacity-80 hover:bg-gray-400 block" smooth duration={500}>{item}</ScrollLink>
            ))}
        </div>

        <button onClick={handleSearch} className='text-lg absolute right-1 md:hidden'>{!isClick ? <span>×</span> : <i className="fa-solid fa-magnifying-glass "></i>}</button>
        <button onClick={handleSearch} className='text-lg absolute right-1 hidden md:block'>{<i className="fa-solid fa-magnifying-glass "></i>}</button>
        
      </div>
  )
}

export default Search