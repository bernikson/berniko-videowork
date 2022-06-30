import React from "react";
import "./Navbar.css";
import Whatsapp from "../../assets/svgs/Whatsapp";
import Menu from "../../assets/svgs/Menu";
import { Link } from "react-scroll";
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
        <ul className={resNav ? "res-nav-dropdown" : undefined}>
          <li>
            <Link
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              duration={500}
              offset={-60}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="sectionSeven"
              spy={true}
              smooth={true}
              duration={500}
              offset={-60}
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="sectionSix"
              spy={true}
              smooth={true}
              duration={500}
              offset={-60}
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="sectionThree"
              spy={true}
              smooth={true}
              duration={500}
              offset={-60}
            >
              About
            </Link>
          </li>
          <li onClick={() => window.open("https://wa.link/190xqc", "_blank")}>
            <div>
              <Whatsapp width={25} height={25} />
              <Link
                to="/"
                onClick={() => window.open("https://wa.link/190xqc", "_blank")}
              >
                Contact Us
              </Link>
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
