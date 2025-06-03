import { RiUserFill } from "@remixicon/react";
import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
      <div
        className="main-page  w-full flex justify-center items-center text-gray-500 h-[800px]"
        style={{ fontFamily: "Montserrat" }}
      >
        <div className="main-card border-solid border-2 border-amber-200 bg-amber-100 h-92 rounded-md backdrop-blur-md flex justify-center w-96">
          <form action="">
            <div className="input  m-2 w-72 ">
              <label htmlFor="name" className="max-w-full">
                Name
              </label>
              <br />
              <input
                id="name"
                type="text"
                className="outline-amber-200 border-solid border-2 border-amber-200 py-2 bg-white w-full rounded-md"
              />
            </div>
            <div className="input  m-2 w-72 ">
              <label htmlFor="username" className="max-w-full">
                User Name
              </label>
              <br />
              <input
                id="username"
                type="text"
                className="border-solid border-2 border-amber-200 outline-amber-200 py-2 bg-white w-full rounded-md"
              />
            </div>
            <div className="input  m-2 w-72 ">
              <label htmlFor="password" className="max-w-full">
                Password
              </label>
              <br />
              <input
                id="password"
                type="password"
                className="border-solid border-2 border-amber-200 outline-amber-200 py-2 bg-white w-full rounded-md"
              />
            </div>
            <div className="input  m-2 w-72 ">
              <label htmlFor="email" className="max-w-full">
                Email
              </label>
              <br />
              <input
                id="email"
                type="email"
                className="border-solid border-2 border-amber-200 outline-amber-200 py-2 bg-white w-full rounded-md"
              />
            </div>
            <div className="border-solid border-2 rounded-br-2xl rounded-tr-2xl z-1 border-red-500 input flex justify-center fixed start-12 h-12 rounded-md text-gray-200 w-32 items-center bg-red-400 ">
              <button className="">Register</button>
            </div>
            <div className="border-solid border-2 border-zinc-500 input flex justify-center  fixed start-40 h-12 rounded-md text-gray-200 w-44 items-center bg-zinc-600 ">
              <Link to="/signin">
                <button className="">Existed User →</button>
              </Link>
            </div>
            <div className="icon flex fixed end-12 items-center justify-center h-12 text-red-400">
              <RiUserFill />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
