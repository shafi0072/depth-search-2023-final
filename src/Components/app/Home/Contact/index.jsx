import React from 'react';
import ContactLeft from './ContactLeft';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div className='max-w-screen-2xl mx-auto xl:px-12 my-24 lg:flex items-center justify-between space-y-6 lg:space-y-6'>
            <div className='px-8'>
                <ContactLeft/>
            </div>
            <div className='px-8'>
                <ContactForm/>
            </div>
        </div>
    );
};

export default Contact;