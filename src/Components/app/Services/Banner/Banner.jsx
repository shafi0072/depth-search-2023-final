import React from 'react';

const Banner = () => {
    return (
        <div className="fadeBottom md:h-[60vh] md:pt-52 mb-20 w-full text-center flex flex-col items-center justify-center">
      <div className="text-white">
        <h1 className="uppercase text-xl md:text-2xl lg:text-3xl font-bold">
        FROM CONCEPT TO REALITY
        </h1>
        <h2 className=" text-xl md:text-4xl lg:text-7xl md:mx-[200px] font-semibold my-6 ">
        Fusing Creativity With Marketing & Technology To Drive Business Growth
        </h2>
        <div className="mt-14">
          <button className="uppercase bg-primary px-6 py-4 rounded text-xl mr-4">
          SPEAK WITH OUR EXPERTS
          </button>

        </div>
      </div>
    </div>
    );
};

export default Banner;