import React from 'react';
import ContactLeft from './ContactLeft';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div className='max-w-screen-2xl mx-auto xl:px-12 my-24 flex items-center justify-between '>
            <div>
                <ContactLeft/>
            </div>
            <div>
                <ContactForm/>
            </div>
        </div>
    );
};

export default Contact;