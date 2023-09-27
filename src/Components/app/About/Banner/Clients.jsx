import { createClient, groq } from 'next-sanity';
import React, { useEffect, useState } from 'react';

const Clients = () => {
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
                console.log({ data });
                setPartners(data)
                // Access the full array of navbar data here
            });
    }, []);
    return (
        <>
            <h1 className='uppercase text-[20px] font-bold'>WE PARTNER WITH BRANDS TO</h1>
            <h2 className='text-[45px] font-bold my-5'>Create Superior Digital Experiences</h2>
            <div className='max-10 grid grid-cols-5 gap-x-10 my-10 gap-y-10 '>
                {partners?.reverse()?.slice(0,8)?.map((item, index) => <div key={index} className=' flex justify-center items-center '>
                    <img src={item?.mainImage?.asset?.url} alt="" />
                </div>)}
            </div>
            <button className="uppercase bg-primary px-6 py-4 rounded text-xl mt-14 font-bold ">
                contact us
            </button>
        </>
    );
};

export default Clients;