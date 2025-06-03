import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="main-page space-y-4 flex min-h-full w-full p-4">
        <div className="blog flex flex-wrap justify-center w-full">
          {/* Repeat the blog cards */}
          {[...Array(12)].map((_, index) => (
            <div
              key={index}
              className="blog-card p-2 flex-row justify-center w-full sm:w-[45%] md:w-[30%] lg:w-[23%] rounded-lg m-2 bg-amber-100"
            >
              <div
                style={{ fontFamily: "Ubuntu" }}
                className="image items-center h-48 sm:h-32 w-full mt-2 flex justify-center rounded-lg p-2"
              >
                <img
                  src="https://i.pinimg.com/originals/05/55/37/0555374749aca268dab5c4e96810733d.jpg"
                  alt=""
                  className="h-full rounded-xl w-full object-cover"
                />
              </div>
              <div
                className="title p-2 text-2xl sm:text-3xl font-bold"
                style={{ fontFamily: "Oswald" }}
              >
                Title Of Blog
              </div>
              <div
                className="content p-2 text-sm sm:text-md"
                style={{ fontFamily: "Ubuntu" }}
              >
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae sint expedita quam dolor porro iste repellat!
                </p>
              </div>
              <div className="action p-2 flex start-1.5">
                <NavLink to={`/b/${index}`}>
                  <button className="bg-orange-200 p-2 rounded-lg hover:bg-orange-300 transition-colors">
                    Read More →
                  </button>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
