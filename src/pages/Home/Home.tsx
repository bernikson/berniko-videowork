import "./Home.css";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import SectionTwo from "../../components/SectionTwo/SectionTwo";
import SectionThree from "../../components/sectionThree/SectionThree";
import SectionFour from "../../components/sectionFour/SectionFour";
import SectionFive from "../../components/sectionFive/SectionFive";
import SectionSix from "../../components/sectionSix/SectionSix";
import SectionSeven from "../../components/sectionSeven/SectionSeven";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <Footer />
    </main>
  );
};

export default Home;
