import React from 'react';
import About from './About';
import Banner from './Banner';
import Projects from './Projects';

const Home = () => {
    return (
        <main>
            <Banner></Banner>
            <Projects></Projects>
            <About></About>
        </main>
    );
};

export default Home;