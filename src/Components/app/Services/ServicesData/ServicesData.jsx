import React, { useEffect, useState, useRef } from 'react';
import ForwardOutlinedIcon from '@mui/icons-material/ForwardOutlined';
import { createClient, groq } from 'next-sanity';
const ServicesData = () => {
    const [services, setServices] = useState([])

    const servicesRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, [servicesRef]);

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
                groq`*[_type == "services"]{
        _id,
        title,
        description,
        image{
            asset->{
                _id,
                url
            }
        },
        services,
      }`
            )
            .then((data) => {
                // console.log({data});
                setServices(data?.reverse())
                // Access the full array of navbar data here
            });
    }, []);
    
    return (
        <div className='max-w-7xl mx-auto'>
            {services?.map((item, index) => <div key={index} ref={servicesRef} className={`animate-from-${index + 1 } flex  flex-col md:flex-row justify-between items-center mb-10`}>

                <div className={`w-11/12 mx-auto  md:mx-0 md:w-5/12 ${index % 2 === 0 ? 'order-1' : 'order-2'}`} >
                    <img src={item?.image?.asset?.url} className='w-full h-full object-cover' alt="" />
                </div>
                <div className={` ms-5 py-10 w-full md:w-5/12 ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                    <h2 className='text-4xl font-bold'> {item?.title} </h2>
                    <h3 className='text-md  font-medium my-4'> {item?.description} </h3>
                    <button className="uppercase  bg-primary px-6 py-4 rounded text-xl mr-4 my-5">
                        Request a proposal
                    </button>
                    <ul>
                        {
                            item?.services?.map((data, index) => <li key={index} className='text-lg'> <ForwardOutlinedIcon className='text-red-500'/> {data} </li>)
                        }
                    </ul>
                </div>
            </div>)}
        </div>
    );
};

export default ServicesData;