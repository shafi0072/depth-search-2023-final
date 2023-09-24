// Import next/dynamic
import dynamic from 'next/dynamic';

const DynamicSanity = dynamic(() => import('next-sanity'), {
  ssr: false, // Disable server-side rendering for this component
});

// Now you can access createClient and groq directly
const { createClient, groq } = DynamicSanity;



import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const index = () => {
  // const [partners, setPartners] = useState([]);
  // const client = createClient({
  //   projectId: "kwzw2vfn",
  //   dataset: "production",
  //   apiVersion:"2023-05-03", // https://www.sanity.io/docs/api-versioning
  //   useCdn: true, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
  // });
  // useEffect(() => {
  //   client
  //     .fetch(
  //       groq
  //       `*[_type == "partners"]{
  //     name,
  //     url,
     
  //     mainImage{
  //       asset->{
  //         _id,
  //         url
  //       }
  //     },
     
  
  
  //   }`
  //     )
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err));
  // }, []);
  return (
    //jdfkjd
    <div className="bg-black text-white">
      <h3 className="text-2xl md:text-4xl font-semibold text-center pt-6">
        Our Partners
      </h3>
      <div className="py-6">
        <Marquee>
          <img
            className="w-[200px]  mr-20"
            src="https://i.ibb.co/mbpGP4p/c67b96a3d390925e119091454dd426a2-removebg-preview.png"
            alt=""
          />
          <img
            className="w-[200px]  mr-20"
            src="https://i.ibb.co/mbpGP4p/c67b96a3d390925e119091454dd426a2-removebg-preview.png"
            alt=""
          />
          <img
            className="w-[200px]  mr-20"
            src="https://i.ibb.co/mbpGP4p/c67b96a3d390925e119091454dd426a2-removebg-preview.png"
            alt=""
          />
          <img
            className="w-[200px]  mr-20"
            src="https://i.ibb.co/mbpGP4p/c67b96a3d390925e119091454dd426a2-removebg-preview.png"
            alt=""
          />
        </Marquee>
      </div>
    </div>
  );
};

export default index;
