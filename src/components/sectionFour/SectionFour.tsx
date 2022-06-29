import React from "react";
import { Link } from "react-router-dom";
import Circles from "../../assets/svgs/Circles";
import Learner from "../../assets/svgs/Learner";
import Liveicon from "../../assets/svgs/Liveicon";
import Richmediaicon from "../../assets/svgs/Richmediaicon";
import "./SectionFour.css";

const SectionFour = () => {
  return (
    <section id="sectionFour">
      <div id="circle-decor-v2">
        <Circles width={90} height={140} />
      </div>

      <article>
        <Liveicon width={35} height={35} />
        <h2>Live</h2>
        <span>
          Get paid by doing live broadcast or the two-way one-on-one
          communication session with your learners or fans paying you on a
          per-session payment model.
        </span>
        <Link to="/">I Want to Learn</Link>
        <div></div>
        <ul>
          <li>Go with video or audio-only</li>
          <li>Add moderators to assist</li>
          <li>Create on-the-spot instant services</li>
        </ul>
      </article>
      <article>
        <Richmediaicon width={35} height={35} />
        <h2>Rich Media</h2>
        <span>
          Get paid for the content you create (any form of rich media), it’s
          your wish how often and when you want to share the content. Your
          learners or fans pay you on a monthly subscription model.
        </span>
        <Link to="/">I Want to Teach</Link>
        <div></div>
        <ul>
          <li>Send updates instantly to learners</li>
          <li>Charge them for asking questions</li>
          <li>Send video, images or plain text</li>
        </ul>
      </article>
    </section>
  );
};

export default SectionFour;
