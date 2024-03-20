import React from "react";
// import Project components
import Project from "./Project";

// Portfolio component that uses the Project component with the same structure but different values for each Project
function Portfolio() {
  return (
    <div className="portfolio pages">
      <h2>Portfolio</h2>
      <div className="d-flex flex-wrap">
        {/* Film */}
        <Project
          className="Film single-project"
          link="https://samm1911.github.io/Film-Finder/"
          title="Film Finder"
          githublink="https://github.com/Samm1911/Film-Finder"
          description="Film Finder Website"
        />
        {/* Workout */}
        <Project
          // pass in classes for individual project to handle different backgrounds and single project class
          className="Workout single-project"
          // pass link for the deployed app
          link="https://newworkoutbuddy-app-72d0413499ee.herokuapp.com/"
          // pass in title of app
          title="Work Out Buddy App"
          // pass in corresponding github link
          githublink="https://github.com/Samm1911/Workoutbuddy-app"
          // technical description for corresponding app
          description="Workout Buddy"
        />

        {/* Weather */}
        <Project
          className="Weather single-project"
          link="https://samm1911.github.io/06-Server-Side-APIs-Weather-Dashboard/"
          title="Weather Dashboard"
          githublink="https://github.com/Samm1911/06-Server-Side-APIs-Weather-Dashboard"
          description="Front-end app with server-side APIs"
        />
        {/* Tech Blog */}
        <Project
          className="my-tech-blog single-project"
          link="https://mvc-tech-app-5c80a2d57368.herokuapp.com/"
          title="Tech Blog"
          githublink="https://github.com/Samm1911/MVC-Tech-Blog"
          description="MVC APP"
        />
        {/* Social Network API */}
        <Project
          className="social-network-api single-project"
          link="https://drive.google.com/file/d/1cZCW73Xf2bDR7NwB1wG0LGbm1VXSkN0e/view?usp=drive_link"
          title="Social Network API"
          githublink="https://github.com/Samm1911/Social-Network-API"
          description="Back-end Express.js app with MongoDB"
        />
        {/* Employee-Tracker
        <Project
          className="employee-tracker single-project"
          link="https://drive.google.com/file/d/1J8Eac3SRjXf4tKRDQbD1gBVwkK4TMqTl/view"
          title="Employee Tracker"
          githublink="https://github.com/PythonFabi/my-employee-tracker"
          description="Node.js App with SQL"
        /> */}
        {/* Photography */}
        <Project
          className="Photography single-project"
          link="https://samm1911.github.io/Sam-Gostanian-Photography/"
          title="Weather dashboard"
          githublink="https://github.com/Samm1911/Sam-Gostanian-Photography"
          description="Photography Website"
        />
      </div>
    </div>
  );
}

export default Portfolio;
