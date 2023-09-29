import React from "react";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
  return (
    <div className="bg-[#121B21]">
      <div className="max-w-screen-2xl mx-auto px-16 pt-16 pb-10">
        <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-16 ">
          <div>
            <h2 className="text-xl font-semibold uppercase mb-2">United State</h2>

            <p className="text-xl">North Miami Beach</p>
            <p>Florida</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold uppercase mb-2">India</h2>

            <p className="text-xl">
              S R Iriz, Iriz, No. 889 6th Floor, Baner - Pashan Link Rd, Pune,
            </p>
            <p>Maharashtra 411021,India</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold  uppercase mb-2">Bangladesh</h2>

            <p className="text-xl"> Bangobandu High Tech Park</p>
            <p>Rajshahi,Bangladesh</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">CONTACT</h2>
            <div className="space-y-3">
              <p className="flex items-center gap-2">
                <LocalPhoneOutlinedIcon />
                +8801763740664
              </p>
              <p className="flex items-center gap-2">
                <LocalPhoneOutlinedIcon />
                depthsearch.official@gmail.com
              </p>
              <p className="-ml-3">
                <ArrowRightIcon sx={{ fontSize: "50px" }} />
                <a
                  className="cursor-pointer hover:text-blue-500"
                  target="blank"
                  href="https://www.designrush.com/agency/profile/depth-search"
                >
                  Visit us in DESIGNRUSH
                </a>
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
