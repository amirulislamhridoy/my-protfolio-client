import React from "react";
import bg from "../../images/pattern.png";
import imgMain from "../../images/main.png";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Banner.css";

const Banner = () => {
  const navigate = useNavigate();
  AOS.init();

  return (
    <section className="group md:flex items-center h-screen gap-5">
      <div
        className="pt-8 md:pt-8 flex-1 md:flex flex-col justify-center  mx-5 lg:mx-0"
        data-aos="fade-up-right"
      >
        <h1 className="text-3xl md:text-5xl font-bold">Amirul Islam Hridoy</h1>
        <h2 className="text-[#ff4321] text-2xl md:text-4xl font-semibold my-3 my-animation">
          J
        </h2>

        <p className="font-medium text-lg mb-3">
          I like to craft solid and scalable web development with great user
          experiences. Because I want to learn more. If I know more, I will do
          better.
        </p>
        {/* <a href="https://drive.google.com/file/d/1_iCOFZqQSWmW-YzXF4S0RY7mq4tQ7nbF/view?usp=sharing" className='btn btn-primary btn-outline w-52' download target="_blank">Download Resume</a> */}

        <a href='https://drive.google.com/uc?export=download&id=1_iCOFZqQSWmW-YzXF4S0RY7mq4tQ7nbF' className='btn btn-primary btn-outline w-52' download>Download Resume</a>
      </div>
      
      <div
        className="flex-1 flex items-center justify-center"
        data-aos="fade-up-left"
        style={{
          background: `url("${bg}")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <img className="rounded-full scale-90 mx-auto group-hover:scale-100 duration-700 ease-in" src={imgMain} alt="" />
      </div>
    </section>
  );
};

export default Banner;

{
  /* <div className="flex-1 relative" data-aos="fade-up-left">
        <img
          className="w-4/5 max-w-xl absolute left-2/4 translate-x-[-50%] translate-y-[-100%] md:translate-y-[-50%] group-hover:translate-y-[-90%] md:group-hover:translate-y-[-40%] group-hover:duration-500 ease-in-out w-full"
          src={img1}
          alt="pattern"
        />

        <img
          className="w-4/5 absolute left-2/4 translate-x-[-50%] translate-y-[-100%] md:translate-y-[-44%]"
          src={img2}
          alt="Employee"
        />
      </div> */
}
