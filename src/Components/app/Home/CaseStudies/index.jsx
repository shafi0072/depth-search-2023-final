import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const CaseStudies = () => {

  return (
    <div>
      <div className="w-2/6">
        <LeftSide />
      </div>
      <div className="w-4/6">
        <RightSide />
      </div>
    </div>
  );
};

export default CaseStudies;
