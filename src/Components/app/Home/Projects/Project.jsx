import { allProjects } from '@/src/constant/project';
import React, { useEffect, useState, useRef } from 'react';
import SingleProject from './SingleProject';
import { createClient, groq } from 'next-sanity';

const Project = ({ selectedCategory }) => {
  const [projects, setProjects] = useState([])
  const projectId = 'kwzw2vfn';
  const dataset = 'production'
  const apiVersion = "2023-05-03";
  const client = createClient({
    projectId,
    dataset,
    apiVersion, // https://www.sanity.io/docs/api-versioning
    useCdn: true, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
  });
  useEffect(() => {
    client
      .fetch(
        groq`*[_type == "project"]{
        _id,
        projectName,
        description,
        image{
            asset->{
                _id,
                url
            }
        },
        category,
        livelink
      }`
      )
      .then((data) => {
        // console.log({data});
        setProjects(data)
        // Access the full array of navbar data here
      });
  }, []);
  const projectCardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });

    if (projectCardRef.current) {
      observer.observe(projectCardRef.current);
    }

    return () => {
      if (projectCardRef.current) {
        observer.unobserve(projectCardRef.current);
      }
    };
  }, [projectCardRef]);
  const datas = projects.filter(project => project?.category === selectedCategory)
  return (
    <div ref={projectCardRef} className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-screen-2xl mx-auto'>
      {
        datas.map((project, index) => <div key={index} className={isVisible && `animate-from-${index + 1}`} ><SingleProject project={project} /></div>)
}
        </div >
    );
};

export default Project;