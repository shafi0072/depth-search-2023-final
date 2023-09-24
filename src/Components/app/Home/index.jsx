import React from 'react';
import Banner from './Banner/index'
import OurServices from './OurServices/index'
import OurPartners from "../Home/OurPartners/index"
import Projects from './Projects';
const index = () => {
    return (
        <div>
        <Banner/>
        <OurPartners/>
        <OurServices/>
        <Projects/>
        </div>
    );
};

export default index;