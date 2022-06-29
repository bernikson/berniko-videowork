import React from "react";
import Facebook from "../../assets/svgs/Facebook";
import Github from "../../assets/svgs/Github";
import Instagram from "../../assets/svgs/Instagram";
import Twitter from "../../assets/svgs/Twitter";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <aside>
        <section>
          <div>
            <div id="footer-logo"></div>
            <h1>VideoWork</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet,adipiscing elit. Eu, montes, metus
            porttitor consectetur pretium. Euismod imperdiet
          </p>
          <div id="footer-contact-wrapper">
            <div>
              <Instagram width={23} height={23} />
            </div>
            <div>
              <Twitter width={23} height={23} />
            </div>
            <div>
              <Facebook width={23} height={23} />
            </div>
            <div>
              <Github width={23} height={23} />
            </div>
          </div>
        </section>
        <section>
          <article>
            <h4>Quick Links</h4>
            <Link to="/">About</Link>
            <Link to="/">Careers</Link>
          </article>
          <article>
            <h4>Community</h4>
            <Link to="/">Blogs</Link>
            <Link to="/">Support</Link>
          </article>
          <article>
            <h4>Legal</h4>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Term of Service</Link>
          </article>
        </section>
      </aside>
      <span>© 2022 VideoWork™. All Rights Reserved.</span>
    </footer>
  );
};

export default Footer;
