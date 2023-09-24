import React from "react";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
const index = () => {
  return (
    <div>
      <div className="bg-image md:h-[75vh] lg:h-[90vh] w-full text-center flex flex-col items-center justify-center py-12 md:py-0">
        <div className="text-white">
          <h2 className="uppercase text-4xl md:text-5xl lg:text-7xl font-bold">
            Welcome to depth Search
          </h2>
          <p className=" text-xl md:text-3xl font-semibold my-6">
            Unveiling Depths with Innovative Software Solutions!
          </p>
          <div className="mt-10">
            <button className="bg-primary px-6 py-4 rounded text-xl mr-4">
              GET A QOUTE
            </button>
            <button className="hidden md:inline bg-white text-black px-6 py-4 rounded text-lg">
              EXPLORE MORE
            </button>
          </div>
        </div>
        <div className="mt-8 cursor-pointer animate-pulse relative ">
            <div className="signal mt-1"></div>
          <PlayCircleOutlineOutlinedIcon className="absolute top-1 right-0"
            sx={{ fontSize: "100px", color: "white" }}
          />
        </div>
      </div>
    </div>
  );
};

export default index;
