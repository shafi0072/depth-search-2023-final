import React, { useEffect, useState } from "react";
import logo from "../../../../public/image/logo/logotwo.png";
import NavManus from "./NavManus";
import { FaPhone } from "react-icons/fa";
import MobileNav from "../Navbar/MobileNav/index";

const index = () => {
  const [windowWidth, setWindowWidth] = useState(null);
  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    handleWindowResize();
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <div>
      {windowWidth < 830 ? (
        <MobileNav></MobileNav>
      ) : (
        <div className="fixed w-full flex justify-between items-center  bg-black px-16 py-8 text-white opacity-60 z-10">
          <div className="flex gap-2 items-center">
            <img
              className="h- w-8"
              src="https://i.ibb.co/5L1dmVz/logotwo.png"
              alt=""
            />
            <h2 className="text-2xl font-bold cursor-pointer">DEPTH SEARCH </h2>
          </div>
          <div>
            <NavManus />
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-primary p-4 rounded-full cursor-pointer">
              <FaPhone />
            </div>
            <h4 className="text-xl font-semibold">+88 01763740664</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default index;
