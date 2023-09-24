import React, { useState } from "react";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useScrollTrigger } from "@mui/material";

const Projects = () => {
  const [category, setCategory] = useState("featured");
  console.log(category);
  const categories = [
    {
      name: "featured",
      icon: <StarBorderOutlinedIcon sx={{ fontSize: "40px" }} />,
    },
    {
      name: "b2b",
      icon: <HandshakeOutlinedIcon sx={{ fontSize: "40px" }} />,
    },
    {
      name: "b2c",
      icon: <AccountBalanceWalletOutlinedIcon sx={{ fontSize: "40px" }} />,
    },
    {
      name: "e-commerce",
      icon: <ShoppingCartOutlinedIcon sx={{ fontSize: "40px" }} />,
    },
  ];
  return (
    <div className="projectBackground py-16">
      <div className="text-center">
        <h4 className="uppercase text-2xl font-semibold ">
          EXPLORE OUR PORTFOLIO
        </h4>
        <h2 className="text-4xl md:text-5xl my-3 font-semibold">
          Featured Web Development Projects
        </h2>
        <p className="text-2xl font-semibold">
          Custom B2B & B2C Digital Experiences Engineered To Perform
        </p>
      </div>
      <div className="flex gap-24 items-center justify-center my-16">
        {categories.map((category, index) => (
          <div
            onClick={() => setCategory(category.name)}
            className="flex flex-col space-y-3 items-center"
          >
            {category?.icon}
            <h2 className="text-2xl uppercase">{category?.name}</h2>
          </div>
        ))}
        {/* <div className="flex flex-col space-y-3 items-center">
          <ShoppingCartOutlinedIcon sx={{fontSize:"40px"}} />
          <h2>E-COMMERCE</h2>
          
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
