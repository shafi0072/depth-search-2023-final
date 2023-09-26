import React from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
const Banner = () => {
    return (
        <div className='pb-5 max-w-6xl mx-auto md:h-[100vh] pt-12'>
            <div className='h-[70vh] mt-16'> hfyrhf</div>
            <div className='flex '>
                <div className='md:w-3/12 flex gap-2 border-b border-white justify-center pb-5 relative'>
                    <div className='absolute right-0 top-1/3 bg-[#5c5a5a] w-[1px] h-[20px] -translate-y-1/2'></div>
                    <InfoOutlinedIcon style={{color: '#5c5a5a'}} fontSize='large' />
                    <button className='text-2xl'>ABOUT</button>
                </div>
                <div className='md:w-3/12 flex gap-2 justify-center border-b border-white pb-5 relative'>
                    <div className='absolute right-0 top-1/3 bg-[#5c5a5a] w-[1px] h-[20px] -translate-y-1/2'></div>
                    <Person3OutlinedIcon style={{color: '#5c5a5a'}} fontSize='large' />
                    <button className='text-2xl'>CLIENTS</button>
                </div>
                <div className='md:w-3/12 flex gap-2 justify-center border-b border-white pb-5 relative'>
                    <div className='absolute right-0 top-1/3 bg-[#5c5a5a] w-[1px] h-[20px] -translate-y-1/2'></div>
                    <img className='opacity-[0.5]' src="https://www.digitalsilk.com/wp-content/uploads/2022/09/awards.svg" alt="" />
                    <button className='text-2xl'>AWARDS</button>
                </div>
                <div className='md:w-3/12 flex gap-2 justify-center border-b border-white pb-5 relative'>
                    <div className='absolute right-0 top-1/3 bg-[#5c5a5a] w-[1px] h-[20px] -translate-y-1/2'></div>
                    <DescriptionOutlinedIcon style={{color: '#5c5a5a'}} fontSize='large' />
                    <button className='text-2xl'>RECOGNITION</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;