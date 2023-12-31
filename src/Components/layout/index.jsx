import React from 'react';
import Navbar from '../shared/Navbar/index'
import Footer from '../shared/Footer';
import TawkToChat from '@/pages/TawkToChat';

const index = ({ children }) => {
    return (
        <div className='fade-in'>
            <Navbar/>
            {children}
            <TawkToChat />
            <Footer />
        </div>
    );
};

export default index;