import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenuBar } from "./store/menuSlice";
import ThemeBttn from "./ThemeBttn";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
export default function Header() {
  const dispatch = useDispatch();
  const handleSlide = () => {
    dispatch(toggleMenuBar());
  };
  return (
    <>
      <nav className="flex justify-between ">
        <div className=" flex items-center gap-3 ">
          <FaBars className="h-20 ml-3" onClick={() => handleSlide()} />
          <Link to={"/"}>
            <img
              className="  h-20 text-black "
              src="/elements/logo with wtext.svg"
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex shadow rounded-2xl overflow-hidden mt-3   w-[550px]  h-10 ">
          <input
            className="outline-none w-full py-1 px-3 hover:bg-gray-100 "
            type="text"
            placeholder="Search"
          ></input>
          <button className="outline-none px-4 py-3  bg-gray-200  ">
            <img src="/elements/search.png" alt="error" />
          </button>
        </div>
        <div className="flex items-center ">
          <div className="w-1/3">
            <img
              className="w-[25px] mr-[25px]    "
              src="/elements/upload.png"
              alt="upload"
            />
          </div>
          <div className="w-1/3">
            <img
              className="w-[25px] mr-[25px] "
              src="/elements/notification.png"
              alt="bell"
            />
          </div>
          <div className="w-1/3">
            <img
              className="w-[25px] rounded-full "
              src="/elements/profile.jpg"
              alt="error"
            />
          </div>
          <div className=" ">
            <ThemeBttn />
          </div>
        </div>
      </nav>
    </>
  );
}
