import Link from "next/link";
import React from "react";

const MobileNavMenu = () => {
  return (
    <div className="bg-black px-3">
      <ul className="">
        <Link href='/' className="border-b-2 block border-gray-200 p-3 text-xl font-semibold">Home</Link>
        <li className="border-b-2 border-gray-200 p-3 text-xl font-semibold">Services</li>
        <li className="border-b-2 border-gray-200 p-3 text-xl font-semibold">Portfolio</li>
        <li className="border-b-2 border-gray-200 p-3 text-xl font-semibold">Blog</li>
        <Link href='/case-studies' className="border-b-2 block border-gray-200 p-3 text-xl font-semibold">Case Studies</Link>
        <Link href='/about' className="border-b-2 block border-gray-200 p-3 text-xl font-semibold">About</Link>
        <li className="border-b-2 border-gray-200 p-3 text-xl font-semibold">Contact</li>
      </ul>
    </div>
  );
};

export default MobileNavMenu;
