import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <header id="hero">
      <aside id="left-header">
        <h1>
          Creators platform to provide <span>live</span> and{" "}
          <span>recorded</span> courses
        </h1>
        <h6>
          Lets connect with top trainers. Join our waitlist to immerse in the
          perfect mix of hybrid learning with live + recorded sessions
        </h6>
        <div>
          <input type="text" placeholder="Please enter your email address " />
          <Link to="/">Join waitlist</Link>
        </div>
      </aside>
      <aside id="right-header">
        <div></div>
      </aside>
    </header>
  );
};

export default Hero;
