import React from "react";
import { Link } from "react-router-dom";
import Circles from "../../assets/svgs/Circles";
import Learner from "../../assets/svgs/Learner";
import Quotes from "../../assets/svgs/Quotes";
import "./SectionSix.css";

const SectionSix = () => {
  return (
    <section id="sectionSix">
      <div id="circle-decor">
        <Circles width={90} height={140} />
      </div>
      <h1>
        What <span>People</span> Say About Us?
      </h1>
      <aside>
        <article>
          <aside>
            <div></div>
            <div>
              <h5>Shivom Mishra</h5>
              <h6>Devloper</h6>
            </div>
            <div>
              <Quotes width={40} height={40} />
            </div>
          </aside>
          <span>
            Really think that this can generate good passive income for
            creators.
          </span>
        </article>
        <article>
          <aside>
            <div></div>
            <div>
              <h5>Deepika Goyal</h5>
              <h6>Marketing Specialist</h6>
            </div>
            <div>
              <Quotes width={40} height={40} />
            </div>
          </aside>
          <span>After checking demo, I am now excited to use the app.</span>
        </article>
        <article>
          <aside>
            <div></div>
            <div>
              <h5>Keshav Mundhra</h5>
              <h6>Teacher</h6>
            </div>
            <div>
              <Quotes width={40} height={40} />
            </div>
          </aside>
          <span>Demo was AWESOME. Very cool idea!</span>
        </article>
      </aside>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default SectionSix;
