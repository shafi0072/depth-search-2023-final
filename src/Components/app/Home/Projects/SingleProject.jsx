import React from 'react';

const SingleProject = ({project}) => {
    return (
        <div className=' relative h-[500px] w-full rounded-lg cursor-pointer ' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.425) ,rgba(0, 0, 0,0.87)),url(${project?.image?.asset?.url})`,backgroundPosition:"center center",backgroundSize:"cover",}}>
            {/* <img className='h-[500px]' src={project.image} alt="" /> */}
           <div className='absolute bottom-12 left-6 '>
           <h2 className='text-2xl mb-6 font-semibold'>{project.projectName}</h2>
            <p className='w-2/3'>{project.description}</p>
           </div>
        </div>
    );
};

export default SingleProject;