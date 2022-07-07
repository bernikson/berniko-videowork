import React from "react";
import Facebook from "../../assets/svgs/Facebook";
import Github from "../../assets/svgs/Github";
import Instagram from "../../assets/svgs/Instagram";
import Twitter from "../../assets/svgs/Twitter";
import "./Footer.css";
import { Link } from "react-scroll";
import Medium from "../../assets/svgs/Medium";

const Footer = () => {
  return (
    <footer>
      <aside>
        <section>
          <div>
            <div id="footer-logo"></div>
            <div id="nav-logo-text" style={{ marginTop: "0.4rem" }}></div>
          </div>
          <p>
            The first live video platform where people who want to learn
            "particular" skills may communicate with top experts from all over
            the world and learn informally in a live session, making learning
            interesting and valuable.
          </p>
          <div id="footer-contact-wrapper">
            <div
              onClick={() =>
                window.open("https://www.instagram.com/videoworkinc/", "_blank")
              }
            >
              <Instagram width={23} height={23} />
            </div>
            <div
              onClick={() =>
                window.open("https://twitter.com/videoworkinc", "_blank")
              }
            >
              <Twitter width={23} height={23} />
            </div>
            <div
              onClick={() =>
                window.open("https://www.facebook.com/videoworkinc", "_blank")
              }
            >
              <Facebook width={23} height={23} />
            </div>
            <div
              onClick={() =>
                window.open("https://medium.com/videoworkinc", "_blank")
              }
            >
              <Medium width={25} height={25} />
            </div>
          </div>
        </section>
        <section>
          <article>
            <h4>Quick Links</h4>
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
            <Link
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              duration={500}
              offset={-60}
            >
              Careers
            </Link>
          </article>
          <article>
            <h4>Community</h4>
            <a href="https://medium.com/videoworkinc" target="_blank">
              Blogs
            </a>
            <a
              href="https://support-videowork.freshdesk.com/support/home"
              target="_blank"
            >
              Support
            </a>
          </article>
          <article>
            <h4>Legal</h4>
            <a
              href="https://www.videowork.com/privacy-policy.pdf"
              target="_blank"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.videowork.com/terms-of-service.pdf"
              target="_blank"
            >
              Term of Service
            </a>
          </article>
        </section>
      </aside>
      <span>© 2022 VideoWork™. All Rights Reserved.</span>
    </footer>
  );
};

export default Footer;
