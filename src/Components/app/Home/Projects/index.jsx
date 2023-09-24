import React from "react";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

const Projects = () => {
  return (
    <div className="projectBackground py-16">
      <div className="text-center">
        <h4 className="uppercase text-2xl font-semibold ">
          EXPLORE OUR PORTFOLIO
        </h4>
        <h2 className="text-4xl md:text-5xl my-3 font-semibold">
          Featured Web Development Projects
        </h2>
        <p className="text-2xl font-semibold">
          Custom B2B & B2C Digital Experiences Engineered To Perform
        </p>
      </div>
      <div className="flex gap-12 items-center justify-center my-16">
        <div className="flex flex-col items-center">
          <StarBorderOutlinedIcon />
          <h2>FEATURED</h2>
        </div>
        <div className="flex flex-col items-center">
          <StarBorderOutlinedIcon />
          <h2>FEATURED</h2>
        </div>
        <div className="flex flex-col items-center">
          <StarBorderOutlinedIcon />
          <h2>FEATURED</h2>
        </div>
        <div className="flex flex-col items-center">
          <StarBorderOutlinedIcon />
          <h2>FEATURED</h2>
        </div>
      </div>
    </div>
  );
};

export default Projects;
