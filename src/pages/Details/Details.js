import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useProject from "../hook/useProject";
import { useSpring, animated, config } from "react-spring";

const Details = () => {
  const projects = useProject();
  const { id } = useParams();

  const [flip, set] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0.2 },
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  });

  const singleProject = projects.find((project) => project._id === id);

  const {
    name,
    img1,
    img2,
    img3,
    live,
    client,
    server,
    description,
    usedTechnology,
  } = singleProject;
  const technology = usedTechnology.split(", ");

  return (
    <section className="mx-2 lg:mx-0 min-h-screen pt-8">
      <div className=" sm:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <img className="shadow-xl" src={img1} alt="" />
        <img className="shadow-xl" src={img2} alt="" />
        <img className="shadow-xl" src={img3} alt="" />
      </div>

      <animated.h1
        style={props}
        className="text-2xl md:text-4xl font-semibold mt-3"
      >
        {name}
      </animated.h1>

      <ul className="steps steps-vertical">
        {description.map((point) => (
          <li class="step step-warning">{point}</li>
        ))}
      </ul>

      <hr />
      <p className="text-xl my-4 flex items-center">
        <animated.div style={props} className='w-48'>Used Technology : </animated.div>
        {/* {usedTechnology} */}
        <div>
          {technology.map((tec) => (
            <button className="btn sm:btn btn-sm">{tec}</button>
          ))}
        </div>
      </p>
      <hr />

      <div class="btn-group my-5">
        <a href={live} target="_blank" class="btn btn-warning">
          Live
        </a>
        <a href={client} target="_blank" class="btn btn-warning">
          Client
        </a>
        {server && (
          <a href={server} target="_blank" class="btn btn-warning">
            Server
          </a>
        )}
      </div>
    </section>
  );
};

export default Details;
