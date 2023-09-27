import React from "react";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
  return (
    <div className="bg-[#121B21]">
      <div className="max-w-screen-2xl mx-auto px-16 pt-16 pb-10">
        <div className=" grid grid-cols-1 lg:grid-cols-4 gap-16">
          <div>
            <h2 className="text-3xl font-semibold">United State</h2>

            <p className="text-xl">Florida</p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold">United State</h2>

            <p className="text-xl">Florida</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">LEGAL</h2>
            <div className="space-y-3">
              <p>Term Of Use</p>
              <p>Privacy policy</p>
              <p>Cookie policy</p>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">CONTACT</h2>
            <div className="space-y-3">
              <p className="flex items-center gap-2">
                <LocalPhoneOutlinedIcon />
                +88017894954
              </p>
              <p className="flex items-center gap-2">
                <LocalPhoneOutlinedIcon />
                depthsearch.official@gmail.com
              </p>
              <div className="flex items-center gap-4 pt-3">
                <LinkedInIcon sx={{ fontSize: "30px" }} />
                <FacebookIcon sx={{ fontSize: "30px" }} />
                <InstagramIcon sx={{ fontSize: "30px" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="text-white text-center pt-12">
          <hr className="max-w-screen-md mx-auto mb-4" />
          Copyright © 2023 - All right reserved by Depth Search IT Limited
        </div>
      </div>
    </div>
  );
};

export default Footer;
