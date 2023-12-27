import Image from 'next/image';
import visionImg from "../../../../../public/image/about/1.png";
import icon from '../../../../../public/image/vision/visionIcon1.png';


const Vision = () => {
  return (
    <div className="pt-28 sm:pt-32 md:pt-28 container mx-auto">
      {/* title section start */}
      <div className='text-center'>
        <h1 className='text-lg sm:text-3xl sm:ml-36 md:ml-0 lg:text-4xl font-bold'>Strategic Plan (Mission & Vision)</h1>
      </div>
      {/* title section end */}
      {/* description section start */}
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center mt-20 gap-20 sm:gap-28 md:gap-14 sm:mt-28'>
        <div className="relative md:ml-20 lg:ml-0">
          <div className='bg-black w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[250px] md:h-[250px] lg:w-[280px] lg:h-[280px] mx-auto transform rotate-45 overflow-hidden relative'>
            <div className=' w-[100%] mx-auto transform -rotate-45 absolute scale-[140%]'>
                <Image src={visionImg}></Image>
            </div>
          </div>
          <div className='absolute left-32 sm:top-[64%] sm:left-[46%]  md:top-[58%] md:left-[42%] lg:top-72 lg:left-40'>
            <Image src={icon} className="rounded-full w-14"></Image>
          </div>
          <div className="mt-20 sm:mt-24">
            <h1 className='text-white text-2xl sm:text-4xl md:text-3xl lg:text-3xl'>Vision</h1>
            <p className="text-lg sm:text-2xl md:text-lg lg:text-xl">Lorem ipsum dolor, sit amet <br></br>consectetur adipisicing elit.<br></br>Ea, facere!</p>
          </div>
        </div>
        <div className="relative md:ml-20 lg:ml-0">
          <div className='bg-black w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[250px] md:h-[250px] lg:w-[280px] lg:h-[280px] mx-auto transform rotate-45 overflow-hidden relative'>
            <div className=' w-[100%] mx-auto transform -rotate-45 absolute scale-[140%]'>
                <Image src={visionImg}></Image>
            </div>
          </div>
          <div className='absolute left-32 sm:top-[64%] sm:left-[46%]  md:top-[58%] md:left-[42%] lg:top-72 lg:left-40'>
            <Image src={icon} className="rounded-full w-14"></Image>
          </div>
          <div className="mt-20 sm:mt-24">
            <h1 className='text-white text-2xl sm:text-4xl md:text-3xl lg:text-3xl'>Vision</h1>
            <p className="text-lg sm:text-2xl md:text-lg lg:text-xl">Lorem ipsum dolor, sit amet <br></br>consectetur adipisicing elit.<br></br>Ea, facere!</p>
          </div>
        </div>
        <div className="relative md:ml-20 md:mt-10 lg:mt-0 lg:ml-0">
          <div className='bg-black w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[250px] md:h-[250px] lg:w-[280px] lg:h-[280px] mx-auto transform rotate-45 overflow-hidden relative'>
            <div className=' w-[100%] mx-auto transform -rotate-45 absolute scale-[140%]'>
                <Image src={visionImg}></Image>
            </div>
          </div>
          <div className='absolute left-32 sm:top-[64%] sm:left-[46%]  md:top-[58%] md:left-[42%] lg:top-72 lg:left-40'>
            <Image src={icon} className="rounded-full w-14"></Image>
          </div>
          <div className="mt-20 sm:mt-24">
            <h1 className='text-white text-2xl sm:text-4xl md:text-3xl lg:text-3xl'>Vision</h1>
            <p className="text-lg sm:text-2xl md:text-lg lg:text-xl">Lorem ipsum dolor, sit amet <br></br>consectetur adipisicing elit.<br></br>Ea, facere!</p>
          </div>
        </div>
      </div>
      {/* description section end */}
    </div>
  );
};

export default Vision;