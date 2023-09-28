import React from 'react';

const About = ({ teams }) => {
    return (
        <>
            <h1 className='uppercase text-[20px] font-bold'>DEDICATED INDUSTRY EXPERTS WITH PROVEN TRACK RECORDS</h1>
            <h2 className='text-[35px] md:text-[45px] font-bold md:my-5'>The Team You Want On Your Project</h2>
            <div className='flex mx-10 flex-wrap  justify-center md:justify-between mt-5 md:mt-10'>
                <div>
                    <h3 className='text-[70px] font-bold text-blue-500'>Expert</h3>
                    <h4 className='text-[20px] font-bold'>INDUSTRY LEADERS</h4>
                </div>
                <div>
                    <h3 className='text-[70px] font-bold text-blue-500'>{teams}+</h3>
                    <h4 className='text-[20px] font-bold'>TEAM MEMBERS</h4>
                </div>
                <div>
                    <h3 className='text-[70px] font-bold text-blue-500'>Results</h3>
                    <h4 className='text-[20px] font-bold'>DRIVEN APPROACH</h4>
                </div>
            </div>
            <button className="uppercase bg-primary px-6 py-4 rounded text-xl mt-14 font-bold ">
                contact us
            </button>
        </>
    );
};

export default About;