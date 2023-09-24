import { allProjects } from '@/src/constant/project';
import React from 'react';
import SingleProject from './SingleProject';

const Project = ({selectedCategory}) => {
    const projects = allProjects.filter(project=>project.category === selectedCategory)
    console.log("featured Project",projects)
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-screen-2xl mx-auto'>
            {
                projects.map((project,index)=><SingleProject key={index} project={project}/>)
            }
        </div>
    );
};

export default Project;