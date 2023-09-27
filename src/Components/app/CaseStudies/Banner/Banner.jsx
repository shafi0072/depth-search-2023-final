import React from 'react';

const Banner = () => {
  return (
    <div className=" md:h-[60vh]  w-full text-center flex flex-col items-center justify-center py-12 md:py-0">
      <div className="text-white">
        <h1 className="uppercase text-xl md:text-2xl lg:text-3xl font-bold">
          CASE STUDIES
        </h1>
        <h2 className=" text-xl md:text-4xl lg:text-7xl font-semibold my-6">
          We Focus On Driving Measurable Results
        </h2>
        <div className="mt-10">
          <button className="uppercase bg-primary px-6 py-4 rounded text-xl mr-4">
            Request a proposal
          </button>

        </div>
      </div>
    </div>
  );
};

export default Banner;