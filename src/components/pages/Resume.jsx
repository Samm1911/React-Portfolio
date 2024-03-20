import React from "react";
// import resume
import myResume from '../../docs/Samia Gostanian - Web Development.pdf';

function Resume() {
  return (
    <div className="resume pages">
      <h2>Resume</h2>
      {/* create download link for my resume */}
      <p>
        Download my{" "}
        <a
          href={myResume}
          download="Samia Gostanian - Web Development.pdf"
          className="resume-download"
        >
          resume
        </a>
      </p>

      {/* display proficiencies in ul for front-end back-end and full stack */}
      <div className="proficiencies">
        <h3>Front-end Proficiencies</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Handlebars</li>
          <li>Bootstrap</li>
        </ul>
      </div>

      <div className="proficiencies">
        <h3>Back-end Proficiencies</h3>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>

      <div className="proficiencies">
        <h3>Full Stack Proficiencies</h3>
        <ul>
          <li>MERN</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;