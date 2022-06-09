import React from "react";
import img1 from "../../images/pattern.png";
import img2 from "../../images/main2.png";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <section className="group lg:flex items-center h-screen">

      <div className="flex-1 lg:flex flex-col justify-center h-full mx-5 lg:mx-0">
        <h1 className="text-5xl font-bold">Amirul Islam Hridoy</h1>
        <h2 className="text-[#ff4321] text-4xl font-semibold my-3">Web Developer</h2>
        <p className="font-medium text-lg mb-3">
          I like to craft solid and scalable web development with great user
          experiences. Because I want to learn more. If I know more, I will do
          better.
        </p>
        <button
          onClick={() => navigate("/resume")}
          class="btn btn-outline btn-warning w-24"
        >
          Resume
        </button>
      </div>

      <div className="flex-1 relative">
        <img
          className=" max-w-xl absolute left-2/4 translate-x-[-50%] translate-y-[-100%] lg:translate-y-[-50%] group-hover:translate-y-[-90%] lg:group-hover:translate-y-[-40%] group-hover:duration-500 ease-in-out w-full"
          src={img1}
          alt="pattern"
        />

        <img
          className="absolute left-2/4 translate-x-[-50%] translate-y-[-100%] lg:translate-y-[-44%]"
          src={img2}
          alt="Employee"
        />
      </div>
    </section>
  );
};

export default Banner;
