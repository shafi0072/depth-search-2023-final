import React, { useRef, useState, useEffect } from 'react';
import ContactLeft from './ContactLeft';
import ContactForm from './ContactForm';

const Contact = () => {

    const contactusForam = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        });

        if (contactusForam.current) {
            observer.observe(contactusForam.current);
        }

        return () => {
            if (contactusForam.current) {
                observer.unobserve(contactusForam.current);
            }
        };
    }, [contactusForam]);


    return (
        <div ref={contactusForam} className='max-w-screen-2xl mx-auto xl:px-12 my-24 lg:flex items-center justify-between space-y-6 lg:space-y-6'>
            <div className={isVisible && 'animate-from-1 px-8'} >
                <ContactLeft />
            </div>
            <div className={isVisible && 'animate-from-2 px-8'}>
                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;