import React from "react";
import "./SectionSeven.css";
import { Link } from "react-router-dom";
import Learner from "../../assets/svgs/Learner";
import Money from "../../assets/svgs/Money";
import Child from "../../assets/svgs/Child";
import Global from "../../assets/svgs/Global";
import Calendar from "../../assets/svgs/Calendar";

const SectionSeven = () => {
  return (
    <section id="sectionSeven">
      <aside>
        <h1>What makes Videowork such an amazing platform</h1>
        <Link to="/">Get Started</Link>
      </aside>
      <aside>
        <article>
          <Money width={35} height={35} />
          <h2>Low Pricing</h2>
          <span>
            The courses start from as little as ₹100. You pay in your local
            currency. We support all major payment platforms.
          </span>
        </article>
        <article>
          <Global width={35} height={35} />
          <h2>Truly Global</h2>
          <span>
            VideoWork is being launched around the world in the coming months.
            Imagine learning French from someone in France or learning to cook
            pizza from an Italian chef!
          </span>
        </article>
        <article>
          <Child width={35} height={35} />
          <h2>Safe for Kids</h2>
          <span>
            We have taken special measures to ensure the safety and well-being
            of users below 18. They will not be shown any content marked
            otherwise.
          </span>
        </article>
        <article>
          <Calendar width={35} height={35} />
          <h2>As Per Your Availability</h2>
          <span>
            Since our users are based in different timezones, providers and
            seekers are available round the clock to buy or offer you services.
            Learn or teach whenever you have time.
          </span>
        </article>
      </aside>
    </section>
  );
};

export default SectionSeven;
