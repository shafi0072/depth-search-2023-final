import React from 'react';

const RightSide = ({caseStudy}) => {
    return (
        <div className=' px-4 lg:px-24'>
            <div className='mt-24 lg:mt-[220px] lg:flex justify-between '>
                <h2 className='text-4xl font-semibold '>{caseStudy?.name}</h2>
                <p className='mt-2 w-full lg:w-[350px] lg:text-2xl'>{caseStudy?.description}</p>
            </div>
            <div className='mt-32 flex justify-between'>
                <div>
                    <h1 className='text-6xl md:text-[120px] lg:text-[200px] text-blue-500'>{caseStudy?.increase_in_overall}</h1>
                    <p className='md:ml-12 md:text-3xl'>Increase in overall traffic</p>
                </div>
                <div>
                    <h1 className='text-6xl md:text-[120px] lg:text-[200px] text-blue-500 '>{caseStudy?.  faster_loading_speed}</h1>
                    <p className='md:ml-3 md:text-3xl'>Faster Loading Speed</p>
                </div>
            </div>
        </div>
    );
};

export default RightSide;