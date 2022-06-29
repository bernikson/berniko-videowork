import React from "react";
import { Link } from "react-router-dom";
import Circles from "../../assets/svgs/Circles";
import Learner from "../../assets/svgs/Learner";
import LearnerTwo from "../../assets/svgs/LearnerTwo";
import "./SectionTwo.css";

const SectionTwo = () => {
  return (
    <section id="sectionTwo">
      <div id="circle-decor">
        <Circles width={90} height={140} />
      </div>

      <article>
        <Learner width={25} height={30} />
        <h2>Join as a Learner</h2>
        <span>
          We have hundreds of experts ready to teach you all the skills you’re
          looking to learn.
        </span>
        <Link to="/">I Want to Learn</Link>
      </article>
      <article>
        <LearnerTwo width={35} height={35} />
        <h2>Join as a Expert</h2>
        <span>
          We have hundreds of experts ready to teach you all the skills you’re
          looking to learn.
        </span>
        <Link to="/">I Want to Teach</Link>
      </article>
    </section>
  );
};

export default SectionTwo;
