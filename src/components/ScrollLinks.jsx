import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

const ScrollLinks = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div>
        <button onClick={toggleMenu} className="md:hidden cursor-pointer">{isOpen ? <X /> : <Menu />}</button>
      </div>

      <div
        className={`${
          isOpen ? "flex text-center top-13 absolute opacity-80 px-5 bg-gradient-to-r from-black to bg-gray-400" : "hidden"
        } space-x-2 uppercase text-sm md:flex md:visible sm:space-x-2 sm:text-md md:space-x-2 md:text-md lg:text-lg lg:space-x-5`}
      >
        <ScrollLink
          activeClass="active"
          className=" hover:text-red-500 cursor-pointer"
          to="/"
          smooth
          spy
          offset={-10}
          duration={500}
        >
          Home
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          className="hover:text-red-500 cursor-pointer"
          to="categories"
          smooth
          spy
          offset={2}
          duration={500}
        >
          Categories
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          className="hover:text-red-500 cursor-pointer "
          to="players"
          smooth
          spy
          offset={-15}
          duration={500}
        >
          Players
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          className="hover:text-red-500 cursor-pointer "
          to="news"
          smooth
          spy
          offset={-15}
          duration={500}
        >
          News
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          className="hover:text-red-500 cursor-pointer "
          to="about"
          smooth
          spy
          offset={-15}
          duration={500}
        >
          About
        </ScrollLink>
      </div>
    </div>
  );
};

export default ScrollLinks;
