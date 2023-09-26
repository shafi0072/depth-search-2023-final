
import { createClient, groq } from "next-sanity";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const index = () => {
  const [partners, setPartners] = useState([])
  const projectId = 'kwzw2vfn';
    const dataset = 'production'
    const apiVersion = "2023-05-03";
    const client = createClient({
        projectId,
        dataset,
        apiVersion, // https://www.sanity.io/docs/api-versioning
        useCdn: true, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
      });
      useEffect(() => {
        client
          .fetch(
            groq`*[_type == "partners"]{
        _id,
        name,
        slug,
        mainImage{
            asset->{
                _id,
                url
            }
        },
        bio,
        "dropdownData": dropdownData[]{
          title
        }
      }`
          )
          .then((data) => {
            console.log({data});
            setPartners(data)
            // Access the full array of navbar data here
          });
      }, []);

  return (
    //jdfkjd
    <div className="partnersBackground text-white">
      <h3 className="text-2xl md:text-4xl font-semibold text-center pt-6">
        Our Partners
      </h3>
      <div className="py-6">
        <Marquee>

          {partners.map(item => <img
            className="w-[200px] h-auto object-cover mr-20"
            src={item?.mainImage?.asset?.url}
            alt=""
          />)}
          
          
        </Marquee>
      </div>
    </div>
  );
};

export default index;
