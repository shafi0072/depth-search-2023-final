import Image from 'next/image';
import visionImg from "../../../../../public/image/about/1.png";
import icon from '../../../../../public/image/vision/visionIcon1.png';


const Vision = () => {
  return (
    <div className="pt-28 sm:pt-32 md:pt-28 container mx-auto">
     
      {/* title section end */}
      {/* description section start */}
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 text-center mt-20 gap-20 sm:gap-28 md:gap-14 sm:mt-28'>
        <div className="card-animation-1 relative md:ml-20 lg:ml-0">
          <div className='bg-black w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[250px] md:h-[250px] lg:w-[280px] lg:h-[280px] mx-auto transform rotate-45 overflow-hidden relative'>
            <div >
                <img className=' w-[100%] mx-auto transform -rotate-45 absolute scale-[180%]' src='/image/about/4.png'/>
            </div>
          </div>
          {/* <div className='absolute left-32 sm:top-[64%] sm:left-[46%]  md:top-[58%] md:left-[42%] lg:top-72 lg:left-40'>
            <Image src={icon} className="rounded-full w-14"></Image>
          </div> */}
          <div className="mt-20 sm:mt-24">
            <h1 className='text-white mb-5 text-2xl sm:text-4xl md:text-3xl lg:text-3xl'>Mission - 24</h1>
            <h1 className='text-white mb-5 text-xl sm:text-3xl md:text-3xl lg:text-2xl'>Empowering Digital Frontiers</h1>
            <p className="text-md sm:text-md md:text-md lg:text-md">At Depth Search, our mission is to redefine the landscape of web and mobile development. We are committed to delivering innovative, tailor-made solutions that drive business success. With a focus on global outreach and technological excellence, we aim to transform ideas into impactful digital experiences. Our 'Mission 24' plan symbolizes our dedication to growth, setting ambitious targets to expand our reach and deepen our expertise. We believe in building lasting relationships with our clients, ensuring every project not only meets but exceeds expectations.</p>
          </div>
        </div>
        <div className="card-animation-1 relative md:ml-20 lg:ml-0">
          <div className='bg-black w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[250px] md:h-[250px] lg:w-[280px] lg:h-[280px] mx-auto transform rotate-45 overflow-hidden relative'>
            <div className=' w-[100%] mx-auto transform -rotate-45 absolute scale-[140%]'>
                <img src='/image/about/2.png'></img>
            </div>
          </div>
          {/* <div className='absolute left-32 sm:top-[64%] sm:left-[46%]  md:top-[58%] md:left-[42%] lg:top-72 lg:left-40'>
            <Image src={icon} className="rounded-full w-14"></Image>
          </div> */}
          <div className="mt-20 sm:mt-24">
            <h1 className='text-white text-2xl mb-5 sm:text-4xl md:text-3xl lg:text-3xl'>Vision - 24</h1>
            <h1 className='text-white mb-5 text-xl sm:text-3xl md:text-3xl lg:text-2xl'>Shaping the Future of Web Innovation</h1>
            <p className="text-md sm:text-md md:text-md lg:text-md">Our vision at Depth Search is to be at the forefront of web development, leading the charge in digital transformation. We aspire to set new standards in the industry by blending creativity with cutting-edge technology. Our goal is to create digital solutions that are not just functional, but also transformative, enabling businesses to thrive in the digital era. We envision a world where our work connects people, ideas, and opportunities on a global scale, making a lasting impact on the digital landscape.

These descriptions are designed to be both inspiring and reflective of your company's goals and values, aimed at resonating with your clients and partners.</p>
          </div>
        </div>
        {/* <div className="relative md:ml-20 md:mt-10 lg:mt-0 lg:ml-0">
          <div className='bg-black w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[250px] md:h-[250px] lg:w-[280px] lg:h-[280px] mx-auto transform rotate-45 overflow-hidden relative'>
            <div className=' w-[100%] mx-auto transform -rotate-45 absolute scale-[140%]'>
                <Image src={visionImg}></Image>
            </div>
          </div>
          <div className='absolute left-32 sm:top-[64%] sm:left-[46%]  md:top-[58%] md:left-[42%] lg:top-72 lg:left-40'>
            <Image src={icon} className="rounded-full w-14"></Image>
          </div>
          <div className="mt-20 sm:mt-24">
            <h1 className='text-white mb-5 text-2xl sm:text-4xl md:text-3xl lg:text-3xl'>Vision</h1>
            <p className="text-lg sm:text-2xl md:text-lg lg:text-xl">Lorem ipsum dolor, sit amet <br></br>consectetur adipisicing elit.<br></br>Ea, facere!</p>
          </div>
        </div> */}
      </div>
      {/* description section end */}
    </div>
  );
};

export default Vision;