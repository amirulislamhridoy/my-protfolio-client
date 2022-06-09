import React from "react";
import img from "../../images/about.jpg";

const About = () => {
  return (
    <section className='mt-16' id='about-me'>
      <h1 className="text-center text-3xl font-bold mb-4 text-[#ff4321]">ABOUT ME</h1>

      <div class="card card-side bg-base-100 shadow flex-col md:flex-row">
        <figure className="max-w-2xl mx-5 md:mx-0">
          <img src={img} className='rounded-3xl' alt="Movie" />
        </figure>

        <div class="card-body justify-center">
          <h2 class="card-title">Hi I'm Amirul Islam Hridoy</h2>
          <h2 className='my-2'>
            I am a Web or React or Front-End Developer. I can do create a full
            website. I develop services for customers specializing in creating
            stylish, modern website. Now I am a Junior Web Developer and try
            everyday to know more.
          </h2>
          <div>Phone: 01518325108 / 01634440690</div>
          <div>Email: amirulislamhriody@gmail.com</div>
          <address>Address: Gazipur District, Dhaka, Bangladesh</address>
          <button className='btn btn-warning'>Contact Me</button>
        </div>
      </div>
    </section>
  );
};

export default About;
