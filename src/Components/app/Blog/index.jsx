import React, { useState } from 'react';
import RecentPost from './RecentPost/RecentPost';
import MostRead from './MostRead/MostRead';
import FeaturePost from './FeaturePost/FeaturePost';
import { blogData } from '@/src/constant/blog';

const Blog = () => {

     // const [blogData, setBlogData] = useState([])

     // useEffect(() => {
     //      fetch('../../../constant/blog/blog-data.json')
     //           .then(res => res.json())
     //           .then(data => console.log(data))
     // }, [])      


     return (
          <div className='md:pt-28 max-w-7xl mx-auto'>
               <div className='grid grid-cols-1 md:grid-cols-2 justify-between gap-16'>
                    {
                         blogData.slice(0,2).map((blog, i) => {
                            return  <div key={i}>
                                   <div>
                                        <img className='h-80 w-full rounded-md' src={blog?.image} alt="" />
                                   </div>
                                   <div>
                                        <div className='mt-5'>
                                             <div className='flex items-center gap-3'>
                                                  <p className={`px-2 py-1 rounded-md ${blog?.color}`}>{ blog?.languageName}</p>
                                                  <p>{ blog?.postDate}</p>
                                             </div>
                                             <p className='text-xl font-bold'>{ blog?.title}</p>
                                        </div>
                                   </div>
                              </div>
                         })
                    }


               </div>
               <RecentPost />
               <div className='w-[100%] md:flex justify-between mb-10'>
                    <div className='w-[65%]'>
                         <FeaturePost />
                    </div>
                    <div className='w-[32%]'>
                         <MostRead />
                    </div>
               </div>
          </div>
     );
};

export default Blog;