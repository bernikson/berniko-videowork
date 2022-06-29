import React from "react";
import "./SectionFive.css";
import { Link } from "react-router-dom";

const SectionFive = () => {
  return (
    <section id="sectionFive">
      <aside>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </aside>
      <aside>
        <h1>
          Enabling <span>video entrepreneurs</span> to teach amazing skills to
          learners around the world
        </h1>
        <Link to="/">Become Provider</Link>
      </aside>
    </section>
  );
};

export default SectionFive;
