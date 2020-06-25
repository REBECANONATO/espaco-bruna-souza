import React from 'react';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import TopPage from '../containers/TopPage';
import Gretting from '../containers/Greeting';
import Skills from '../containers/Skills';
// import Projects from '../containers/Projects';
// import Contact from '../containers/Contact';


function Main() {
    return (
        <>
            <Header />
            <Gretting />
            <Skills />
            {/* <Projects />
            <Contact /> */}
            <Footer />
            <TopPage />
        </>
    );
  }

export default Main;