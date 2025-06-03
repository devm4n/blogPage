import React from "react";
import { RiGithubFill, RiInstagramFill, RiInstallFill } from "@remixicon/react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="main-footer bottom-1 w-full bg-amber-100 text-zinc-500 h-full p-2 justify-center border-solid border-2 border-amber-200">
        {/* <div className="about h-32 w-1/3 absolute mx-2 ml-12 start-1">
          <h2 className="text-base sm:text-3xl text-zinc-600">
            Personal Bloging Page Project
          </h2>
          <p className="text-md">
            Personal build Reactjs based Blogin Application which is fully
            functionality including user Registration and user Login.
          </p>
        </div> */}
        <div className="me mr-12 text-center h-12 mx-4 ml-12 flex gap-2 items-center justify-center ">
          <li className="flex">
            <Link to="https://github.com/devm4n">
              <RiGithubFill className="ri-github-fill inline-block" /> devm4n
            </Link>
          </li>
          <li className="flex">
            <Link to="https://instagram.com/devm4n">
              <RiInstagramFill className="ri-github-fill inline-block" /> devm4n
            </Link>
          </li>
        </div>
        <div className="copyright flex items-center h-full mx-2 justify-center">
          <h2>© 2025 [Blog Name]</h2>
        </div>
      </div>
    </>
  );
}

export default Footer;
