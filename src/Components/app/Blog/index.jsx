import React, { useState } from 'react';
import RecentPost from './RecentPost/RecentPost';
import MostRead from './MostRead/MostRead';
import FeaturePost from './FeaturePost/FeaturePost';

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
                    {/* card 1 */}
                    <div>
                         <div>
                              <img className='h-80 w-full' src="https://img.freepik.com/free-vector/programmers-using-javascript-programming-language-computer-tiny-people-javascript-language-javascript-engine-js-web-development-concept-bright-vibrant-violet-isolated-illustration_335657-986.jpg?size=626&ext=jpg&uid=R127925613&ga=GA1.1.825466924.1700731047&semt=ais" alt="" />
                         </div>
                         <div>
                              <div className='mt-5'>
                                   <div className='flex items-center gap-3'>
                                        <p className='bg-blue-400 px-2 py-1 rounded-md'>javascript</p>
                                        <p>12-11-2020</p>
                                   </div>
                                   <p className='text-xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quis.</p>
                              </div>
                         </div>
                    </div>
                    {/* card 2 */}
                    <div>
                         <div>
                              <img className='h-80 w-full' src="https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg?size=626&ext=jpg&uid=R127925613&ga=GA1.1.825466924.1700731047&semt=ais" alt="" />
                         </div>
                         <div>
                              <div className='mt-5'>
                                   <div className='flex items-center gap-3'>
                                        <p className='bg-blue-400 px-2 py-1 rounded-md'>Python</p>
                                        <p>12-11-2020</p>
                                   </div>
                                   <p className='text-xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quis.</p>
                              </div>
                         </div>
                    </div>

               </div>
               <RecentPost />
               <div className='w-[100%] md:flex justify-between mb-10'>
                    <div className='w-[65%]'>
                         <FeaturePost />
                    </div>
                    <div className='w-[32%]'>
                         <MostRead/>
                    </div>
               </div>
          </div>
     );
};

export default Blog;