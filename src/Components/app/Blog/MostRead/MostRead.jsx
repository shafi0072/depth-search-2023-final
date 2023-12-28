import { blogData } from '@/src/constant/blog';
import React from 'react';

const MostRead = () => {
     return (
          <div>
               <h1 className='text-5xl my-8 '>Most Read</h1>
               {
                    blogData.map((blog, i) => {
                         return <div key={i} className='mb-5'>
                              <div className='md:flex gap-5 items-center'>
                                   <img className='h-28 w-34 rounded-md' src={blog?.image} alt="" />
                                   <div>
                                        <p className='text-xl'>{blog?.title}</p>
                                        <p className={`px-2 w-fit py-1 rounded-md ${blog?.color}`}>{ blog?.languageName}</p>
                                   </div>
                              </div>
                         </div>
                    })
               }

          </div>
     );
};

export default MostRead;