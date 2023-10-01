import { TextField } from '@mui/material';
import React from 'react';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
import Swal from 'sweetalert2';
const ContactForm = () => {
    const submitForm = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const companyName = e.target.companyName.value;
        const email = e.target.email.value;
        const number = e.target.number.value;
        const message = e.target.message.value;
        fetch(`https://depth-search-server-2023.vercel.app/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": name,
                "companyName": companyName,
                "email": email,
                "number": number,
                "message": message
            })
        })
            .then(res => res.json())
            .then(data => {
                if(data){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your message has been sent successfully!!',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
            .catch(err => console.log({ err }))

    }
    return (
        <div>
            <h3 className='text-4xl font-semibold'>Start a conversation with us</h3>
            <div className='mt-12 '>
                <form className='space-y-10' onSubmit={submitForm}>
                    <div className='w-full relative'>
                        <input className='border-b-2 ps-8 pb-3 bg-transparent w-full outline-none' name='name' type="text" placeholder='Name*' />
                        <Person3OutlinedIcon className='absolute left-0' />
                    </div>
                    <div className='w-full relative'>
                        <input className='border-b-2 ps-8 pb-3 bg-transparent w-full outline-none' name='companyName' type="text" placeholder='Company Name*' />
                        <HomeOutlinedIcon className='absolute left-0' />
                    </div>
                    <div className='w-full relative'>
                        <input className='border-b-2 ps-8 pb-3 bg-transparent w-full outline-none' name='email' type="text" placeholder='Email*' />
                        <EmailOutlinedIcon className='absolute left-0' />
                    </div>
                    <div className='w-full relative'>
                        <input className='border-b-2 ps-8 pb-3 bg-transparent w-full outline-none' type="text" name='number' placeholder='Number*' />
                        <LocalPhoneOutlinedIcon className='absolute left-0' />
                    </div>
                    <div className='w-full relative'>
                        <textarea className='bg-transparent border-b-2 pb-3 ps-8  outline-none h-24 w-full' name="message" id="" placeholder='Your Message'></textarea>
                        <ChatBubbleOutlinedIcon className='absolute left-0' />
                    </div>
                    <div className='flex justify-end mt-4'>
                        <button className='px-6 py-2 rounded border' type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;