import React from "react";
import { useParams } from "react-router-dom";

function Blog() {
  const { id } = useParams();
  return (
    <>
      <div className="main-page w-full flex justify-center p-5">
        <div className="blog-card flex justify-center p-4 h-full rounded-2xl w-full">
          <div className="body p-2">
            <div className="image">
              <img
                src="https://static.vecteezy.com/system/resources/previews/001/879/618/non_2x/brainstorming-to-solve-problem-startup-office-with-swing-modern-workplace-or-coworking-space-play-and-work-flat-illustration-for-landing-page-web-website-banner-mobile-flyer-poster-free-vector.jpg"
                alt=""
                className="h-72 rounded-4xl"
              />
            </div>
            <div className="title p-2">
              <h1
                className="text-5xl text-zinc-950"
                style={{ fontFamily: "Oswald" }}
              >
                Blog Title {id}.
              </h1>
            </div>
            <div className="content p-2 text-3xl"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
              corporis aliquam eveniet nesciunt officia laudantium dolorum
              nostrum. Ratione, error temporibus veritatis qui nam animi, amet,
              nesciunt sed ut ipsum est? Iure explicabo nobis nulla aperiam eius
              sapiente incidunt harum, fugit expedita veritatis quam fugiat
              asperiores a voluptatem blanditiis, ullam sed quae! Quasi cumque,
              explicabo magnam nulla sapiente soluta ex in dolor, ipsam a neque
              tempore. Minima earum temporibus enim ipsum iure in voluptas vero
              esse rem vitae sit commodi, illo sint aperiam, eveniet culpa,
              obcaecati reprehenderit consectetur excepturi cumque recusandae.
              Aperiam, quidem! Voluptatum magnam deserunt quas, amet consectetur
              laudantium porro corrupti itaque assumenda quia, possimus ex
              deleniti repellendus est veritatis ducimus. Dolorum soluta ad
              laboriosam, repellat corporis beatae. Corporis ducimus quia
              accusamus alias voluptas magni iusto inventore, repellendus
              tenetur quibusdam!
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A nobis
              facilis ducimus natus perspiciatis et eum eius voluptates nisi,
              odio exercitationem earum necessitatibus praesentium iure,
              similique nulla sint odit corporis qui corrupti eaque provident
              explicabo! Velit, officiis soluta dignissimos in nostrum
              recusandae assumenda nihil mollitia, modi, quia tenetur
              reprehenderit accusantium cupiditate laboriosam rerum repellat
              maiores totam quis non ex labore. Corrupti, iusto doloremque animi
              ut deserunt architecto illo repellendus maxime illum doloribus.
              Atque eius consectetur dignissimos impedit quod, fugiat nemo eos
              nulla expedita mollitia quae. In maxime ratione ducimus ex
              incidunt dolorem distinctio accusamus? Blanditiis sit rerum earum
              molestias iste aperiam repudiandae nostrum iure beatae nisi sequi
              assumenda nemo velit autem deserunt, vel quam, fugit dolores esse!
              Fugit eaque cum ut autem amet officiis ipsam saepe corrupti neque
              culpa excepturi modi aut, molestias odit voluptatibus repellat
              eligendi quis nemo vel esse necessitatibus? Perspiciatis
              temporibus incidunt dolor, velit maxime cumque nihil?
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
