import React from 'react';

const Skill = () => {
    
    return (
        <section id='skill'>
           <h1 className="text-center text-2xl md:text-3xl font-bold mb-4 text-[#ff4321]"><span className='hover:border-b-4 duration-300 border-[#ff4321]'>SKILLS</span></h1>

           <div className='flex flex-wrap justify-center'>
                <button className='btn sm:btn btn-sm mx-1' data-aos="zoom-in">HTML</button>
                <button className='btn sm:btn btn-sm mx-1' data-aos="zoom-in">HTML5</button>
                <button className='btn sm:btn btn-sm mx-1' data-aos="zoom-in">CSS</button>
                <button className='btn sm:btn btn-sm mx-1' data-aos="zoom-in">CSS3</button>
                <button className='btn sm:btn btn-sm mx-1' data-aos="zoom-in">Bootstrap</button>
                <button className='btn sm:btn btn-sm mx-1' data-aos="zoom-in">Tailwind css</button>
                <button className='btn sm:btn btn-sm mx-1' data-aos="zoom-in">DaisyUI</button>
                <button className='btn sm:btn btn-sm mx-1' data-aos="zoom-in">JavaScript</button>
                <button className='btn sm:btn btn-sm mx-1' data-aos="zoom-in">Rest API</button>
                <button className='btn sm:btn btn-sm mx-1' data-aos="zoom-in">React</button>
                <button className='btn sm:btn btn-sm mx-1' data-aos="zoom-in">Redux</button>
                <button className='btn sm:btn btn-sm mx-1' data-aos="zoom-in">React Router</button>
                <button className='btn sm:btn btn-sm mx-1' data-aos="zoom-in">Firebase</button>
                <button className='btn sm:btn btn-sm mx-1' data-aos="zoom-in">Firebase Hooks</button>
                <button className='btn sm:btn btn-sm mx-1' data-aos="zoom-in">Authentication</button>
                <button className='btn sm:btn btn-sm mx-1' data-aos="zoom-in">Authorization</button>
                <button className='btn sm:btn btn-sm mx-1' data-aos="zoom-in">MongoDB</button>
                <button className='btn sm:btn btn-sm mx-1' data-aos="zoom-in">Node JS</button>
                <button className='btn sm:btn btn-sm mx-1' data-aos="zoom-in">Express JS</button>
           </div>
        </section>
    );
};

export default Skill;