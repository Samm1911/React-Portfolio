// import React for the aboutme component and mypicture
import React from "react";
import myPicture from '../../img/Sam.JPG'

// about me component that displays my image and a short bio
function AboutMe() {
  return (
    <div className="aboutme pages">
      <h2>About Me</h2>

      <img src={myPicture} alt="Sam" className="my-picture"/>
      <p className="about-me-paragraph">Welcome to my Portfolio! <br/>
      My name is <strong>Sam Gostanian</strong> and I am a full stack web developer. I am currently enrolled in the SCS Full Stack Flex Coding Bootcamp
      at the <em>University of Toronto</em>. This Bootcamp teached me, how to become proficient in the latest front-end and back-end technologies and using those together in a full stack.
      <br/>
      <br/>
      My passion for coding sparked last year, when I had very little knowledge of basic HTML. I took a very short course about Front End, and enjoyed how lines of code turn into life on the screen.
      That is why I continued learning on my phone for web development and found more interest in coding, which led me to the Full Stack Web Development Bootcamp at the U of T.
      <br/>
      <br/>
      Building an application that solves problems for anyone is definitely very rewarding for me, which is why I am very passionate about coding!
      </p>
    </div>
  );
}

export default AboutMe;
