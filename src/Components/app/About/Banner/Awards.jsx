import { createClient, groq } from 'next-sanity';
import React, { useEffect, useState } from 'react';

const Awards = () => {
    const [awards, setAwards] = useState([])
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
                groq`*[_type == "awards"]{
        _id,
        
        logo{
            asset->{
                _id,
                url
            }
        },
        
      }`
            )
            .then((data) => {
                setAwards(data)
                // Access the full array of navbar data here
            });
    }, []);
    console.log({awards});
    return (
        <>
            <h1 className='uppercase text-[20px] font-bold'>OUR EXPERTS HAVE WON TOP</h1>
            <h2 className='text-[45px] font-bold my-5'>Agency Industry Awards</h2>
            <div className='mx-10 grid grid-cols-3 md:grid-cols-5 gap-x-5 md:gap-x-10 my-5 md:my-10 gap-y-5 md:gap-y-10 '>
                {awards?.reverse()?.slice(0,8)?.map((item, index) => <div key={index} className=' flex justify-center items-center '>
                    <img src={item?.logo?.asset?.url} alt="" />
                </div>)}
            </div>
            <button className="uppercase bg-primary px-6 py-4 rounded text-xl mt-14 font-bold ">
                contact us
            </button>
        </>
    );
};

export default Awards;