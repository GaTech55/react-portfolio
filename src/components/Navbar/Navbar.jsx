import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          {/* <!-- classNamees added for phone and tablet display. --> */}
          <Link
            className="navbar-brand backgroundColor whiteText familyTimes"
            to="/about"
            id="logo"
          >
            <h3>David K. Brown</h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <!-- Page links for the navbar are displayed below along with an "active" className. --> */}
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav pages ml-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
          {/* <!-- This is the end of the first container. --> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
