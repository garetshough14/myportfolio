import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="nav" className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a href="#" className="navbar-brand fw-bold fs-2">
          <span className="name" >
            Garet Hough
          </span>
        </a>
        <div>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link text-light" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#resume" >
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#skills">
                Skills
              </a>
            </li>
            {/* <li className="nav-item">
                            <Link className="nav-link text-light" to={{hash: "#skills"}}>Links</Link>
                        </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
