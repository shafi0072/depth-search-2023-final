import React from 'react';
import Banner from './Banner/index'
import OurServices from './OurServices/index'
import OurPartners from "../Home/OurPartners/index"
const index = () => {
    return (
        <div>
        <Banner/>
        <OurPartners/>
        <OurServices/>
        </div>
    );
};

export default index;