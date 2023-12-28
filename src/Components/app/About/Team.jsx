import React from 'react';

const Team = ({ teams }) => {
    return (
        <div className='mt-[150px]  mx-10 mb-[50px]'>
            <div className='text-center'>
                <h2 className='text-[38px] font-bold'>Meet The Leadership Team</h2>
                <p className='text-md font-medium mt-5'>Top industry with proven experience who are hands-on in managing projects</p>
            </div>
            <div className='mt-[70px] gap-y-3 md:gap-y-0 grid  md:grid-cols-3 lg:grid-cols-4'>
                {
                    teams?.sort((a, b) => a.id - b.id)?.map((item, index) => <div key={index} className='w-full h-[300px] md:h-[500px] relative'>
                        <img src={item?.image?.asset?.url} className='w-full h-full object-cover ' style={{ filter: 'grayscale(100%)' }} alt="" />
                        <div className='absolute bottom-0 left-0 right-0 ps-3 pb-3' style={{background: 'rgba(0,0,0,0.5)'}}>
                            <h3 className='text-[22px] font-bold'>
                                {item?.name}
                            </h3>
                            <p className='text-[18px]'>{item?.position}</p>

                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Team;