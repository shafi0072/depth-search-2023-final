import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import MobileNavMenu from "./MobileNavMenu";
const index = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <div className="px-4 py-3 flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img
            className="h- w-8"
            src="https://i.ibb.co/5L1dmVz/logotwo.png"
            alt=""
          />
          <h2 className="text-2xl font-bold">DEPTH SEARCH</h2>
        </div>
        <div>
          <FaBars onClick={() => setShowMenu(!showMenu)} className="text-2xl" />
        </div>
      </div>
      {showMenu === true && <MobileNavMenu />}
    </div>
  );
};

export default index;
