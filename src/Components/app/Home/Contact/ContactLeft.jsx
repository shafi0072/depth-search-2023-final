import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
const ContactLeft = () => {
  return (
    <div>
      <p className="text-2xl font-semibold text-blue-500">
        TAKE THE SILK ROAD TO
      </p>

      <h2 className="text-4xl  xl:text-5xl mt-4">
        Digitizing Your Business <br /> Growth
      </h2>
      <div className="mt-56 flex items-center gap-10">
        <h1 className="border-b border-2 border-blue-500 w-24"></h1>
        <p className="text-2xl font-semibold">Follow Us</p>
        <div className="flex gap-3">
          <p className="cursor-pointer">
            <LinkedInIcon sx={{ fontSize: "35px" }} />
          </p>
          <p className="cursor-pointer">
            <FacebookOutlinedIcon sx={{ fontSize: "35px" }} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
