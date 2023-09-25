import { caseStudies } from '@/src/constant/caseStudies';
import React from 'react';

const LeftSide = ({setSelectedCase,selectedCase}) => {

    return (
        <div className='w-full h-full relative' style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.425) ,rgba(0, 0, 0,0.87)),url(https://i.ibb.co/KGjKzYK/male-female-graphic-designers-interacting-computer.jpg)`,backgroundPosition:"center center ", backgroundSize:"cover", backgroundRepeat:"no repeat"}}>
            <h2 className='text-4xl lg:text-5xl font-semibold absolute  lg:-right-36 top-24'>Web Development <br /> Case Studies</h2>
            <div className='absolute top-72 right-0'>
                {
                    caseStudies.map((caseStudy,index)=><div onClick={()=>setSelectedCase(caseStudy?.name)} className={`text-4xl font-semibold border-b-2 border-white pb-6 pr-8 cursor-pointer hover:text-blue-500 duration-500 mb-6 ${selectedCase === caseStudy.name && "border-blue-500 text-blue-500"}`}>

                        <h2>{caseStudy.name}</h2>
                    </div>)
                }
            </div>
        </div>
    );
};

export default LeftSide;