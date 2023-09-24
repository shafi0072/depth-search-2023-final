import React from "react";
import Marquee from "react-fast-marquee";

const index = () => {
  return (
    <div className="bg-black text-white">
      <h3 className="text-2xl font-semibold text-center py-4">Our Partners</h3>
      <div>
        <Marquee>
          <img className="w-[100px] h-[100px] mr-10" src="https://i.ibb.co/mbpGP4p/c67b96a3d390925e119091454dd426a2-removebg-preview.png" alt="" />
          <img className="w-[100px] h-[100px] mr-10" src="https://i.ibb.co/mbpGP4p/c67b96a3d390925e119091454dd426a2-removebg-preview.png" alt="" />
          <img className="w-[100px] h-[100px] mr-10" src="https://i.ibb.co/mbpGP4p/c67b96a3d390925e119091454dd426a2-removebg-preview.png" alt="" />
          <img className="w-[100px] h-[100px] mr-10" src="https://i.ibb.co/mbpGP4p/c67b96a3d390925e119091454dd426a2-removebg-preview.png" alt="" />
        </Marquee>
      </div>
    </div>
  );
};

export default index;
