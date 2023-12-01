import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const MobileNavMenu = () => {
  const router = useRouter();
  return (
    <div className="bg-black px-3">
      <ul className="">
        <Link href='/' className="border-b-2 block border-gray-200 p-3 text-xl font-semibold">Home</Link>
        <li onClick={()=>router.push("/services")} className="border-b-2 border-gray-200 p-3 text-xl font-semibold">Services</li>
        <li className="border-b-2 border-gray-200 p-3 text-xl font-semibold">Portfolio</li>
<<<<<<< HEAD
        <Link href='/Blogs' className="border-b-2 border-gray-200 p-3 text-xl font-semibold">Blog</Link>
        <Link href='/case-studies' className="border-b-2 block border-gray-200 p-3 text-xl font-semibold">Case Studies</Link>
=======
        <li className="border-b-2 border-gray-200 p-3 text-xl font-semibold">Blog</li>
        {/* <Link href='/case-studies' className="border-b-2 block border-gray-200 p-3 text-xl font-semibold">Case Studies</Link> */}
>>>>>>> d437fdba2086d96d8f5b5db1bf6c2d96ca9740d1
        <Link href='/about' className="border-b-2 block border-gray-200 p-3 text-xl font-semibold">About</Link>
        <li onClick={()=>router.push("contact")} className="border-b-2 border-gray-200 p-3 text-xl font-semibold">Contact</li>
      </ul>
    </div>
  );
};

export default MobileNavMenu;
