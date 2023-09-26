import React from 'react';
import Navbar from '../shared/Navbar/index'
import Footer from '../shared/Footer';

const index = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
};

export default index;