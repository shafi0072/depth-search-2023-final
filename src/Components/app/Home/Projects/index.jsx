import React, {  useState } from "react";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Project from "./Project";
const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("featured");

 

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
    <div className="projectBackground py-16 px-6 lg:px-0">
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
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-24 items-center justify-center my-16 max-w-screen-lg mx-auto space-y-3 md:space-y-0 ">
        {categories.map((category, index) => (
          <div
            onClick={() => setSelectedCategory(category.name)}
            className={` ${
              category.name === selectedCategory &&
              "bg-white p-6 text-black rounded-lg"
            } flex flex-col space-y-3 items-center cursor-pointer hover:text-blue-500 duration-300 w-full lg:w-[300px]`}
            key={index}
          >
            {category?.icon}
            <h2 className="text-2xl uppercase">{category?.name}</h2>
          </div>
        ))}
      </div>
      <Project selectedCategory={selectedCategory}/>
    </div>
  );
};

export default Projects;
