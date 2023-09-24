import { caseStudies } from '@/src/constant/caseStudies';
import React from 'react';

const LeftSide = () => {

    return (
        <div className='w-full h-[700px] relative' style={{backgroundImage:`url(https://i.ibb.co/yWbLhGd/photo-1587387119725-9d6bac0f22fb.jpg)`,backgroundPosition:"center center ", backgroundSize:"cover", backgroundRepeat:"no repeat"}}>
            <h2 className='text-4xl lg:text-5xl font-semibold absolute -right-36 top-16'>Web Development <br /> Case Studies</h2>
            {/* <div>
                {
                    caseStudies.map((caseStudy,index)=>)
                }
            </div> */}
        </div>
    );
};

export default LeftSide;