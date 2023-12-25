import React, { useEffect, useState } from "react";
import logo from "../../../../public/image/logo/logotwo.png";
import NavManus from "./NavManus";
import { FaInstagram, FaLinkedin, FaPhone, FaVoicemail, FaWhatsapp } from "react-icons/fa";
import MobileNav from "../Navbar/MobileNav/index";
import EmailIcon from '@mui/icons-material/Email';
import { Instagram, LinkedIn, Phone, WhatsApp } from "@mui/icons-material";

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
      {windowWidth < 1250 ? (
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
          <div className="flex items-center gap-2">
            <div className="bg-primary p-3 rounded-full cursor-pointer">
              <a href="tel:+88 01763740664"><Phone /></a>
            </div>
            <div className="bg-primary p-3 rounded-full cursor-pointer">
              <a href="https://wa.me/+8801763740664"><WhatsApp /></a>
            </div>
            <div className="bg-primary p-3 rounded-full cursor-pointer">
              <Instagram />
            </div>
            <div className="bg-primary p-3 rounded-full cursor-pointer">
              <LinkedIn />
            </div>
            <div className="bg-primary p-3 rounded-full cursor-pointer">
              <a href="mailto:deapth.search.it@gmail.com"><EmailIcon /></a>
            </div>
            {/* <h4 className="text-xl font-semibold">+88 01763740664</h4> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default index;
