import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="bar border-solid  border-2 border-amber-300 bg-amber-100 gap-4 h-12 flex justify-center items-center w-full">
        <div className="logo absolute start-2">
          <h4
            className="text-zinc-700 pacifico text-2xl"
            style={{ fontFamily: "Pacifico" }}
          >
            Logo
          </h4>
        </div>
        <div className="nav absolute start-24 flex gap-4">
          <li className="flex">
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-red-400" : "text-gray-700"}`
              }
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li className="flex text-red-400">
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-red-400" : "text-gray-700"}`
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
        </div>
        <div className="action absolute end-4 flex">
          <li className="flex font-bold text-red-400 p-1">
            <NavLink to="/signin">Sign-in</NavLink>
          </li>
          <li className="flex font-bold bg-red-400 mx-2 text-white rounded-md p-1">
            <NavLink to="/signup">Register</NavLink>
          </li>
        </div>
      </div>
    </>
  );
}

export default Navbar;
