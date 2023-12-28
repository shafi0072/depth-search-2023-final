import React from "react";
import Link from "next/link";
const Banner = () => {
  return (
    <div className="fadeBottom md:h-[60vh] md:pt-52 mb-20 w-full text-center flex flex-col items-center justify-center">
      <div className="text-white">
        <h1 className="uppercase text-xl md:text-2xl lg:text-3xl font-bold">
          Empowering Your Digital Journey!
        </h1>
        <h2 className="uppercase text-xl italic md:text-3xl lg:text-5xl md:mx-[200px] font-semibold my-6 ">
          Custom Web, Mobile, and Marketing Solutions Tailored for your Business
          success
        </h2>
        <div className="mt-14">
          <Link
            href={"contact-us"}
            className="uppercase bg-primary px-6 py-4 rounded text-xl mr-4"
          >
            Contact With Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
