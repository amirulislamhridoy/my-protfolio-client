import React from 'react';
import About from './About';
import Banner from './Banner';
import ContactMe from './ContactMe';
import Projects from './Projects';

const Home = () => {
    return (
        <main>
            <Banner></Banner>
            <Projects></Projects>
            <About></About>
            <ContactMe></ContactMe>
            {/* <ContactMe></ContactMe> */}
        </main>
    );
};

export default Home;