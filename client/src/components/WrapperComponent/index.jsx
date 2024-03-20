import React from "react";

import { Element } from "react-scroll";
import AboutMe from "../pages/AboutMe";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import Projects from "../pages/Project";
import Resume from "../pages/Resume";
import Header from "../Header";
import Footer from "../Footer";
import "./WrapperComponent.css";

const WrapperComponent = ({ handleNavClick }) => {
  return (
    // <div className="vh-100 ">
    <div className="wrapper-component">
      <Element name="home" id="home">
        <Home handleNavClick={handleNavClick} />
      </Element>
      <Element name="aboutme" id="aboutme">
        <AboutMe handleNavClick={handleNavClick} />
      </Element>
      <Element name="contact" id="contact">
        <Contact handleNavClick={handleNavClick} />
      </Element>
      <Element name="portfolio" id="portfolio">
        <Portfolio handleNavClick={handleNavClick} />
      </Element>
      <Element name="project" id="porject">
        <Projects handleNavClick={handleNavClick} />
      </Element>
      <Element name="resume" id="resume">
        <Resume handleNavClick={handleNavClick} />
      </Element>
      <Header />
      <Footer />
    </div>
  );
};

export default WrapperComponent;
