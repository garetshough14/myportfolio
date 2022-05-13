import React from "react";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <>
      <div className="bg-light rounded-3 border p-3 mb-3 mt-3" id="about">
        <p className="profile fw-bold fs-2">About Me</p>
        <p>
          Hi my name is Garet Hough I was born and raised in Bakersfield
          California and is where I currently reside, I have many hobbies that I
          enjoy which include watching movies, programming of any sorts,
          drawing, and hanging out with my friends and family.
        </p>
        <div className="d-grid">
          <a className="redred btn w100 bg-dark" href="#">Back To Top</a>
        </div>
      </div>

      <div className="bg-light rounded-3 border p-3 mb-3 mt-3" id="skills">
        <p className="skills fw-bold fs-2">Skills</p>

        <div className="skillsBox">
          <div className="Skills">
            <h2>HTML</h2>
            <div className="progress">
              <div className="percent" style={{ width: "80%" }}>
                80%
              </div>
            </div>
          </div>
        </div>

        <div className="skillsBox">
          <div className="Skills">
            <h2>CSS</h2>
            <div className="progress">
              <div className="percent" style={{ width: "85%" }}>
                85%
              </div>
            </div>
          </div>
        </div>

        <div className="skillsBox">
          <div className="Skills">
            <h2>Bootstrap</h2>
            <div className="progress">
              <div className="percent" style={{ width: "50%" }}>
                50%
              </div>
            </div>
          </div>
        </div>
        <div className="skillsBox">
          <div className="Skills">
            <h2>JavaScript</h2>
            <div className="progress">
              <div className="percent" style={{ width: "65%" }}>
                65%
              </div>
            </div>
          </div>
        </div>

        <div className="skillsBox">
          <h2>React</h2>
          <div className="Skills">
            <div className="progress">
              <div className="percent" style={{ width: "65%" }}>
                65%
              </div>
            </div>
          </div>
        </div>

        <div className="skillsBox">
          <h2>Node</h2>
          <div className="Skills">
            <div className="progress">
              <div className="percent" style={{ width: "90%" }}>
                90%
              </div>
            </div>
          </div>
        </div>

        <div className="redred d-grid">
          <a className=" redred btn w100 bg-dark" href="#">Back To Top</a>
        </div>
      </div>

      <div className="bg-light rounded-3 border p-3 mb-3 mt-3" id={"resume"}>
        <p className="projects fw-bold fs-2">Resume</p>
        <ul>
          <li className="resumeBullets">
            Graduated from Bakersfield Christian Highschool in 2017.
          </li>
          <li className="resumeBullets">
            Attended Arizona Statue University until transferring back home to a
            college in my hometown which is Bakersfield College.
          </li>
          <li className="resumeBullets">
            Pursuing a B.A in computer sciences.
          </li>
          <li className="resumeBullets">
            Fortunately I was hired on to an apprenticeship by Bitwise as a
            React Native developer.{" "}
          </li>
          <li className="resumeBullets">
            Since 2019 I have done over 1000 hours of volunteer work at Higher
            Ground Church located in Bakersfield, California
          </li>
        </ul>
        <div className="d-grid">
          <a className="redred btn w100 bg-dark" href="#">Back To Top</a>
        </div>
      </div>

      <div className="bg-light rounded-3 border p-3 mb-3 mt-3" id={"projects"}>
        <p className="resume fw-bold fs-2">Projects</p>
        <p>
          I have worked on may different projects over the past few years as I
          have started programming, many of my great projects I have been
          involved in come from my work which can be seen on my github with the
          given link!
          <a className="githubLink" to="https://github.com/garetshough14">
            Github
          </a>
        </p>
        <div className="d-grid">
          <a className="redred btn w100 bg-dark" href="#">Back To Top</a>
        </div>
      </div>
    </>
  );
};

export default Content;
