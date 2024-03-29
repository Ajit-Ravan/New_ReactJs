import "./App.css";

import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from 'react-router-dom';
function Navbar(props) {
  return (
    <>
      {/* here below line we are using javascript for styling */}
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a> */}
                <NavLink className="nav-link active" to='/'>Home</NavLink>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#">
                  {props.link}
                </a> */}
                {/* Instead of above code we use below code in react for rendering */}
                <NavLink className='nav-link' to='/About'> About</NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form> */}
            <div className={`form-check form-switch-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                Switch mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;

// we can add propTypes here also

Navbar.propTypes = {
  title: PropTypes.string,
};

//we cans use the default props if the data is not passed through the props
//IF THE VALUE WE DECLARED IN THE APP.JS FOR THE TITLE IS NOT WORKING/ WE CANNOT PASS VALUE THEN THIS DEFAULT VALUE WILL WORK
Navbar.defaultProps = {
  title: "new title value ",
};
