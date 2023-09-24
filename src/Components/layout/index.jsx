import React from 'react';
import Navbar from '../shared/Navbar/index'

const index = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    );
};

export default index;