import React from "react";
import Cards from "./Cards";
import { services } from "@/src/constant/services";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  return (
    <div className="our-services h-full  bg-black ">
      <div className="container py-24 px-4 lg:px-0">
        <div className="md:flex justify-between items-center text-white ">
          <div>
            <p className="text-primary text-xl font-semibold">OUR SERVICES</p>
            <h2 className="text-4xl font-bold text-white">SERVICES WE OFFER</h2>
          </div>
          <div>
            <p className="text-gray-300 mt-6">
              There are many variations of passages of available but majority
              alteration in some <br /> form, by humou or randomised words
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services?.map((service, index) => (
            <Cards key={index} service={service} />
          ))}
        </div>
        <div className="flex items-center justify-center mt-8">
          <button
            onClick={() => router.push("/services")}
            className="px-6 py-2 rounded border"
          >
            See All
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
