import React from "react";
import {AiOutlineClose} from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black">
      <h1 className="w-full text-3xl font-bold text-[#000000]"> FUPRE SDGS </h1>
      <ul className="flex">
        <li className="p-8 font-bold"> Home </li>
        <li className="p-8 font-bold"> About </li>
        <li className="p-8 font-bold"> Contact </li>
        <li className="p-8 font-bold"> Services </li>
        <li className="p-8 font-bold"> Vision </li>
      </ul>
    </div>
  );
};

export default Navbar;