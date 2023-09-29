import { TextField } from '@mui/material';
import React from 'react';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
const ContactForm = () => {
    return (
        <div>
            <h3 className='text-4xl font-semibold'>Start a conversation with us</h3>
            <div className='mt-12 '>
               <form className='space-y-10'>
               <div className='w-full relative'>
                <input className='border-b-2 ps-8 pb-3 bg-transparent w-full outline-none' type="text" placeholder='Name*' />
                <Person3OutlinedIcon className='absolute left-0'/>
                </div>
                <div className='w-full relative'>
                <input className='border-b-2 ps-8 pb-3 bg-transparent w-full outline-none' type="text" placeholder='Company Name*' />
                <HomeOutlinedIcon className='absolute left-0'/>
                </div>
                <div className='w-full relative'>
                <input className='border-b-2 ps-8 pb-3 bg-transparent w-full outline-none' type="text" placeholder='Email*' />
                <EmailOutlinedIcon className='absolute left-0'/>
                </div>
                <div className='w-full relative'>
                <input className='border-b-2 ps-8 pb-3 bg-transparent w-full outline-none' type="text" placeholder='Phone*' />
                <LocalPhoneOutlinedIcon className='absolute left-0'/>
                </div>
                <div className='w-full relative'>
                    <textarea className='bg-transparent border-b-2 pb-3 ps-8  outline-none h-24 w-full' name="" id=""  placeholder='Your Message'></textarea>
                    <ChatBubbleOutlinedIcon className='absolute left-0'/>
                </div>
                <div className='flex justify-end mt-4'>
                <button className='px-6 py-2 rounded border' type='input'>Submit</button>
                </div>
               </form>
            </div>
        </div>
    );
};

export default ContactForm;