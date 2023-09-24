import React from "react";

const MobileNavMenu = () => {
  return (
    <div className="bg-[#F0F0F3] px-3">
      <ul className="">
        <li className="border-b-2 border-gray-200 p-3 text-xl font-semibold">Home</li>
        <li className="border-b-2 border-gray-200 p-3 text-xl font-semibold">Services</li>
        <li className="border-b-2 border-gray-200 p-3 text-xl font-semibold">Portfolio</li>
        <li className="border-b-2 border-gray-200 p-3 text-xl font-semibold">Blog</li>
        <li className="border-b-2 border-gray-200 p-3 text-xl font-semibold">About</li>
        <li className="border-b-2 border-gray-200 p-3 text-xl font-semibold">Contact</li>
      </ul>
    </div>
  );
};

export default MobileNavMenu;
