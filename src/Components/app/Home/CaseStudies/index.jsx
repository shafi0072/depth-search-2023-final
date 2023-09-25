import React, { useState } from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { caseStudies } from "@/src/constant/caseStudies";

const CaseStudies = () => {
  const [selectedCase,setSelectedCase] = useState("Caching Optimization");
  const caseStudy = caseStudies.find(c=>c.name === selectedCase);
  console.log(caseStudy)

  return (
    <div className="lg:flex">
      <div className="w-full lg:w-2/6 h-[800px]">
        <LeftSide selectedCase={selectedCase} setSelectedCase={setSelectedCase} />
      </div>
      <div className="w-full lg:w-4/6">
        <RightSide caseStudy={caseStudy} />
      </div>
    </div>
  );
};

export default CaseStudies;
