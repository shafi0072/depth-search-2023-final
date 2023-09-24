import React from 'react';
import Banner from './Banner/index'
import OurServices from './OurServices/index'
import OurPartners from "../Home/OurPartners/index"
import Projects from './Projects';
import CaseStudies from './CaseStudies';
const index = () => {
    return (
        <div>
        {/* <Banner/> */}
        <OurPartners/>
        <OurServices/>
        <Projects/>
        <CaseStudies/>
        </div>
    );
};

export default index;