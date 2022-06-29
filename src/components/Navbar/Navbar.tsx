import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Whatsapp from "../../assets/svgs/Whatsapp";
import Menu from "../../assets/svgs/Menu";
import { useState } from "react";

const Navbar = () => {
  const [resNav, triggerResNav] = useState(false);

  return (
    <nav>
      <aside id="left-nav">
        <div id="nav-logo"></div>
        <h1>VideoWork</h1>
      </aside>
      <aside id="right-nav">
        <ul className={resNav ? 'res-nav-dropdown' : undefined}>
          <li>
            <NavLink
              className={(isActive) : string =>
                "nav-link" + (!isActive ? " unselected" : "")
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/home">Features</NavLink>
          </li>
          <li>
            <NavLink to="/home">Testimonials</NavLink>
          </li>
          <li>
            <NavLink to="/home">About</NavLink>
          </li>
          <li>
            <div>
              <Whatsapp width={25} height={25} />
              <NavLink to="/contact">Contact Us</NavLink>
            </div>
          </li>
        </ul>
        <div onClick={() => triggerResNav(!resNav)} id="res-nav-trigger">
          <Menu width={45} height={45} />
        </div>
      </aside>
    </nav>
  );
};

export default Navbar;
