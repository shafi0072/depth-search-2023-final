import React from "react";
import webIcon from "../../../../../public/image/services/icons/8759392.png";
import { FaDesktop } from "react-icons/fa";

const Cards = () => {
  return (
    <div className="text-white p-12 bg-[rgb(18,27,33)] rounded">
      <div className="border-b-2 border-gray-500 card-bg relative">
        <h3 className="uppercase text-xl font-bold pb-6">
          Web <br /> development
        </h3>
        <p className="px-1.5 py-1 absolute right-0 bottom-0 inline bg-[rgb(49,56,60)]">
          01
        </p>
      </div>
      <div>
        <FaDesktop className="text-7xl my-4" />
        <p>
          Sed non odio non elit sem <br /> gravida orci dui eleifnd
        </p>
      </div>
    </div>
  );
};

export default Cards;
