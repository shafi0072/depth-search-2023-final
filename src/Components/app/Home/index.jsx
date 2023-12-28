import React from "react";
import Banner from "./Banner/index";
import OurServices from "./OurServices/index";
import OurPartners from "../Home/OurPartners/index";
import Projects from "./Projects";
import CaseStudies from "./CaseStudies";
import Contact from "./Contact";
import OurTeam from "./OurTeam";
import Testimonial from "./Testimonial/Testimonial";

const index = () => {
  return (
    <div className="fade-in">
      <Banner />
      <OurPartners />
      <OurServices />
      <Projects />
      {/* <CaseStudies /> */}
      <OurTeam />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default index;
