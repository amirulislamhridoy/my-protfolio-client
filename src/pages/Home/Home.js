import React from 'react';
import About from './About';
import Banner from './Banner';
import ContactMe from './ContactMe';
import Projects from './Projects';
import Skill from './Skill';

const Home = () => {
    return (
        <main>
            <Banner></Banner>
            <Projects></Projects>
            {/* <Skill></Skill> */}
            <About></About>
            <ContactMe></ContactMe>
        </main>
    );
};

export default Home;