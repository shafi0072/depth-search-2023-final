import { Translate } from '@mui/icons-material';
import { createClient, groq } from 'next-sanity';
import React, { useEffect, useState } from 'react';

const Cases = () => {
    const [cases, setCases] = useState([])
    const projectId = 'kwzw2vfn';
    const dataset = 'production'
    const apiVersion = "2023-05-03";
    const client = createClient({
        projectId,
        dataset,
        apiVersion, // https://www.sanity.io/docs/api-versioning
        useCdn: true, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
      });
      useEffect( () => {
        client
          .fetch(
            groq`*[_type == "case"]{
        _id,
        title,
        description,
        image{
            asset->{
                _id,
                url
            }
        },
        logo{
            asset->{
                _id,
                url
            }
        },
        description,
        
      }`
          )
          .then((data) => {
            // console.log({data});
            setCases(data)
            // Access the full array of navbar data here
          });
      }, []);
    
    return (
        <div className='flex flex-wrap gap-4 md:gap-0 justify-center overflow-hidden'>
            {cases.map((item, index) => <div key={index} className='cases h-[500px] md:h-[600px] lg:h-[765px] md:w-6/12 lg:w-4/12 relative overflow-hidden'>
                <div className='absolute inset-0 bg-black z-10 opacity-30'></div>
                <div className='absolute inset-0 ' style={{background: `linear-gradient(0deg,rgba(27,44,92,.2),rgba(27,44,92,.2)),linear-gradient(360deg,rgba(0,3,31,.6) 2.86%,rgba(0,3,27,.526784) 31.91%,rgba(0,0,0,0) 58.72%,rgba(0,0,0,0) 81.11%)`}}></div>
                
                    <img src={item?.image?.asset?.url}  alt="" className='cases-image w-full h-full scale-110  transition-all duration-700 ' />
               
                <div className='absolute top-1/2  md:top-2/4 left-1/2  flex-col flex items-center justify-center ' style={{transform: 'translate(-50% , -50%)' ,zIndex: 10}}>
                   <div className='md:w-[340px] text-center'>
                   <img src={item?.logo?.asset?.url} className='mx-auto' alt="" />
                   <h2 className='text-2xl bold my-6'>{item?.title} </h2>
                   </div>
                   <button className='uppercase text-[22px] px-5 py-2 bg-[rgba(125,196,200,0.2)] rounded-sm border border-white hover:border-[rgb(125,196,200)] hover:bg-[rgba(255,255,255,.2)] transition-all duration-500' >Explore</button>
                </div>
                
            </div>)}
        </div>
    );
};

export default Cases;