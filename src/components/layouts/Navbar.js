import React from "react";
import { Link } from "react-router-dom";
import "../../css/materializeOverides.css";
import '../../css/globalCustom.css';



const Navbar = ({ title }) => {
  return (
    <div>
      <nav className="nav-wrapper brown">
        <div>
          <a href="#" className="brand-logo"><img className="navbar_img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png"></img>
            REACT BURGERS!
          </a>
          <a href="#" className="sidenav-trigger" data-target="mobile-links">
            <i
              className="material-icons"
            >
              menu
            </i>
          </a>

          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
    </div>
  );
};
Navbar.defaultProps = {
  title: "React Wiki"
};

export default Navbar;
