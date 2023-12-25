import React from "react";
import webIcon from "../../../../../public/image/services/icons/8759392.png";
import { FaDesktop } from "react-icons/fa";

const Cards = ({service}) => {
  return (
    <div className="text-white p-12 bg-[rgb(18,27,33)] rounded">
      <div className="border-b-2 border-gray-500 card-bg relative">
        <h3 className="uppercase text-xl font-bold pb-6">
         {service?.name}
        </h3>
        <p className="px-1.5 py-1 absolute right-0 bottom-0 inline ">
          {/* {service?.id} */}
        </p>
      </div>
      <div>
       <div className="my-4">
       {
        service?.icon
       }
       </div>
        <p>
          {service?.description ?  service?.description.slice(0,80).replace(/\s[^\s]*$/, '') : ''}...
        </p>
      </div>
    </div>
  );
};

export default Cards;
