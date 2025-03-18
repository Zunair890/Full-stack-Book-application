import React, { useState } from "react";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { BiSolidShoppingBag } from "react-icons/bi";
import avatarImg from "../assets/avatar.png"

function Navbar() {
    const currentUser=true;
    const [isdropdownOpen,setIsDropdownOpen] =useState(false);
    console.log(isdropdownOpen)
  return (
    <header className="max-w-screen-2xl ml-32 my-auto px-4 py-4">
      <nav className="flex justify-between items-center">
        {/* {left side} */}
        <div className="flex items-center md:gap-16 gap-4 ">
          <Link to="/">
            <HiMiniBars3CenterLeft className="size-5" />
          </Link>

          {/* search field */}
          <div className="relative w-40 sm:w-72 space-x-2">
            <IoIosSearch className="absolute inline-block top-2.5 inset-y-2 left-3.5 size-4" />
            <input
              type="text "
              placeholder="Search here"
              className="bg-[#EAEAEA] w-full py-1.5 md:px-8 px-6 rounded-md focus:outline-none"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="relative flex items-center md:space-x-3 space-x-2">
            <div >
                {
                    currentUser ? 
                    <button onClick={()=> setIsDropdownOpen(!isdropdownOpen)}>
                        <img src={avatarImg} className={` mt-1.5 size-6 gap-4 rounded-full  ${currentUser ? "ring-2 ring-blue-500" :""}`} /></button>
                     : <Link to="/login">
                     <FaRegUser className="size-5" />
                     </Link>
                }
            </div>
          
          <button className="hidden sm:block">
            <FaRegHeart className="size-5" />
          </button>
          <Link
            to="/cart"
            className="bg-primary py-1.5 sm:px-5 px-3  flex items-center rounded-sm"
          >
            <div className="relative flex items-center justify-center">
              {/* Cart Icon */}
              <BiSolidShoppingBag className="size-5" />

              {/* Cart Count as Base */}
              <span className="absolute left-3.5 top-1 text-black text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full">
                6
              </span>
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
