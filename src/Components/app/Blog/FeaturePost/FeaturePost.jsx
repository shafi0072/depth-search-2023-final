import { blogData } from '@/src/constant/blog';
import React from 'react';

const FeaturePost = () => {
     return (
          <div>
               <h1 className='text-5xl my-8'>Features Post</h1>
               <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    {
                         blogData.slice(0, 4).map((blog, i) => {
                           return   <div key={i}>
                                   <div>
                                        <img className='h-62 w-full rounded-md' src={blog?.image} alt="" />
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
          </div>
     );
};

export default FeaturePost;